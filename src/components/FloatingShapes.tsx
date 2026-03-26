'use client';

import { motion } from 'framer-motion';

const shapes = [
  { emoji: '⭐', size: 48, x: '8%', y: '12%', duration: 18, delay: 0 },
  { emoji: '💖', size: 42, x: '85%', y: '8%', duration: 22, delay: 1 },
  { emoji: '✨', size: 38, x: '15%', y: '75%', duration: 20, delay: 3 },
  { emoji: '🌸', size: 44, x: '78%', y: '68%', duration: 24, delay: 2 },
  { emoji: '💎', size: 34, x: '45%', y: '5%', duration: 19, delay: 4 },
  { emoji: '🦋', size: 40, x: '92%', y: '40%', duration: 21, delay: 1.5 },
  { emoji: '⭐', size: 30, x: '5%', y: '45%', duration: 23, delay: 2.5 },
  { emoji: '💖', size: 36, x: '55%', y: '85%', duration: 17, delay: 0.5 },
  { emoji: '🌸', size: 32, x: '35%', y: '35%', duration: 25, delay: 3.5 },
  { emoji: '✨', size: 40, x: '68%', y: '22%', duration: 20, delay: 1 },
  { emoji: '💎', size: 30, x: '22%', y: '92%', duration: 22, delay: 4.5 },
  { emoji: '🦋', size: 34, x: '72%', y: '88%', duration: 19, delay: 2 },
];

export function FloatingShapes() {
  return (
    <div className='fixed inset-0 z-[-1] overflow-hidden pointer-events-none' aria-hidden='true'>
      {shapes.map((shape, i) => (
        <motion.span
          key={i}
          className='absolute select-none'
          style={{
            left: shape.x,
            top: shape.y,
            fontSize: shape.size,
            opacity: 0.15,
          }}
          animate={{
            y: [0, -30, 0, 20, 0],
            x: [0, 15, -10, 5, 0],
            rotate: [0, 10, -10, 5, 0],
            scale: [1, 1.1, 0.95, 1.05, 1],
          }}
          transition={{
            duration: shape.duration,
            delay: shape.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          {shape.emoji}
        </motion.span>
      ))}
    </div>
  );
}
