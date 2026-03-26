/* File: src/components/Quiz/Quiz.tsx */

import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { QuizProps } from './types';
import { useQuiz } from '@/hooks/useQuiz';
import { useQuizHistory } from '@/hooks/useQuizHistory';
import { AnswerReview } from './AnswerReview';
import { QuestionCard } from './QuestionCard';
import { ProgressBar } from './ProgressBar';
import { ScoreDisplay } from './ScoreDisplay';

export function Quiz({ quizId, category = 'misc', quizTitle = '', onComplete, showProgress = true }: QuizProps) {
  const { state, actions, currentQuestion, totalQuestions, progress, questions } = useQuiz({ quizId });
  const { currentQuestionIndex, score, answers, status, loading, error } = state;
  const { addAttempt, getQuizAttempts } = useQuizHistory();

  const [showReview, setShowReview] = useState(false);
  const savedRef = useRef(false); // prevent saving twice

  useEffect(() => {
    if (!loading && status === 'idle' && !error) {
      actions.startQuiz();
      savedRef.current = false;
    }
  }, [loading, status, error, actions]);

  useEffect(() => {
    if (status === 'completed' && !savedRef.current && questions.length > 0) {
      savedRef.current = true;

      const maxScore = totalQuestions * 2;
      const percentage = maxScore > 0 ? Math.round((score / maxScore) * 100) : 0;
      const correctCount = questions.filter(
        (q, i) => answers[i] === q.correctAnswer
      ).length;

      addAttempt({
        quizId,
        quizTitle,
        category,
        score,
        maxScore,
        percentage,
        correctCount,
        totalQuestions,
        completedAt: new Date().toISOString(),
        answers,
      });

      if (onComplete) onComplete(score);
    }
  }, [status, score, questions, answers, totalQuestions, quizId, quizTitle, category, addAttempt, onComplete]);

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
    const prevAttempts = getQuizAttempts(quizId);
    // exclude the attempt we just saved (last one) when calculating previous best
    const previousAttempts = savedRef.current ? prevAttempts.slice(0, -1) : prevAttempts;
    const personalBest = previousAttempts.length > 0
      ? Math.max(...previousAttempts.map((a) => a.percentage))
      : null;
    const attemptNumber = prevAttempts.length;

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
          attemptNumber={attemptNumber}
          personalBest={personalBest}
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
