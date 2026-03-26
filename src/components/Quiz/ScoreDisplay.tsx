/* File: src/components/Quiz/ScoreDisplay.tsx */

import { motion } from 'framer-motion';
import { ScoreDisplayProps } from './types';

function getTierMessage(percentage: number): { message: string; emoji: string } {
  if (percentage >= 90) return { message: "Amazing! You're a genius!", emoji: '🌟' };
  if (percentage >= 70) return { message: 'Great job! So close to perfect!', emoji: '👏' };
  if (percentage >= 50) return { message: 'Good effort! Keep practicing!', emoji: '💪' };
  return { message: "Don't worry, try again!", emoji: '💖' };
}

function ConfettiDot({ delay, x, y, color }: { delay: number; x: number; y: number; color: string }) {
  return (
    <motion.span
      className='absolute w-2 h-2 rounded-full'
      style={{ backgroundColor: color, top: '50%', left: '50%' }}
      initial={{ x: 0, y: 0, opacity: 1, scale: 1 }}
      animate={{ x, y, opacity: 0, scale: 0 }}
      transition={{ duration: 1, delay, ease: 'easeOut' }}
    />
  );
}

export function ScoreDisplay({ score, totalQuestions, isCompleted, onReview, attemptNumber, personalBest }: ScoreDisplayProps) {
  const maxScore = totalQuestions * 2;
  const percentage = maxScore > 0 ? Math.round((score / maxScore) * 100) : 0;

  if (isCompleted) {
    const tier = getTierMessage(percentage);
    const isNewPersonalBest = personalBest !== null && personalBest !== undefined && percentage > personalBest;
    const isFirstAttempt = personalBest === null || personalBest === undefined;

    const confettiColors = ['var(--secondary)', 'var(--primary)', 'var(--accent1)', 'var(--accent2)', 'var(--accent3)', 'var(--accent4)'];
    const confettiDots = Array.from({ length: 8 }, (_, i) => ({
      delay: i * 0.08,
      x: Math.cos((i * Math.PI * 2) / 8) * 80,
      y: Math.sin((i * Math.PI * 2) / 8) * 80,
      color: confettiColors[i % confettiColors.length],
    }));

    return (
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className='text-center glass-card p-8'>
        <h2 className='text-3xl font-bold mb-2 text-gradient'>Quiz Complete!</h2>

        {/* Attempt number */}
        {attemptNumber !== undefined && attemptNumber > 0 && (
          <p className='text-sm opacity-60 mb-6'>
            Attempt #{attemptNumber}
          </p>
        )}

        <div className='space-y-6'>
          {/* Circular progress ring */}
          <div className='relative w-40 h-40 mx-auto mb-4'>
            <svg className='w-full h-full -rotate-90' viewBox='0 0 120 120'>
              <circle cx='60' cy='60' r='50' fill='none' stroke='var(--card-border)' strokeWidth='8' />
              <motion.circle
                cx='60'
                cy='60'
                r='50'
                fill='none'
                stroke='url(#scoreGradient)'
                strokeWidth='8'
                strokeLinecap='round'
                strokeDasharray={314}
                initial={{ strokeDashoffset: 314 }}
                animate={{ strokeDashoffset: 314 - (314 * percentage) / 100 }}
                transition={{ duration: 1.2, ease: 'easeOut', delay: 0.3 }}
              />
              <defs>
                <linearGradient id='scoreGradient' x1='0%' y1='0%' x2='100%' y2='0%'>
                  <stop offset='0%' stopColor='var(--secondary)' />
                  <stop offset='100%' stopColor='var(--primary)' />
                </linearGradient>
              </defs>
            </svg>
            <div className='absolute inset-0 flex flex-col items-center justify-center'>
              <motion.span
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className='text-3xl font-bold text-gradient'
              >
                {percentage}%
              </motion.span>
            </div>
            {confettiDots.map((dot, i) => (
              <ConfettiDot key={i} {...dot} />
            ))}
          </div>

          {/* Score */}
          <div>
            <p className='text-sm opacity-60 mb-1'>Final Score</p>
            <motion.p
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className='text-4xl font-bold text-gradient'
            >
              {score} <span className='text-lg opacity-60'>/ {maxScore}</span>
            </motion.p>
          </div>

          {/* Personal best comparison */}
          {!isFirstAttempt && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className='glass-card px-4 py-2 inline-block rounded-full'
            >
              {isNewPersonalBest ? (
                <span className='text-sm font-bold text-[var(--success)]'>🏆 New Personal Best! (was {personalBest}%)</span>
              ) : (
                <span className='text-sm opacity-70'>Personal Best: {personalBest}%</span>
              )}
            </motion.div>
          )}

          {/* Tier message */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <p className='text-2xl mb-1'>{tier.emoji}</p>
            <p className='text-lg font-bold'>{tier.message}</p>
          </motion.div>

          {/* Review button */}
          {onReview && (
            <motion.button
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1 }}
              onClick={onReview}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className='mt-4 px-8 py-3 rounded-full font-bold text-white shadow-lg hover:shadow-xl transition-shadow'
              style={{ background: 'linear-gradient(135deg, var(--secondary), var(--primary))' }}
            >
              Review Answers
            </motion.button>
          )}
        </div>
      </motion.div>
    );
  }

  return (
    <div className='flex items-center gap-3 glass-card px-4 py-2 rounded-full'>
      <span className='text-sm opacity-60'>Score</span>
      <motion.span key={score} initial={{ scale: 1.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className='text-lg font-bold text-[var(--primary)]'>
        {score}
      </motion.span>
    </div>
  );
}
