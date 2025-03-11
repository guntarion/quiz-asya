/* src/data/quizzes/cookienpc.ts */

import { QuizSet } from '@/components/Quiz/types';

export const CookiesNPCQuizzes: Record<string, QuizSet> = {
  'gingerbrave-quiz': {
    id: 'gingerbrave-quiz',
    title: 'GingerBrave Knowledge Quiz',
    questions: [
      {
        id: 1,
        question: 'What type of Cookie is GingerBrave in Cookie Run: Kingdom?',
        options: ['Defense', 'Charge', 'Ranged', 'Support'],
        correctAnswer: 'Charge',
        difficulty: 'easy',
      },
      {
        id: 2,
        question: "What is GingerBrave's position in battle?",
        options: ['Front', 'Middle', 'Rear', 'Any position'],
        correctAnswer: 'Front',
        difficulty: 'easy',
      },
      {
        id: 3,
        question: "What is GingerBrave's skill called?",
        options: ['Cookie Dash', 'Brave Strike', 'Brave Dash', 'Ginger Rush'],
        correctAnswer: 'Brave Dash',
        difficulty: 'medium',
      },
      {
        id: 4,
        question: 'According to the lore, how did GingerBrave come to life?',
        options: [
          'The Witch used enchanted sugar',
          'The Witch accidentally used magic powder instead of ginger powder',
          'He was blessed by a wizard',
          'He was created by Dark Enchantress Cookie',
        ],
        correctAnswer: 'The Witch accidentally used magic powder instead of ginger powder',
        difficulty: 'medium',
      },
      {
        id: 5,
        question: "What color are GingerBrave's eyes?",
        options: ['Green', 'Brown', 'Cerulean', 'Black'],
        correctAnswer: 'Cerulean',
        difficulty: 'hard',
      },
      {
        id: 6,
        question: 'What date is considered GingerBrave\'s "birthday"?',
        options: ['June 12th', 'July 4th', 'December 25th', 'January 1st'],
        correctAnswer: 'June 12th',
        difficulty: 'medium',
      },
      {
        id: 7,
        question: 'What weapon or item does GingerBrave carry?',
        options: ['A wooden sword', 'A white candy cane with red stripes', 'A gingerbread shield', 'A cookie jar'],
        correctAnswer: 'A white candy cane with red stripes',
        difficulty: 'medium',
      },
      {
        id: 8,
        question: "Which of these is NOT a way to obtain GingerBrave's Soulstones?",
        options: [
          'World Exploration: Crispia Dark Mode Stage 3-3',
          'World Exploration: Crispia Dark Mode Stage 4-6',
          'Arena Medal Shop',
          'Guild Shop',
        ],
        correctAnswer: 'Guild Shop',
        difficulty: 'hard',
      },
      {
        id: 9,
        question: "According to Strawberry Crepe Cookie's analysis, GingerBrave is comprised of:",
        options: ['100% sugar', '100% bravery', '50% ginger, 50% courage', '90% determination, 10% magic'],
        correctAnswer: '100% bravery',
        difficulty: 'hard',
      },
      {
        id: 10,
        question: "What is GingerBrave's motto regarding his companions?",
        options: ['Cookies before crumbs', 'No Cookie left behind', 'Together we rise', 'Bravery above all'],
        correctAnswer: 'No Cookie left behind',
        difficulty: 'medium',
      },
    ],
  },
  'strawberry-cookie-quiz': {
    id: 'strawberry-cookie-quiz',
    title: 'Strawberry Cookie Knowledge Quiz',

    questions: [
      {
        id: 1,
        question: 'What type of Cookie is Strawberry Cookie in Cookie Run: Kingdom?',
        options: ['Charge', 'Defense', 'Support', 'Magic'],
        correctAnswer: 'Defense',
        difficulty: 'easy',
      },
      {
        id: 2,
        question: 'What position is Strawberry Cookie prioritized to?',
        options: ['Front', 'Middle', 'Rear', 'Any position'],
        correctAnswer: 'Front',
        difficulty: 'easy',
      },
      {
        id: 3,
        question: "What is the name of Strawberry Cookie's skill?",
        options: ['Strawberry Splash', 'Sweet Fragrance', "Don't Come Near!", 'Shy Attack'],
        correctAnswer: "Don't Come Near!",
        difficulty: 'medium',
      },
      {
        id: 4,
        question: "What is unique about Strawberry Cookie's main ingredient?",
        options: [
          'She contains real imported strawberries',
          'She contains no real strawberries, only flavoring',
          'She is made from wild strawberries',
          'She is made from a special strawberry extract',
        ],
        correctAnswer: 'She contains no real strawberries, only flavoring',
        difficulty: 'medium',
      },
      {
        id: 5,
        question: 'What accessory does Strawberry Cookie carry that she uses in battle?',
        options: ['A strawberry wand', 'A pink lollipop', 'A strawberry-shaped shield', 'A cherry slingshot'],
        correctAnswer: 'A pink lollipop',
        difficulty: 'medium',
      },
      {
        id: 6,
        question: "What was Strawberry Cookie's name in Ovenbreak 2?",
        options: ['PinkBerry', 'GingerBerry', 'StrawBrave', 'SweetBerry'],
        correctAnswer: 'GingerBerry',
        difficulty: 'hard',
      },
      {
        id: 7,
        question: "In which stages can Strawberry Cookie's Soulstones be acquired in World Exploration?",
        options: [
          'Crispia Dark Mode Stage(s) 2-6 and 4-3',
          'Crispia Dark Mode Stage(s) 3-6 and 5-3',
          'Crispia Dark Mode Stage(s) 1-6 and 3-3',
          'Crispia Dark Mode Stage(s) 4-6 and 6-3',
        ],
        correctAnswer: 'Crispia Dark Mode Stage(s) 3-6 and 5-3',
        difficulty: 'hard',
      },
      {
        id: 8,
        question: "What color is Strawberry Cookie's backpack?",
        options: ['Pink', 'Red', 'Jade-green', 'Yellow'],
        correctAnswer: 'Jade-green',
        difficulty: 'hard',
      },
      {
        id: 9,
        question: "According to Strawberry Crepe Cookie's analysis, what percentage of Strawberry Cookie is concentrated strawberry syrup?",
        options: ['7%', '10%', '13%', '20%'],
        correctAnswer: '13%',
        difficulty: 'hard',
      },
      {
        id: 10,
        question: 'What happens when Strawberry Cookie feels self-conscious?',
        options: ['She hides behind other cookies', "She pulls her hoodie's drawstrings", 'She runs away', 'She covers her face with her lollipop'],
        correctAnswer: "She pulls her hoodie's drawstrings",
        difficulty: 'medium',
      },
    ],
  },
};
