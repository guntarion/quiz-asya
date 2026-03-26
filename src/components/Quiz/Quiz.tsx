/* File: src/components/Quiz/Quiz.tsx */

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { QuizProps } from './types';
import { useQuiz } from '@/hooks/useQuiz';
import { AnswerReview } from './AnswerReview';
import { QuestionCard } from './QuestionCard';
import { ProgressBar } from './ProgressBar';
import { ScoreDisplay } from './ScoreDisplay';

export function Quiz({ quizId, onComplete, showProgress = true }: QuizProps) {
  const { state, actions, currentQuestion, totalQuestions, progress, questions } = useQuiz({ quizId });
  const { currentQuestionIndex, score, answers, status, loading, error } = state;

  const [showReview, setShowReview] = useState(false);

  useEffect(() => {
    if (!loading && status === 'idle' && !error) {
      actions.startQuiz();
    }
  }, [loading, status, error, actions]);

  useEffect(() => {
    if (status === 'completed' && onComplete) {
      onComplete(score);
    }
  }, [status, score, onComplete]);

  if (loading) {
    return (
      <div className='flex items-center justify-center min-h-[300px]'>
        <div className='flex gap-2'>
          <span className='w-3 h-3 rounded-full bg-[var(--secondary)] animate-bounce [animation-delay:0ms]' />
          <span className='w-3 h-3 rounded-full bg-[var(--primary)] animate-bounce [animation-delay:150ms]' />
          <span className='w-3 h-3 rounded-full bg-[var(--accent4)] animate-bounce [animation-delay:300ms]' />
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className='text-center p-6 rounded-xl bg-[var(--error)] bg-opacity-10'>
        <p className='text-[var(--error)]'>{error}</p>
      </div>
    );
  }

  if (status === 'completed') {
    if (showReview) {
      return (
        <AnswerReview
          questions={questions}
          answers={answers}
          onBack={() => setShowReview(false)}
        />
      );
    } else {
      return (
        <ScoreDisplay
          score={score}
          totalQuestions={totalQuestions}
          isCompleted={true}
          onReview={() => setShowReview(true)}
        />
      );
    }
  }

  return (
    <div className='space-y-6'>
      <div className='space-y-4'>
        {showProgress && <ProgressBar current={currentQuestionIndex + 1} total={totalQuestions} progress={progress} />}
        <div className='flex justify-between items-center'>
          <div className='text-sm opacity-60'>
            Question {currentQuestionIndex + 1} of {totalQuestions}
          </div>
          <ScoreDisplay score={score} totalQuestions={totalQuestions} isCompleted={false} />
        </div>
      </div>

      <AnimatePresence mode='wait'>
        {currentQuestion && (
          <motion.div key={currentQuestion.id} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
            <QuestionCard
              question={currentQuestion}
              onAnswer={(answer) => {
                actions.answerQuestion(answer);
                setTimeout(actions.nextQuestion, 1000);
              }}
              isAnswered={answers[currentQuestionIndex] !== undefined}
              selectedAnswer={answers[currentQuestionIndex]}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
