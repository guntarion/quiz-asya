/* File: src/hooks/useQuiz.ts */

import { useState, useCallback, useEffect } from 'react';
import { QuizState, QuizQuestion } from '@/components/Quiz/types';
import { toonsQuizzes } from '@/data/quizzes/toons';
import { twistedToonsQuizzes } from '@/data/quizzes/twistedtoons';
import { CookiesNPCQuizzes } from '@/data/quizzes/cookienpc';

interface UseQuizProps {
  quizId: string;
}

export function useQuiz({ quizId }: UseQuizProps) {
  const [state, setState] = useState<QuizState>({
    currentQuestionIndex: 0,
    score: 0,
    answers: [],
    status: 'idle',
    loading: true,
    error: null,
  });

  const [questions, setQuestions] = useState<QuizQuestion[]>([]);

  // Load quiz data
  useEffect(() => {
    try {
      // Check both quiz sets
      const quizData = toonsQuizzes[quizId] || twistedToonsQuizzes[quizId] || CookiesNPCQuizzes[quizId];
      if (!quizData) {
        throw new Error('Quiz not found');
      }
      setQuestions(quizData.questions);
      setState((prev) => ({ ...prev, loading: false }));
    } catch (error) {
      setState((prev) => ({
        ...prev,
        loading: false,
        error: error instanceof Error ? error.message : 'Failed to load quiz',
      }));
    }
  }, [quizId]);

  // Start quiz
  const startQuiz = useCallback(() => {
    setState((prev) => ({
      ...prev,
      status: 'active',
      currentQuestionIndex: 0,
      score: 0,
      answers: [],
      error: null,
    }));
  }, []);

  // Handle answer submission
  const answerQuestion = useCallback(
    (answer: string) => {
      setState((prev) => {
        const currentQuestion = questions[prev.currentQuestionIndex];
        const isCorrect = answer === currentQuestion.correctAnswer;
        const newScore = prev.score + (isCorrect ? 2 : -1);

        return {
          ...prev,
          score: Math.max(0, newScore), // Prevent negative scores
          answers: [...prev.answers, answer],
        };
      });
    },
    [questions]
  );

  // Move to next question
  const nextQuestion = useCallback(() => {
    setState((prev) => {
      const isLastQuestion = prev.currentQuestionIndex === questions.length - 1;

      if (isLastQuestion) {
        return {
          ...prev,
          status: 'completed',
        };
      }

      return {
        ...prev,
        currentQuestionIndex: prev.currentQuestionIndex + 1,
      };
    });
  }, [questions.length]);

  // Reset quiz
  const resetQuiz = useCallback(() => {
    setState({
      currentQuestionIndex: 0,
      score: 0,
      answers: [],
      status: 'idle',
      loading: false,
      error: null,
    });
  }, []);

  return {
    state,
    actions: {
      startQuiz,
      answerQuestion,
      nextQuestion,
      resetQuiz,
    },
    currentQuestion: questions[state.currentQuestionIndex],
    totalQuestions: questions.length,
    progress: (state.currentQuestionIndex / questions.length) * 100,
  };
}
