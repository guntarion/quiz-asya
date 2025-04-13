{/* File: src/components/Quiz/AnswerReview.tsx */}
import React from 'react';
import { motion } from 'framer-motion';
import { AnswerReviewProps, QuizQuestion } from './types';

// Helper function to determine option styling
// Helper function to determine option styling
const getOptionStyle = (option: string, userAnswer: string | undefined, correctAnswer: string): string => {
  const isCorrect = option === correctAnswer;
  const isSelected = option === userAnswer;

  if (isSelected && isCorrect) {
    // Use white text on green background for high contrast
    return 'bg-green-600 bg-opacity-40 border-green-500 text-white font-bold';
  } else if (isSelected && !isCorrect) {
    // Use white text on red background for high contrast
    return 'bg-red-600 bg-opacity-40 border-red-500 text-white font-bold';
  } else if (isCorrect) {
    // Slightly lighter green text for the correct answer when not selected
    return 'border-green-500 text-green-300';
  }
  // Default style for other options
  return 'border-gray-600 hover:border-gray-500 text-gray-300';
};

export function AnswerReview({ questions, answers, onBack }: AnswerReviewProps) {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className='space-y-8'>
      <div className='flex justify-between items-center mb-6'>
        <h2 className='text-2xl font-bold text-purple-300'>Review Your Answers</h2>
        <button
          onClick={onBack}
          className='px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50'
        >
          Back to Score
        </button>
      </div>

      {questions.map((question: QuizQuestion, index: number) => (
        <motion.div
          key={question.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className='p-6 rounded-xl bg-gray-800 bg-opacity-50 border border-gray-700'
        >
          <p className='text-lg font-semibold mb-4'>
            <span className='text-purple-400'>Q{index + 1}:</span> {question.question}
          </p>
          <div className='space-y-3'>
            {question.options.map((option) => (
              <div
                key={option}
                className={`p-3 border rounded-lg text-sm transition-colors ${getOptionStyle(
                  option,
                  answers[index],
                  question.correctAnswer
                )}`}
              >
                {option}
                {/* Use white text for indicators on colored backgrounds */}
                {option === answers[index] && option === question.correctAnswer && <span className='ml-2 text-white font-semibold'>✓ Correct</span>}
                {option === answers[index] && option !== question.correctAnswer && <span className='ml-2 text-white font-semibold'>✗ Your Answer</span>}
                {/* Use lighter green for indicator on non-colored background */}
                {option !== answers[index] && option === question.correctAnswer && <span className='ml-2 text-green-300'>(Correct Answer)</span>}
              </div>
            ))}
          </div>
          {/* Adjust feedback text color for better contrast */}
          {answers[index] !== question.correctAnswer && (
             <p className='mt-3 text-xs text-red-300'>Your answer was incorrect.</p>
          )}
           {answers[index] === question.correctAnswer && (
             <p className='mt-3 text-xs text-green-300'>Your answer was correct.</p>
          )}
        </motion.div>
      ))}

      <div className='text-center mt-8'>
        <button
          onClick={onBack}
          className='px-6 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-opacity-50'
        >
          Back to Score
        </button>
      </div>
    </motion.div>
  );
}
