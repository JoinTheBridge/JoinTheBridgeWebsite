import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Animation variants for Framer Motion
export const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.8, 
      ease: [0.6, 0.01, 0.05, 0.95] 
    } 
  }
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { duration: 0.8 } 
  }
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

export const floatAnimation = {
  animate: {
    y: [0, -20, 0],
    transition: { 
      duration: 4, 
      repeat: Infinity, 
      ease: "easeInOut" 
    }
  }
};

export const glowPulse = {
  animate: {
    boxShadow: [
      "0 0 20px rgba(0, 212, 255, 0.4)",
      "0 0 40px rgba(0, 212, 255, 0.8)",
      "0 0 20px rgba(0, 212, 255, 0.4)",
    ],
    transition: { duration: 2, repeat: Infinity }
  }
};
