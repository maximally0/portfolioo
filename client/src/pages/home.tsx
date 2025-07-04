import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import AnimatedBackground from "@/components/animated-background";
import Navbar from "@/components/navbar";
import ContactModal from "@/components/contact-modal";
import HeroSection from "@/components/hero-section";

export default function Home() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      setMousePosition({ x, y });
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="relative min-h-screen bg-gray-900 overflow-hidden">
      {/* Animated Background */}
      <AnimatedBackground mousePosition={mousePosition} />
      
      {/* Navbar */}
      <Navbar onContactClick={() => setIsContactModalOpen(true)} />
      
      {/* Hero Section */}
      <HeroSection onContactClick={() => setIsContactModalOpen(true)} />
      
      {/* Contact Modal */}
      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
    </div>
  );
}
