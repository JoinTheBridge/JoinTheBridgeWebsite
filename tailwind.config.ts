import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e6f2f5',
          100: '#cce5eb',
          200: '#99cbd7',
          300: '#66b1c3',
          400: '#3397af',
          500: '#1a5f7a', // Ocean Blue - BRIDGE primary
          600: '#154c62',
          700: '#103949',
          800: '#0a2631',
          900: '#051318',
        },
        accent: {
          50: '#fff4ed',
          100: '#ffe9db',
          200: '#ffd3b7',
          300: '#ffbd93',
          400: '#ffa76f',
          500: '#ff6b35', // Coral Orange - BRIDGE accent
          600: '#cc562a',
          700: '#994020',
          800: '#662b15',
          900: '#33150b',
        },
        glow: {
          cyan: '#00d4ff',
          purple: '#b87fff',
          pink: '#ff6ec7',
        },
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite',
        'slide-up': 'slideUp 0.8s ease-out',
        'fade-in': 'fadeIn 1s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%, 100%': { 
            boxShadow: '0 0 20px rgba(0, 212, 255, 0.4)' 
          },
          '50%': { 
            boxShadow: '0 0 40px rgba(0, 212, 255, 0.8)' 
          },
        },
        slideUp: {
          '0%': { 
            transform: 'translateY(60px)', 
            opacity: '0' 
          },
          '100%': { 
            transform: 'translateY(0)', 
            opacity: '1' 
          },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};

export default config;
