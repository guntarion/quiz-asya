/* File: src/app/history/page.tsx */

'use client';

import Link from 'next/link';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useQuizHistory } from '@/hooks/useQuizHistory';

const CATEGORY_LABELS: Record<string, string> = {
  toons: 'Toons',
  'twisted-toons': 'Twisted Toons',
  'cookies-npc': 'Cookies and NPC',
  'gacha-treasures': 'Gacha and Treasures',
  'stories-game-modes': 'Stories and Game Modes',
  misc: 'Misc',
};

function formatDate(isoString: string): string {
  const d = new Date(isoString);
  return d.toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' });
}

export default function HistoryPage() {
  const { attempts, getStats, clearHistory } = useQuizHistory();
  const { totalAttempts, quizzesTaken, avgPercentage } = getStats();
  const [expandedQuizId, setExpandedQuizId] = useState<string | null>(null);
  const [confirmClear, setConfirmClear] = useState(false);

  // Group attempts by quizId and get best per quiz
  const quizSummaries = Array.from(
    attempts.reduce((map, attempt) => {
      if (!map.has(attempt.quizId)) {
        map.set(attempt.quizId, { quizId: attempt.quizId, quizTitle: attempt.quizTitle, category: attempt.category, attempts: [] });
      }
      map.get(attempt.quizId)!.attempts.push(attempt);
      return map;
    }, new Map<string, { quizId: string; quizTitle: string; category: string; attempts: typeof attempts }>())
  )
    .map(([, v]) => v)
    .sort((a, b) => {
      // Sort by most recent attempt
      const aLatest = Math.max(...a.attempts.map((x) => new Date(x.completedAt).getTime()));
      const bLatest = Math.max(...b.attempts.map((x) => new Date(x.completedAt).getTime()));
      return bLatest - aLatest;
    });

  return (
    <div className='min-h-screen px-4 py-8 md:px-8'>
      {/* Back Button */}
      <Link href='/' className='inline-block mb-8 text-sm text-[var(--primary)] hover:text-[var(--secondary)] transition-colors hover:-translate-x-1 transform'>
        ← Back to Home
      </Link>

      <main className='max-w-3xl mx-auto'>
        <div className='text-center mb-10'>
          <h1 className='text-4xl md:text-5xl font-bold mb-2 text-gradient'>My Progress</h1>
          <p className='text-lg opacity-70'>Track your quiz journey!</p>
        </div>

        {totalAttempts === 0 ? (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className='text-center glass-card p-12'>
            <p className='text-5xl mb-4'>🌟</p>
            <p className='text-xl font-bold mb-2'>No quizzes taken yet!</p>
            <p className='opacity-70 mb-6'>Start a quiz to see your progress here.</p>
            <Link href='/' className='px-6 py-2.5 rounded-full font-bold text-white inline-block' style={{ background: 'linear-gradient(135deg, var(--secondary), var(--primary))' }}>
              Go to Quizzes
            </Link>
          </motion.div>
        ) : (
          <>
            {/* Stats Summary */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className='grid grid-cols-3 gap-4 mb-8'>
              {[
                { label: 'Total Attempts', value: totalAttempts, emoji: '🎯' },
                { label: 'Quizzes Tried', value: quizzesTaken, emoji: '📚' },
                { label: 'Avg Score', value: `${avgPercentage}%`, emoji: '⭐' },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  className='glass-card p-4 text-center'
                >
                  <p className='text-2xl mb-1'>{stat.emoji}</p>
                  <p className='text-2xl font-bold text-gradient'>{stat.value}</p>
                  <p className='text-xs opacity-60 mt-1'>{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* Quiz list */}
            <div className='space-y-3 mb-10'>
              {quizSummaries.map((quiz, i) => {
                const bestAttempt = quiz.attempts.reduce((best, cur) => (cur.percentage > best.percentage ? cur : best));
                const latestAttempt = quiz.attempts[quiz.attempts.length - 1];
                const isExpanded = expandedQuizId === quiz.quizId;

                return (
                  <motion.div key={quiz.quizId} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.05 }} className='glass-card overflow-hidden'>
                    {/* Quiz header row */}
                    <button
                      className='w-full text-left p-4 flex items-center justify-between gap-3'
                      onClick={() => setExpandedQuizId(isExpanded ? null : quiz.quizId)}
                    >
                      <div className='flex-1 min-w-0'>
                        <div className='flex items-center gap-2 flex-wrap'>
                          <span className='font-bold truncate'>{quiz.quizTitle}</span>
                          <span className='text-xs px-2 py-0.5 rounded-full opacity-60' style={{ background: 'var(--card-border)' }}>
                            {CATEGORY_LABELS[quiz.category] ?? quiz.category}
                          </span>
                        </div>
                        <p className='text-xs opacity-50 mt-0.5'>
                          {quiz.attempts.length} attempt{quiz.attempts.length !== 1 ? 's' : ''} · Last: {formatDate(latestAttempt.completedAt)}
                        </p>
                      </div>
                      <div className='flex items-center gap-3 shrink-0'>
                        <div className='text-right'>
                          <p className='text-lg font-bold text-gradient'>{bestAttempt.percentage}%</p>
                          <p className='text-xs opacity-50'>best</p>
                        </div>
                        <span className='text-xs opacity-40 transition-transform' style={{ transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)' }}>▼</span>
                      </div>
                    </button>

                    {/* Expanded attempt history */}
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className='overflow-hidden'
                        >
                          <div className='px-4 pb-4 space-y-2 border-t border-[var(--card-border)]'>
                            <p className='text-xs opacity-50 pt-3 mb-2'>All attempts</p>
                            {[...quiz.attempts].reverse().map((attempt, j) => (
                              <div key={j} className='flex items-center justify-between text-sm'>
                                <span className='opacity-60'>{formatDate(attempt.completedAt)}</span>
                                <div className='flex items-center gap-3'>
                                  <span className='opacity-60'>{attempt.correctCount}/{attempt.totalQuestions} correct</span>
                                  <span className='font-bold' style={{ color: attempt.percentage >= 70 ? 'var(--success)' : attempt.percentage >= 50 ? 'var(--accent2)' : 'var(--error)' }}>
                                    {attempt.percentage}%
                                  </span>
                                </div>
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>

            {/* Clear history */}
            <div className='text-center'>
              {!confirmClear ? (
                <button
                  onClick={() => setConfirmClear(true)}
                  className='text-sm opacity-50 hover:opacity-80 transition-opacity underline'
                >
                  Clear all history
                </button>
              ) : (
                <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className='glass-card p-6 inline-block'>
                  <p className='font-bold mb-4'>Are you sure? This cannot be undone!</p>
                  <div className='flex gap-3 justify-center'>
                    <button
                      onClick={() => { clearHistory(); setConfirmClear(false); }}
                      className='px-5 py-2 rounded-full text-sm font-bold text-white'
                      style={{ background: 'var(--error)' }}
                    >
                      Yes, clear it
                    </button>
                    <button
                      onClick={() => setConfirmClear(false)}
                      className='px-5 py-2 rounded-full text-sm font-bold glass-card'
                    >
                      Cancel
                    </button>
                  </div>
                </motion.div>
              )}
            </div>
          </>
        )}
      </main>
    </div>
  );
}
