/* File: src/components/Quiz/QuestionCard.tsx */

import { motion } from 'framer-motion';
import { QuestionCardProps } from './types';

const variants = {
  enter: { opacity: 0, x: 50 },
  center: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -50 },
};

const optionLabels = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

const difficultyStyles: Record<string, string> = {
  easy: 'bg-[var(--accent2)] bg-opacity-20 text-[var(--accent2)] border border-[var(--accent2)] border-opacity-30',
  medium: 'bg-[var(--accent3)] bg-opacity-20 text-[var(--accent3)] border border-[var(--accent3)] border-opacity-30',
  hard: 'bg-[var(--error)] bg-opacity-20 text-[var(--error)] border border-[var(--error)] border-opacity-30',
};

export function QuestionCard({ question, onAnswer, isAnswered, selectedAnswer }: QuestionCardProps) {
  return (
    <motion.div
      initial='enter'
      animate='center'
      exit='exit'
      variants={variants}
      transition={{ duration: 0.3 }}
      className='glass-card p-6'
    >
      {/* Question Header */}
      <div className='mb-4 flex justify-between items-center'>
        <span
          className={`text-xs font-bold px-3 py-1 rounded-full ${difficultyStyles[question.difficulty]}`}
          aria-label={`Difficulty: ${question.difficulty}`}
        >
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

          let optionStyle = '';
          if (isAnswered) {
            if (isCorrect) {
              optionStyle = 'bg-[var(--success)] bg-opacity-20 border-[var(--success)] sparkle-effect';
            } else if (isIncorrect) {
              optionStyle = 'bg-[var(--error)] bg-opacity-20 border-[var(--error)] shake-effect';
            } else {
              optionStyle = 'glass-card opacity-60';
            }
          } else {
            optionStyle = 'glass-card hover:border-[var(--primary)] hover:border-opacity-40 hover:shadow-md';
          }

          return (
            <motion.button
              key={index}
              onClick={() => !isAnswered && onAnswer(option)}
              disabled={isAnswered}
              whileHover={!isAnswered ? { scale: 1.02 } : undefined}
              whileTap={!isAnswered ? { scale: 0.98 } : undefined}
              className={`
                w-full p-4 text-left rounded-2xl transition-all flex items-center gap-3
                border-2 ${isSelected && isAnswered ? '' : 'border-transparent'}
                ${optionStyle}
                disabled:cursor-not-allowed
              `}
              role='radio'
              aria-checked={isSelected}
            >
              <span className={`
                flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold
                ${isCorrect
                  ? 'bg-[var(--success)] text-white'
                  : isIncorrect
                  ? 'bg-[var(--error)] text-white'
                  : 'bg-[var(--primary)] bg-opacity-20 text-[var(--primary)]'
                }
              `}>
                {isCorrect ? '✓' : isIncorrect ? '✗' : optionLabels[index]}
              </span>
              <span className='flex-1'>{option}</span>
              {isCorrect && <span className='text-lg'>✨</span>}
            </motion.button>
          );
        })}
      </div>
    </motion.div>
  );
}
