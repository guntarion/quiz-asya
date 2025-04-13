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

export interface QuizProps {
  quizId: string;
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
  onReview?: () => void; // Add optional callback for review button
}

// Props for the new AnswerReview component
export interface AnswerReviewProps {
  questions: QuizQuestion[];
  answers: string[];
  onBack: () => void; // Callback to close the review view
}
