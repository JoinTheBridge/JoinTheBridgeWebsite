"use client";

import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface FloatingCardProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export function FloatingCard({ children, delay = 0, className }: FloatingCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.6, 0.01, 0.05, 0.95]
      }}
      whileHover={{
        y: -10,
        transition: { duration: 0.3 }
      }}
      className={cn(
        "relative group",
        "bg-white/80 backdrop-blur-sm",
        "border border-gray-200",
        "rounded-3xl p-8",
        "shadow-xl hover:shadow-2xl",
        "transition-all duration-500",
        className
      )}
    >
      {children}
      
      {/* Subtle glow effect on hover */}
      <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary-500/10 to-accent-500/10" />
      </div>
    </motion.div>
  );
}
