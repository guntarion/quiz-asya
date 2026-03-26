{/* File: src/components/Quiz/AnswerReview.tsx */}
import React from 'react';
import { motion } from 'framer-motion';
import { AnswerReviewProps, QuizQuestion } from './types';

const getOptionStyle = (option: string, userAnswer: string | undefined, correctAnswer: string): string => {
  const isCorrect = option === correctAnswer;
  const isSelected = option === userAnswer;

  if (isSelected && isCorrect) {
    return 'bg-[var(--success)] bg-opacity-30 border-[var(--success)] font-bold';
  } else if (isSelected && !isCorrect) {
    return 'bg-[var(--error)] bg-opacity-30 border-[var(--error)] font-bold';
  } else if (isCorrect) {
    return 'border-[var(--success)] border-opacity-50 text-[var(--success)]';
  }
  return 'border-[var(--card-border)] opacity-70';
};

export function AnswerReview({ questions, answers, onBack }: AnswerReviewProps) {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className='space-y-8'>
      <div className='flex justify-between items-center mb-6'>
        <h2 className='text-2xl font-bold text-[var(--primary)]'>Review Your Answers</h2>
        <button
          onClick={onBack}
          className='px-4 py-2 glass-card rounded-lg hover:bg-[var(--primary)] hover:bg-opacity-10 transition-colors'
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
          className='glass-card p-6'
        >
          <p className='text-lg font-semibold mb-4'>
            <span className='text-[var(--primary)]'>Q{index + 1}:</span> {question.question}
          </p>
          <div className='space-y-3'>
            {question.options.map((option) => (
              <div
                key={option}
                className={`p-3 border-2 rounded-xl text-sm transition-colors ${getOptionStyle(
                  option,
                  answers[index],
                  question.correctAnswer
                )}`}
              >
                {option}
                {option === answers[index] && option === question.correctAnswer && <span className='ml-2 text-[var(--success)] font-semibold'>✓ Correct</span>}
                {option === answers[index] && option !== question.correctAnswer && <span className='ml-2 text-[var(--error)] font-semibold'>✗ Your Answer</span>}
                {option !== answers[index] && option === question.correctAnswer && <span className='ml-2 text-[var(--success)] opacity-70'>(Correct Answer)</span>}
              </div>
            ))}
          </div>
          {answers[index] !== question.correctAnswer && (
            <p className='mt-3 text-xs text-[var(--error)]'>Your answer was incorrect.</p>
          )}
          {answers[index] === question.correctAnswer && (
            <p className='mt-3 text-xs text-[var(--success)]'>Your answer was correct.</p>
          )}
        </motion.div>
      ))}

      <div className='text-center mt-8'>
        <button
          onClick={onBack}
          className='px-8 py-3 rounded-full font-bold text-white shadow-lg hover:shadow-xl transition-all hover:scale-105'
          style={{ background: 'linear-gradient(135deg, var(--secondary), var(--primary))' }}
        >
          Back to Score
        </button>
      </div>
    </motion.div>
  );
}
