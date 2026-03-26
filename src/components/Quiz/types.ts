/* File: src/components/Quiz/types.ts */

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: string;
  difficulty: 'easy' | 'medium' | 'hard';
}

export interface QuizSet {
  id: string;
  title: string;
  questions: QuizQuestion[];
}

export interface QuizAttempt {
  quizId: string;
  quizTitle: string;
  category: string;
  score: number;
  maxScore: number;
  percentage: number;
  correctCount: number;
  totalQuestions: number;
  completedAt: string; // ISO timestamp
  answers: string[];
}

export interface QuizProps {
  quizId: string;
  category?: string;
  quizTitle?: string;
  onComplete?: (score: number) => void;
  showProgress?: boolean;
}

export interface QuizState {
  currentQuestionIndex: number;
  score: number;
  answers: string[];
  status: 'idle' | 'active' | 'completed';
  loading: boolean;
  error: string | null;
}

export interface QuestionCardProps {
  question: QuizQuestion;
  onAnswer: (answer: string) => void;
  isAnswered: boolean;
  selectedAnswer?: string;
}

export interface ProgressBarProps {
  current: number;
  total: number;
  progress: number;
}

export interface ScoreDisplayProps {
  score: number;
  totalQuestions: number;
  isCompleted?: boolean;
  onReview?: () => void;
  attemptNumber?: number;
  personalBest?: number | null; // best percentage from previous attempts
}

export interface AnswerReviewProps {
  questions: QuizQuestion[];
  answers: string[];
  onBack: () => void;
}
