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
      for (let i = 0; i < 200; i++) {
        starArray.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 2 + 1,
          opacity: Math.random() * 0.8 + 0.2,
          animationDelay: Math.random() * 3,
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
      
      {/* Grain texture overlay */}
      <div className="absolute inset-0 opacity-20 bg-gradient-to-t from-transparent via-gray-800/5 to-transparent" />
    </div>
  );
}
