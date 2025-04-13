/* File: src/components/Quiz/Quiz.tsx */

import { useEffect, useState } from 'react'; // Import useState
import { motion, AnimatePresence } from 'framer-motion';
import { QuizProps } from './types';
import { useQuiz } from '@/hooks/useQuiz';
import { AnswerReview } from './AnswerReview'; // Import AnswerReview
import { QuestionCard } from './QuestionCard';
import { ProgressBar } from './ProgressBar';
import { ScoreDisplay } from './ScoreDisplay';

export function Quiz({ quizId, onComplete, showProgress = true }: QuizProps) {
  // Destructure questions from useQuiz result
  const { state, actions, currentQuestion, totalQuestions, progress, questions } = useQuiz({ quizId });
  const { currentQuestionIndex, score, answers, status, loading, error } = state;

  // State to control review visibility
  const [showReview, setShowReview] = useState(false);

  // Start quiz automatically when loaded
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
        <div className='animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500' />
      </div>
    );
  }

  if (error) {
    return (
      <div className='text-center p-6 rounded-xl bg-red-500 bg-opacity-10'>
        <p className='text-red-500'>{error}</p>
      </div>
    );
  }

  // Handle completed state with review toggle
  if (status === 'completed') {
    if (showReview) {
      return (
        <AnswerReview
          questions={questions}
          answers={answers}
          onBack={() => setShowReview(false)} // Handler to go back to score
        />
      );
    } else {
      return (
        <ScoreDisplay
          score={score}
          totalQuestions={totalQuestions}
          isCompleted={true}
          onReview={() => setShowReview(true)} // Handler to show review
        />
      );
    }
  }

  // Render active quiz
  return (
    <div className='space-y-6'>
      {/* Progress and Score Section */}
      <div className='space-y-4'>
        {showProgress && <ProgressBar current={currentQuestionIndex + 1} total={totalQuestions} progress={progress} />}
        <div className='flex justify-between items-center'>
          <div className='text-sm text-gray-400'>
            Question {currentQuestionIndex + 1} of {totalQuestions}
          </div>
          <ScoreDisplay score={score} totalQuestions={totalQuestions} isCompleted={false} />
        </div>
      </div>

      {/* Question Section */}
      <AnimatePresence mode='wait'>
        {currentQuestion && (
          <motion.div key={currentQuestion.id} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
            <QuestionCard
              question={currentQuestion}
              onAnswer={(answer) => {
                actions.answerQuestion(answer);
                setTimeout(actions.nextQuestion, 1000); // Give time to show the answer result
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
