/* File: src/data/quizzes/toons.ts */

import { QuizSet } from '@/components/Quiz/types';

export const toonsQuizzes: Record<string, QuizSet> = {
  'quiz-1': {
    id: 'quiz-1',
    title: 'Basic Toons Quiz',
    questions: [
      {
        id: 1,
        question: 'What is a toon?',
        options: ['A cartoon character', 'A musical note', 'A type of food', 'A weather phenomenon'],
        correctAnswer: 'A cartoon character',
        difficulty: 'easy',
      },
      {
        id: 2,
        question: 'Which of these is NOT a common toon characteristic?',
        options: ['Exaggerated expressions', 'Realistic proportions', 'Bright colors', 'Bouncy movements'],
        correctAnswer: 'Realistic proportions',
        difficulty: 'medium',
      },
      {
        id: 3,
        question: 'What technique is used to create smooth toon animations?',
        options: ['Frame by frame', 'Stop motion', 'Time lapse', 'Long exposure'],
        correctAnswer: 'Frame by frame',
        difficulty: 'hard',
      },
      {
        id: 4,
        question: 'Which principle is essential in toon animation?',
        options: ['Squash and stretch', 'Real-time rendering', 'Photo-realism', 'Live action'],
        correctAnswer: 'Squash and stretch',
        difficulty: 'medium',
      },
    ],
  },
  'gigi-quiz': {
    id: 'gigi-quiz',
    title: 'Gigi Character Quiz',
    questions: [
      {
        id: 1,
        question: "What are Gigi's physical characteristics?",
        options: [
          'Blue gachapon with light blue accents',
          'Red gachapon with dark red accents',
          'Yellow gachapon with orange accents',
          'Green gachapon with dark green accents',
        ],
        correctAnswer: 'Red gachapon with dark red accents',
        difficulty: 'easy',
      },
      {
        id: 2,
        question: "What is Gigi's main statistical weakness?",
        options: ['Movement Speed', 'Stealth', 'Stamina', 'Extraction Speed'],
        correctAnswer: 'Stamina',
        difficulty: 'medium',
      },
      {
        id: 3,
        question: "Which trinket combination is NOT recommended for Gigi's movement speed?",
        options: ['Pink Bow / Speedy Shoes', 'Ribbon Spool / Clown Horn', 'Water Cooler / Ghost Snakes In A Can', 'Vanity Mirror / Any'],
        correctAnswer: 'Water Cooler / Ghost Snakes In A Can',
        difficulty: 'hard',
      },
      {
        id: 4,
        question: 'What unique feature does Gigi share with Boxten?',
        options: ['They both have the same ability', 'Their heads can open up', 'They both have transparent feet', 'They share the same stats'],
        correctAnswer: 'Their heads can open up',
        difficulty: 'medium',
      },
      {
        id: 5,
        question: 'How many Statistics Stars does Gigi have in Skill Check?',
        options: ['3 Stars', '4 Stars', '5 Stars', '2 Stars'],
        correctAnswer: '5 Stars',
        difficulty: 'medium',
      },
      {
        id: 6,
        question: 'Which Toon does Gigi help with diary writing?',
        options: ['Poppy', 'Flutter', 'Connie', 'Tisha'],
        correctAnswer: 'Flutter',
        difficulty: 'medium',
      },
      {
        id: 7,
        question: 'What was changed about Gigi in update v0.4.1?',
        options: [
          'Her ability cooldown was reduced',
          'Her appearance was changed',
          'Her Movement Speed and Stamina stats were swapped',
          'Her friendship connections were altered',
        ],
        correctAnswer: 'Her Movement Speed and Stamina stats were swapped',
        difficulty: 'hard',
      },
      {
        id: 8,
        question: 'Which Toon shares almost the same stats as Gigi?',
        options: ['Shelly', 'Brightney', 'Rodger', 'Toodles'],
        correctAnswer: 'Shelly',
        difficulty: 'medium',
      },
      {
        id: 9,
        question: "What is unique about Gigi's addition to the game?",
        options: ['She was the first DLC character', 'She was added by herself', 'She was created by fans', 'She was a promotional character'],
        correctAnswer: 'She was added by herself',
        difficulty: 'hard',
      },
      {
        id: 10,
        question: 'What item can Gigi NOT reliably get from her Surprise! ability?',
        options: ['Bandages', 'Eject Buttons', 'Permanent Speed Boost', 'Smoke Bombs'],
        correctAnswer: 'Permanent Speed Boost',
        difficulty: 'medium',
      },
    ],
  },
  'quiz-2': {
    id: 'quiz-2',
    title: 'Advanced Toons Quiz',
    questions: [
      {
        id: 1,
        question: 'What is the purpose of "anticipation" in animation?',
        options: ['To prepare the viewer for an action', 'To make animation faster', 'To save production costs', 'To add more frames'],
        correctAnswer: 'To prepare the viewer for an action',
        difficulty: 'hard',
      },
      {
        id: 2,
        question: 'Which animation principle deals with character weight?',
        options: ['Timing and spacing', 'Follow through', 'Secondary action', 'Arcs'],
        correctAnswer: 'Timing and spacing',
        difficulty: 'hard',
      },
    ],
  },
};
