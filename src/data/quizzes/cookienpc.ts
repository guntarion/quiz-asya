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
  'black-forest-cookie-quiz': {
    id: 'black-forest-cookie-quiz',
    title: 'Black Forest Cookie Quiz',
    questions: [
      {
        id: 1,
        question: 'When was Black Forest Cookie released in Cookie Run: Kingdom?',
        options: ['January 2, 2025', 'February 14, 2025', 'March 12, 2025', 'April 1, 2025'],
        correctAnswer: 'March 12, 2025',
        difficulty: 'medium',
      },
      {
        id: 2,
        question: "What is Black Forest Cookie's type in the game?",
        options: ['Defense', 'Support', 'Charge', 'Magic'],
        correctAnswer: 'Charge',
        difficulty: 'easy',
      },
      {
        id: 3,
        question: "What is the name of Black Forest Cookie's skill?",
        options: ['Bridal Charge', 'For the Creators!', 'Cake Transformation', 'Dark Forest Fury'],
        correctAnswer: 'For the Creators!',
        difficulty: 'medium',
      },
      {
        id: 4,
        question: 'Which Cookie was released alongside Black Forest Cookie?',
        options: ['Wedding Cake Cookie', 'Schwarzwälder', 'Cherry Cookie', 'Strawberry Crepe Cookie'],
        correctAnswer: 'Wedding Cake Cookie',
        difficulty: 'medium',
      },
      {
        id: 5,
        question: "What is the color of Black Forest Cookie's eyes?",
        options: ['Deep brown', 'Cherry red', 'Pale yellow', 'Dark purple'],
        correctAnswer: 'Pale yellow',
        difficulty: 'hard',
      },
      {
        id: 6,
        question: "What happens when Black Forest Cookie's skill ends?",
        options: [
          'She explodes in a shower of cherries',
          'She summons Thorns to deal area damage',
          'She reverts to normal form with increased defense',
          'She becomes invulnerable for 3 seconds',
        ],
        correctAnswer: 'She summons Thorns to deal area damage',
        difficulty: 'medium',
      },
      {
        id: 7,
        question: 'What does Black Forest Cookie carry in her normal form?',
        options: ['A chocolate cake', 'A cream bouquet of cherries', 'A wedding ring', 'A prayer book'],
        correctAnswer: 'A cream bouquet of cherries',
        difficulty: 'medium',
      },
      {
        id: 8,
        question: 'According to Strawberry Crepe Cookie\'s analysis, what percentage of Black Forest Cookie\'s personality is "unspeakable secrets"?',
        options: ['5%', '10%', '30%', '60%'],
        correctAnswer: '10%',
        difficulty: 'hard',
      },
      {
        id: 9,
        question: "What is Black Forest Cookie's Korean name directly translated to?",
        options: ['Dark Cake Cookie', 'Cherry Chocolate Cookie', 'Forêt Noire Cookie', 'Black Wood Cookie'],
        correctAnswer: 'Forêt Noire Cookie',
        difficulty: 'hard',
      },
      {
        id: 10,
        question: 'What buff does Black Forest Cookie receive if Wedding Cake Cookie is on the team?',
        options: ['Star of the Hour', 'Bridal Blessing', "Creator's Gift", 'Cake Power'],
        correctAnswer: 'Star of the Hour',
        difficulty: 'medium',
      },
    ],
  },
  'mystic-flour-quiz-1': {
    id: 'mystic-flour-quiz-1',
    title: 'Mystic Flour Cookie: Abilities & Gameplay Quiz',

    questions: [
      {
        id: 1,
        question: 'What type of Cookie is Mystic Flour Cookie in Cookie Run: Kingdom?',
        options: ['Ambush', 'Defense', 'Healing', 'Support'],
        correctAnswer: 'Healing',
        difficulty: 'easy',
      },
      {
        id: 2,
        question: "What is the name of Mystic Flour Cookie's skill?",
        options: ['White Apathy', 'Whispers of Apathy', 'Realm of Futility', 'Flour of Enlightenment'],
        correctAnswer: 'Whispers of Apathy',
        difficulty: 'easy',
      },
      {
        id: 3,
        question: 'What position is Mystic Flour Cookie prioritized to?',
        options: ['Front', 'Middle', 'Rear', 'Any'],
        correctAnswer: 'Rear',
        difficulty: 'medium',
      },
      {
        id: 4,
        question: 'What does Mystic Flour Cookie create when using her skill?',
        options: ['The Realm of Apathy', 'The Fog of Nothingness', 'The Veil of Enlightenment', 'The White Mist'],
        correctAnswer: 'The Realm of Apathy',
        difficulty: 'medium',
      },
      {
        id: 5,
        question: 'What happens to allies within the Realm of Apathy?',
        options: ['They lose HP over time', 'Their HP is periodically restored', 'They become immune to damage', "They can't use skills"],
        correctAnswer: 'Their HP is periodically restored',
        difficulty: 'medium',
      },
      {
        id: 6,
        question: "What is the base cooldown of Mystic Flour Cookie's skill?",
        options: ['10 seconds', '15 seconds', '18 seconds', '20 seconds'],
        correctAnswer: '15 seconds',
        difficulty: 'hard',
      },
      {
        id: 7,
        question: 'What happens to enemy Cookies who enter the Realm of Apathy?',
        options: ['They receive healing', 'They are immediately defeated', 'Their Cooldown is increased', 'They switch sides temporarily'],
        correctAnswer: 'Their Cooldown is increased',
        difficulty: 'hard',
      },
      {
        id: 8,
        question: 'What is the special condition that triggers when there are no Safeguarded Cookies in the team?',
        options: [
          "Mystic Flour Cookie's healing is reduced",
          'Mystic Flour Cookie cannot be incapacitated',
          'Mystic Flour Cookie loses HP over time',
          "Mystic Flour Cookie's skill cooldown is doubled",
        ],
        correctAnswer: 'Mystic Flour Cookie cannot be incapacitated',
        difficulty: 'hard',
      },
      {
        id: 9,
        question: 'What buff do allies receive from the Touch of Meaninglessness?',
        options: ['Increased ATK', 'Increased DMG Resist', 'Reduced Cooldown', 'Immunity to debuffs'],
        correctAnswer: 'Increased DMG Resist',
        difficulty: 'medium',
      },
      {
        id: 10,
        question: 'What happens to allies after the duration of the Realm of Apathy is over?',
        options: ['They are Healed proportional to DMG they dealt', 'They receive a shield', 'They are stunned briefly', 'Their cooldowns are reset'],
        correctAnswer: 'They are Healed proportional to DMG they dealt',
        difficulty: 'medium',
      },
    ],
  },
  'mystic-flour-quiz-2': {
    id: 'mystic-flour-quiz-2',
    title: 'Mystic Flour Cookie: Lore & Character Quiz',

    questions: [
      {
        id: 1,
        question: 'Which of the Beast Cookies was Mystic Flour Cookie?',
        options: [
          'The first Beast Cookie to be released',
          'The second Beast Cookie to be released',
          'The third Beast Cookie to be released',
          'The last Beast Cookie to be released',
        ],
        correctAnswer: 'The first Beast Cookie to be released',
        difficulty: 'medium',
      },
      {
        id: 2,
        question: 'What ancient place was Mystic Flour Cookie originally revered as the master of?',
        options: ['Crystal Tower', 'Ivory Pagoda', 'White Temple', 'Flour Sanctuary'],
        correctAnswer: 'Ivory Pagoda',
        difficulty: 'medium',
      },
      {
        id: 3,
        question: 'What corrupted power does Mystic Flour Cookie wield?',
        options: ['Apathy', 'Despair', 'Futility', 'Nihilism'],
        correctAnswer: 'Apathy',
        difficulty: 'easy',
      },
      {
        id: 4,
        question: 'Whose Soul Jam did Mystic Flour Cookie originally own?',
        options: ['Dark Cacao Cookie', 'White Lily Cookie', 'Cloud Haetae Cookie', 'Sea Fairy Cookie'],
        correctAnswer: 'Dark Cacao Cookie',
        difficulty: 'hard',
      },
      {
        id: 5,
        question: 'What Buddhist figure is Mystic Flour Cookie most likely based on?',
        options: ['Buddha', 'Guanyin', 'Ksitigarbha', 'Maitreya'],
        correctAnswer: 'Guanyin',
        difficulty: 'hard',
      },
      {
        id: 6,
        question: "What does Mystic Flour Cookie believe is the endgame for the world's growing pains?",
        options: [
          'For Cookies to return to floury dust',
          'For Cookies to become enlightened',
          'For Cookies to merge with the cosmic energy',
          'For Cookies to transcend to a higher plane',
        ],
        correctAnswer: 'For Cookies to return to floury dust',
        difficulty: 'medium',
      },
      {
        id: 7,
        question: 'What does Mystic Flour Cookie\'s "Light of Apathy" more directly translate to from Korean?',
        options: ['Light of Pain', 'Light of Enlightenment', 'Light of Nothingness/Futility', 'Light of Transcendence'],
        correctAnswer: 'Light of Nothingness/Futility',
        difficulty: 'hard',
      },
      {
        id: 8,
        question: 'What hand gesture does Mystic Flour Cookie almost always maintain?',
        options: ['Abhayamudra', 'Dhyanamudra', 'Varadamudra', 'Vitarkamudra'],
        correctAnswer: 'Abhayamudra',
        difficulty: 'hard',
      },
      {
        id: 9,
        question: "What warning appears in Mystic Flour Cookie's loading screen trivia?",
        options: [
          'If you see white flour, run away immediately',
          'If you find yourself surrounded by thick white fog, it might already be too late',
          'If you hear whispers of apathy, cover your ears',
          "If you feel nothing, you've already been affected",
        ],
        correctAnswer: 'If you find yourself surrounded by thick white fog, it might already be too late',
        difficulty: 'medium',
      },
      {
        id: 10,
        question: 'What name does Mystic Flour Cookie take on as a boss in World Exploration Episode 4, Stage 30?',
        options: ['White Apathy', 'One Who Consumes', 'Leavened One', 'Flour Master'],
        correctAnswer: 'Leavened One',
        difficulty: 'medium',
      },
    ],
  },
};
