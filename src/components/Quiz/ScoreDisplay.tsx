/* File: src/components/Quiz/ScoreDisplay.tsx */

import { motion } from 'framer-motion';
import { ScoreDisplayProps } from './types';

export function ScoreDisplay({ score, totalQuestions, isCompleted }: ScoreDisplayProps) {
  const maxScore = totalQuestions * 2; // Each correct answer is worth 2 points
  const percentage = Math.round((score / maxScore) * 100);

  if (isCompleted) {
    return (
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className='text-center p-6 rounded-xl bg-purple-600 bg-opacity-10'>
        <h2 className='text-2xl font-bold mb-4'>Quiz Complete!</h2>
        <div className='space-y-2'>
          <p className='text-xl'>
            Final Score: <span className='font-bold text-purple-500'>{score}</span>
          </p>
          <p className='text-lg'>
            Percentage: <span className='font-bold text-purple-500'>{percentage}%</span>
          </p>
          <p className='text-sm text-gray-400 mt-2'>(Max possible score: {maxScore})</p>
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
