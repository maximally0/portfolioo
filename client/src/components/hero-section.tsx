import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { soundEffects } from "@/lib/sound-effects";

interface HeroSectionProps {
  onContactClick: () => void;
}

export default function HeroSection({ onContactClick }: HeroSectionProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isNearText, setIsNearText] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const heroElement = document.querySelector('.hero-content');
      if (heroElement) {
        const rect = heroElement.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        const distanceFromCenter = Math.sqrt(
          Math.pow(e.clientX - centerX, 2) + Math.pow(e.clientY - centerY, 2)
        );
        
        // If mouse is within 200px of text center, make it translucent
        setIsNearText(distanceFromCenter < 200);
        
        setMousePosition({ x: e.clientX, y: e.clientY });
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleContactClick = async () => {
    await soundEffects.playButtonClick();
    onContactClick();
  };

  return (
    <main className="relative z-10 min-h-screen flex items-center justify-center px-6">
      <div className={`text-center max-w-4xl mx-auto hero-content transition-opacity duration-300 ${isNearText ? 'opacity-30' : 'opacity-100'}`}>
        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-6xl md:text-8xl lg:text-9xl font-bold mb-6 gradient-text"
        >
          Rishul Chanana
        </motion.h1>
        
        {/* Bio */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto"
        >
          I love to learn new things, I love to host hackathons, and I love to talk to people.
        </motion.p>
        
        {/* Contact Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
        >
          <Button
            onClick={handleContactClick}
            onMouseEnter={() => soundEffects.playHover()}
            size="lg"
            className="group relative px-8 py-4 bg-gradient-to-r from-purple-600/80 to-cyan-600/80 hover:from-purple-600 hover:to-cyan-600 text-lg font-semibold transition-all duration-300 hover:scale-105 cosmic-glow backdrop-blur-sm border border-white/20 text-white"
          >
            <span className="relative z-10">Contact Me</span>
            <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400/20 to-cyan-400/20 opacity-0 group-hover:opacity-100 transition-opacity blur-xl" />
          </Button>
        </motion.div>
      </div>
    </main>
  );
}
