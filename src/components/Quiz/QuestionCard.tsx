/* File: src/components/Quiz/QuestionCard.tsx */

import { motion } from 'framer-motion';
import { QuestionCardProps } from './types';

const variants = {
  enter: { opacity: 0, x: 50 },
  center: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -50 },
};

export function QuestionCard({ question, onAnswer, isAnswered, selectedAnswer }: QuestionCardProps) {
  // Get difficulty color
  const difficultyColor = {
    easy: 'text-green-500',
    medium: 'text-yellow-500',
    hard: 'text-red-500',
  }[question.difficulty];

  return (
    <motion.div
      initial='enter'
      animate='center'
      exit='exit'
      variants={variants}
      transition={{ duration: 0.3 }}
      className='p-6 rounded-xl bg-purple-600 bg-opacity-10'
    >
      {/* Question Header */}
      <div className='mb-4 flex justify-between items-center'>
        <span className={`text-sm font-medium ${difficultyColor}`} aria-label={`Difficulty: ${question.difficulty}`}>
          {question.difficulty.charAt(0).toUpperCase() + question.difficulty.slice(1)}
        </span>
      </div>

      {/* Question */}
      <h3 className='text-xl font-bold mb-6'>{question.question}</h3>

      {/* Options */}
      <div className='space-y-3' role='radiogroup' aria-label='Answer options'>
        {question.options.map((option, index) => {
          const isSelected = selectedAnswer === option;
          const isCorrect = isAnswered && option === question.correctAnswer;
          const isIncorrect = isAnswered && isSelected && option !== question.correctAnswer;

          return (
            <button
              key={index}
              onClick={() => !isAnswered && onAnswer(option)}
              disabled={isAnswered}
              className={`
                w-full p-4 text-left rounded-lg transition-all
                ${
                  isAnswered
                    ? isCorrect
                      ? 'bg-green-500 bg-opacity-20 border-green-500 sparkle-effect'
                      : isIncorrect
                      ? 'bg-red-500 bg-opacity-20 border-red-500 shake-effect'
                      : 'bg-purple-600 bg-opacity-20'
                    : 'bg-purple-600 bg-opacity-20 hover:bg-opacity-30'
                }
                ${isSelected ? 'border-2' : 'border-2 border-transparent'}
                disabled:cursor-not-allowed
              `}
              role='radio'
              aria-checked={isSelected}
            >
              {option}
              {isAnswered && (
                <span className='float-right'>
                  {isCorrect && '✨'}
                  {isIncorrect && '✗'}
                </span>
              )}
            </button>
          );
        })}
      </div>
    </motion.div>
  );
}
