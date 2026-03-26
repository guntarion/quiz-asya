/* File: src/components/Quiz/ProgressBar.tsx */

import { motion } from 'framer-motion';
import { ProgressBarProps } from './types';

export function ProgressBar({ current, total, progress }: ProgressBarProps) {
  return (
    <div className='w-full h-3 glass-card rounded-full overflow-hidden'>
      <motion.div
        className='h-full rounded-full'
        style={{
          background: 'linear-gradient(90deg, var(--secondary), var(--primary))',
          boxShadow: '0 0 8px var(--primary)',
        }}
        initial={{ width: 0 }}
        animate={{ width: `${progress}%` }}
        transition={{ duration: 0.3 }}
      />
      <span className='sr-only'>
        Question {current} of {total}
      </span>
    </div>
  );
}
