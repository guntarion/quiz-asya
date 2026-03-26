'use client';

import { useState, useEffect, useCallback } from 'react';
import type { QuizAttempt } from '@/components/Quiz/types';

const STORAGE_KEY = 'asya-quiz-history';

function loadHistory(): QuizAttempt[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as QuizAttempt[]) : [];
  } catch {
    return [];
  }
}

function saveHistory(attempts: QuizAttempt[]): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(attempts));
  } catch {
    // localStorage full or unavailable — fail silently
  }
}

export function useQuizHistory() {
  const [attempts, setAttempts] = useState<QuizAttempt[]>([]);

  // Load from localStorage on mount (client only)
  useEffect(() => {
    setAttempts(loadHistory());
  }, []);

  const addAttempt = useCallback((attempt: QuizAttempt) => {
    setAttempts((prev) => {
      const updated = [...prev, attempt];
      saveHistory(updated);
      return updated;
    });
  }, []);

  const getQuizAttempts = useCallback(
    (quizId: string): QuizAttempt[] => {
      return attempts.filter((a) => a.quizId === quizId);
    },
    [attempts]
  );

  const getQuizBest = useCallback(
    (quizId: string): QuizAttempt | null => {
      const quizAttempts = attempts.filter((a) => a.quizId === quizId);
      if (quizAttempts.length === 0) return null;
      return quizAttempts.reduce((best, cur) =>
        cur.percentage > best.percentage ? cur : best
      );
    },
    [attempts]
  );

  const getStats = useCallback(() => {
    const totalAttempts = attempts.length;
    const quizzesTaken = new Set(attempts.map((a) => a.quizId)).size;
    const avgPercentage =
      totalAttempts > 0
        ? Math.round(
            attempts.reduce((sum, a) => sum + a.percentage, 0) / totalAttempts
          )
        : 0;
    return { totalAttempts, quizzesTaken, avgPercentage };
  }, [attempts]);

  const clearHistory = useCallback(() => {
    setAttempts([]);
    if (typeof window !== 'undefined') {
      localStorage.removeItem(STORAGE_KEY);
    }
  }, []);

  return { attempts, addAttempt, getQuizAttempts, getQuizBest, getStats, clearHistory };
}
