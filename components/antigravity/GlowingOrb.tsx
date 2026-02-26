"use client";

import { motion } from 'framer-motion';
import { useMousePosition } from '@/lib/hooks';

interface GlowingOrbProps {
  color?: 'cyan' | 'purple' | 'pink' | 'blue' | 'orange';
  size?: number;
  initialX?: number;
  initialY?: number;
}

export function GlowingOrb({ 
  color = "cyan", 
  size = 300,
  initialX = 50,
  initialY = 50 
}: GlowingOrbProps) {
  const mouse = useMousePosition();
  
  const colorMap = {
    cyan: 'rgba(0, 212, 255, 0.3)',
    purple: 'rgba(184, 127, 255, 0.3)',
    pink: 'rgba(255, 110, 199, 0.3)',
    blue: 'rgba(26, 95, 122, 0.3)',
    orange: 'rgba(255, 107, 53, 0.3)',
  };

  return (
    <motion.div
      className="absolute pointer-events-none"
      style={{
        width: size,
        height: size,
        left: `${initialX}%`,
        top: `${initialY}%`,
      }}
      animate={{
        x: mouse.x ? (mouse.x - window.innerWidth / 2) * 0.02 : 0,
        y: mouse.y ? (mouse.y - window.innerHeight / 2) * 0.02 : 0,
      }}
      transition={{
        type: "spring",
        stiffness: 50,
        damping: 20,
      }}
    >
      <motion.div
        className="w-full h-full rounded-full blur-3xl"
        style={{
          background: colorMap[color],
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </motion.div>
  );
}
