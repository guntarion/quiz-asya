/* File: src/components/Quiz/ScoreDisplay.tsx */

import { motion } from 'framer-motion';
import { ScoreDisplayProps } from './types';

// Add onReview to props
export function ScoreDisplay({ score, totalQuestions, isCompleted, onReview }: ScoreDisplayProps) {
  // Handle potential division by zero if totalQuestions is 0
  const maxScore = totalQuestions * 2;
  const percentage = maxScore > 0 ? Math.round((score / maxScore) * 100) : 0;

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
          <p className='text-sm text-gray-400 mb-6'>(Max possible score: {maxScore})</p>

          {/* Add Review Button */}
          {onReview && (
            <motion.button
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              onClick={onReview}
              className='mt-6 px-6 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-opacity-50'
            >
              Review Answers
            </motion.button>
          )}
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
