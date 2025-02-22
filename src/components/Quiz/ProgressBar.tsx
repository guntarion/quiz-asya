/* File: src/components/Quiz/ProgressBar.tsx */

import { motion } from 'framer-motion';
import { ProgressBarProps } from './types';

export function ProgressBar({ current, total, progress }: ProgressBarProps) {
  return (
    <div className='w-full h-2 bg-purple-600 bg-opacity-20 rounded-full overflow-hidden'>
      <motion.div className='h-full bg-purple-600' initial={{ width: 0 }} animate={{ width: `${progress}%` }} transition={{ duration: 0.3 }} />
      <span className='sr-only'>
        Question {current} of {total}
      </span>
    </div>
  );
}
