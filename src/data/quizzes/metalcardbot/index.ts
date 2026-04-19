/* src/data/quizzes/metalcardbot/index.ts — aggregator for all seasons */

import type { QuizSet } from '@/components/Quiz/types';
import { MetalCardbotS1Quizzes } from './s1';
import { MetalCardbotS2Quizzes } from './s2';
import { MetalCardbotS3Quizzes } from './s3';

export { MetalCardbotS1Quizzes, MetalCardbotS2Quizzes, MetalCardbotS3Quizzes };

export const MetalCardbotQuizzes: Record<string, QuizSet> = {
  ...MetalCardbotS1Quizzes,
  ...MetalCardbotS2Quizzes,
  ...MetalCardbotS3Quizzes,
};
