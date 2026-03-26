/* File: tailwind.config.ts */
import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary)',
        'primary-light': 'var(--primary-light)',
        secondary: 'var(--secondary)',
        accent1: 'var(--accent1)',
        accent2: 'var(--accent2)',
        accent3: 'var(--accent3)',
        accent4: 'var(--accent4)',
        success: 'var(--success)',
        error: 'var(--error)',
        'card-bg': 'var(--card-bg)',
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      animation: {
        float: 'float 3s ease-in-out infinite',
        'bounce-slow': 'bounce 2s ease-in-out infinite',
        'pop-in': 'popIn 0.4s ease-out',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'slide-up': 'slideUp 0.4s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      fontFamily: {
        bubblegum: ['Bubblegum Sans', 'cursive'],
      },
    },
  },
  plugins: [],
};

export default config;
