/* File: src/components/Quiz/ScoreDisplay.tsx */

import { motion } from 'framer-motion';
import { ScoreDisplayProps } from './types';

export function ScoreDisplay({ score, totalQuestions, isCompleted }: ScoreDisplayProps) {
  const maxScore = totalQuestions * 2; // Each correct answer is worth 2 points
  const percentage = Math.round((score / maxScore) * 100);

  if (isCompleted) {
    return (
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className='text-center p-8 rounded-xl bg-purple-600 bg-opacity-10'>
        <h2 className='text-3xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent'>Quiz Complete!</h2>
        <div className='space-y-4'>
          <div className='mb-6'>
            <p className='text-lg text-purple-300 mb-2'>Final Score</p>
            <motion.p
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className='text-5xl font-bold bg-gradient-to-r from-purple-300 to-purple-500 bg-clip-text text-transparent'
            >
              {score}
            </motion.p>
          </div>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className='mb-4'
          >
            <p className='text-lg text-purple-300 mb-1'>Percentage</p>
            <p className='text-3xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent'>
              {percentage}%
            </p>
          </motion.div>
          <p className='text-sm text-gray-400'>(Max possible score: {maxScore})</p>
        </div>
      </motion.div>
    );
  }

  return (
    <div className='flex items-center justify-between p-4 rounded-lg bg-purple-600 bg-opacity-10'>
      <div className='text-sm'>Current Score: </div>
      <motion.div key={score} initial={{ scale: 1.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className='text-xl font-bold text-purple-500'>
        {score}
      </motion.div>
    </div>
  );
}
