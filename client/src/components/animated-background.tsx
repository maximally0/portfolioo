import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface AnimatedBackgroundProps {
  mousePosition: { x: number; y: number };
}

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  animationDelay: number;
}

export default function AnimatedBackground({ mousePosition }: AnimatedBackgroundProps) {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    const generateStars = () => {
      const starArray: Star[] = [];
      for (let i = 0; i < 300; i++) {
        starArray.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 3 + 0.5,
          opacity: Math.random() * 0.9 + 0.1,
          animationDelay: Math.random() * 5,
        });
      }
      setStars(starArray);
    };

    generateStars();
  }, []);

  return (
    <div className="fixed inset-0 z-0">
      {/* Base gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-gray-900 to-blue-900/30" />
      
      {/* Floating orbs */}
      <motion.div
        className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-float"
        style={{
          x: mousePosition.x * 10,
          y: mousePosition.y * 10,
        }}
      />
      
      <motion.div
        className="absolute bottom-32 right-24 w-80 h-80 bg-gradient-to-r from-blue-500/15 to-cyan-500/15 rounded-full blur-3xl animate-float-delayed"
        style={{
          x: mousePosition.x * 20,
          y: mousePosition.y * 20,
        }}
      />
      
      <motion.div
        className="absolute top-1/2 left-1/3 w-48 h-48 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-full blur-2xl animate-float"
        style={{
          x: mousePosition.x * 15,
          y: mousePosition.y * 15,
        }}
      />

      {/* Additional floating elements */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-32 h-32 bg-gradient-to-r from-emerald-500/8 to-teal-500/8 rounded-full blur-2xl animate-float-delayed"
        style={{
          x: mousePosition.x * 8,
          y: mousePosition.y * 12,
        }}
      />

      <motion.div
        className="absolute bottom-1/4 left-1/4 w-56 h-56 bg-gradient-to-r from-violet-500/12 to-purple-500/12 rounded-full blur-3xl animate-float"
        style={{
          x: mousePosition.x * 18,
          y: mousePosition.y * 8,
        }}
      />

      <motion.div
        className="absolute top-3/4 right-1/3 w-40 h-40 bg-gradient-to-r from-rose-500/6 to-pink-500/6 rounded-full blur-2xl animate-float-delayed"
        style={{
          x: mousePosition.x * 12,
          y: mousePosition.y * 16,
        }}
      />

      {/* Geometric shapes */}
      <motion.div
        className="absolute top-1/3 left-1/6 w-2 h-2 bg-cyan-400/60 rounded-full animate-pulse-glow"
        style={{
          x: mousePosition.x * 25,
          y: mousePosition.y * 25,
        }}
      />

      <motion.div
        className="absolute bottom-1/3 right-1/6 w-1 h-1 bg-purple-400/80 rounded-full animate-pulse-glow"
        style={{
          x: mousePosition.x * 30,
          y: mousePosition.y * 20,
        }}
      />

      <motion.div
        className="absolute top-2/3 left-2/3 w-3 h-3 bg-emerald-400/50 rounded-full animate-pulse-glow"
        style={{
          x: mousePosition.x * 22,
          y: mousePosition.y * 28,
        }}
      />
      
      {/* Star field */}
      <div className="absolute inset-0">
        {stars.map((star, index) => {
          let animationClass = "animate-twinkle";
          if (index % 3 === 0) animationClass = "animate-twinkle-delayed";
          if (index % 7 === 0) animationClass = "animate-sparkle";
          
          return (
            <motion.div
              key={star.id}
              className={`absolute bg-white rounded-full ${animationClass}`}
              style={{
                left: `${star.x}%`,
                top: `${star.y}%`,
                width: `${star.size}px`,
                height: `${star.size}px`,
                opacity: star.opacity,
                animationDelay: `${star.animationDelay}s`,
                x: index % 5 === 0 ? mousePosition.x * 5 : 0,
                y: index % 5 === 0 ? mousePosition.y * 5 : 0,
                boxShadow: index % 7 === 0 ? "0 0 10px rgba(255, 255, 255, 0.8)" : "none",
              }}
            />
          );
        })}
      </div>
      
      {/* Aurora-like effects */}
      <motion.div
        className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-purple-500/5 via-cyan-500/3 to-transparent animate-aurora"
        style={{
          x: mousePosition.x * 5,
        }}
      />

      <motion.div
        className="absolute bottom-0 right-0 w-full h-40 bg-gradient-to-t from-blue-500/4 via-violet-500/2 to-transparent animate-aurora"
        style={{
          x: mousePosition.x * -3,
        }}
      />

      {/* Drifting particles */}
      <motion.div
        className="absolute top-1/5 left-1/5 w-1 h-1 bg-white/40 rounded-full animate-drift"
        style={{
          x: mousePosition.x * 40,
          y: mousePosition.y * 30,
        }}
      />

      <motion.div
        className="absolute top-3/5 right-1/5 w-0.5 h-0.5 bg-cyan-300/60 rounded-full animate-drift"
        style={{
          x: mousePosition.x * 35,
          y: mousePosition.y * 45,
          animationDelay: "3s",
        }}
      />

      <motion.div
        className="absolute bottom-1/5 left-2/5 w-1.5 h-1.5 bg-purple-300/50 rounded-full animate-drift"
        style={{
          x: mousePosition.x * 28,
          y: mousePosition.y * 32,
          animationDelay: "6s",
        }}
      />

      {/* Grain texture overlay */}
      <div className="absolute inset-0 opacity-20 bg-gradient-to-t from-transparent via-gray-800/5 to-transparent" />
      
      {/* Subtle noise texture */}
      <div className="absolute inset-0 opacity-10 bg-gradient-to-br from-purple-900/10 via-transparent to-cyan-900/10" />
    </div>
  );
}
