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
  'cosmo-quiz': {
    id: 'cosmo-quiz',
    title: 'Cosmo Character Quiz',
    questions: [
      {
        id: 1,
        question: 'What dessert combination is Cosmo based on?',
        options: ['Cupcake and Brownie', 'Swiss Roll and Cosmic Brownie', 'Chocolate Cake and Cookie', 'Pastry and Donut'],
        correctAnswer: 'Swiss Roll and Cosmic Brownie',
        difficulty: 'medium',
      },
      {
        id: 2,
        question: "What is Cosmo's active ability called?",
        options: ['Sharing is Caring', 'Heart Transfer', 'Sweet Support', 'Cosmo Care'],
        correctAnswer: 'Sharing is Caring',
        difficulty: 'easy',
      },
      {
        id: 3,
        question: "Which of these stats is Cosmo's main weakness?",
        options: ['Movement Speed', 'Stealth', 'Stamina', 'Skill Check'],
        correctAnswer: 'Skill Check',
        difficulty: 'medium',
      },
      {
        id: 4,
        question: "Who is Cosmo's cousin?",
        options: ['Sprout', 'Ginger', 'Shrimpo', 'Toodles'],
        correctAnswer: 'Ginger',
        difficulty: 'medium',
      },
      {
        id: 5,
        question: "Which trinket combination is recommended for Cosmo's extraction?",
        options: ['Magnifying Glass / Participation Award', "Thinking Cap / Vee's Remote", 'Sweet Charm / Ghost Snakes', 'Water Cooler / Pink Bow'],
        correctAnswer: "Thinking Cap / Vee's Remote",
        difficulty: 'hard',
      },
      {
        id: 6,
        question: 'What physical limitation does Cosmo have, according to Qwel?',
        options: ['Cannot run fast', 'Cannot sleep sideways', 'Cannot jump high', 'Cannot turn around quickly'],
        correctAnswer: 'Cannot sleep sideways',
        difficulty: 'hard',
      },
      {
        id: 7,
        question: 'What matching items do Cosmo and Sprout have?',
        options: ['Matching hats and shoes', 'Matching bracelets and skins', 'Matching abilities and stats', 'Matching colors and patterns'],
        correctAnswer: 'Matching bracelets and skins',
        difficulty: 'medium',
      },
      {
        id: 8,
        question: 'Which hand does Cosmo use to extract Ichor?',
        options: ['Right hand', 'Left hand', 'Both hands', 'Changes randomly'],
        correctAnswer: 'Left hand',
        difficulty: 'medium',
      },
      {
        id: 9,
        question: 'What shared characteristic do Cosmo and Shrimpo have?',
        options: ['Same movement speed', 'Same ability type', '1 Skill Check stat', 'Same stealth level'],
        correctAnswer: '1 Skill Check stat',
        difficulty: 'hard',
      },
      {
        id: 10,
        question: 'What color sprinkles does Cosmo have as freckles?',
        options: ['Red, blue, and yellow', 'Purple, pink, and green', 'Cyan, pink, and lime', 'Orange, blue, and white'],
        correctAnswer: 'Cyan, pink, and lime',
        difficulty: 'easy',
      },
    ],
  },
  'glisten-quiz-1': {
    id: 'glisten-quiz-1',
    title: 'Glisten Basic Character Quiz',
    questions: [
      {
        id: 1,
        question: "What is Glisten's basic appearance?",
        options: [
          'A square mirror with blue border',
          'A circular mirror with light golden border',
          'An oval mirror with silver border',
          'A hexagonal mirror with bronze border',
        ],
        correctAnswer: 'A circular mirror with light golden border',
        difficulty: 'easy',
      },
      {
        id: 2,
        question: "What is Glisten's active ability called?",
        options: ['Mirror Image', 'Reflection', 'Shiny Switch', 'Glisten Glide'],
        correctAnswer: 'Reflection',
        difficulty: 'easy',
      },
      {
        id: 3,
        question: 'Which stat does Glisten share with Vee at 5 stars?',
        options: ['Movement Speed', 'Stealth', 'Extraction Speed', 'Skill Check'],
        correctAnswer: 'Extraction Speed',
        difficulty: 'medium',
      },
      {
        id: 4,
        question: 'What debuff does Glisten receive after using his ability?',
        options: ['Dizzy II', 'Confused III', 'Stunned I', 'Disoriented II'],
        correctAnswer: 'Confused III',
        difficulty: 'medium',
      },
      {
        id: 5,
        question: "Which trinket combination is recommended for Glisten's extraction?",
        options: ['Water Cooler + Ghost Snakes', 'Blue Bandana + Machine Manual', 'Sweet Charm + Cardboard Armor', 'Vanity Mirror + Bone'],
        correctAnswer: 'Blue Bandana + Machine Manual',
        difficulty: 'hard',
      },
      {
        id: 6,
        question: "What is Glisten's designation number?",
        options: ['R-001', 'R-002', 'R-003', 'R-004'],
        correctAnswer: 'R-002',
        difficulty: 'hard',
      },
      {
        id: 7,
        question: 'What accessory does Glisten wear behind him?',
        options: ['A red ribbon', 'A blue bow', 'A pink bow', 'A yellow sash'],
        correctAnswer: 'A pink bow',
        difficulty: 'easy',
      },
      {
        id: 8,
        question: 'What expression does Glisten show when hit by a twisted?',
        options: ['Sadness and tears', 'Anger and discomfort', 'Fear and panic', 'Surprise and shock'],
        correctAnswer: 'Anger and discomfort',
        difficulty: 'medium',
      },
      {
        id: 9,
        question: 'What does Glisten wear on his legs?',
        options: [
          'White leg warmers with pink spots',
          'Blue socks with white stripes',
          'Pink boots with white laces',
          'Yellow stockings with red dots',
        ],
        correctAnswer: 'White leg warmers with pink spots',
        difficulty: 'medium',
      },
      {
        id: 10,
        question: 'Which character shares a similar ability to Glisten?',
        options: ['Vee', 'Scraps', 'Gigi', 'Toodles'],
        correctAnswer: 'Scraps',
        difficulty: 'hard',
      },
    ],
  },
  'glisten-quiz-2': {
    id: 'glisten-quiz-2',
    title: 'Glisten Deep Lore Quiz',
    questions: [
      {
        id: 1,
        question: "What is the hidden aspect of Glisten's personality?",
        options: ["He's secretly very brave", "He's actually very insecure", "He's naturally introverted", "He's truly optimistic"],
        correctAnswer: "He's actually very insecure",
        difficulty: 'medium',
      },
      {
        id: 2,
        question: "What is Glisten's specific fear?",
        options: ['Acrophobia (heights)', 'Autophobia (being alone)', 'Claustrophobia (enclosed spaces)', 'Nyctophobia (darkness)'],
        correctAnswer: 'Autophobia (being alone)',
        difficulty: 'hard',
      },
      {
        id: 3,
        question: 'Who does Glisten help with makeup application?',
        options: ['Vee', 'Toodles', 'Brightney', 'Razzle & Dazzle'],
        correctAnswer: 'Toodles',
        difficulty: 'medium',
      },
      {
        id: 4,
        question: 'What was Glisten originally created as?',
        options: ["A Don't Hug Me I'm Scared OC", 'A fan game character', 'A mascot design', 'A comic character'],
        correctAnswer: "A Don't Hug Me I'm Scared OC",
        difficulty: 'hard',
      },
      {
        id: 5,
        question: 'Which character does Glisten explicitly dislike according to his notes?',
        options: ['Sprout', 'Finn', 'Shrimpo', 'Vee'],
        correctAnswer: 'Finn',
        difficulty: 'medium',
      },
      {
        id: 6,
        question: 'Who does Glisten share his bedroom floor with in Roleplaying Mode?',
        options: ['Vee and Toodles', 'Boxten and Brightney', 'Razzle & Dazzle and Scraps', 'All of the above'],
        correctAnswer: 'Boxten and Brightney',
        difficulty: 'hard',
      },
      {
        id: 7,
        question: 'What notable item does Glisten own?',
        options: ['A wireless microphone', 'A wired microphone', 'A megaphone', 'A speaker'],
        correctAnswer: 'A wired microphone',
        difficulty: 'medium',
      },
      {
        id: 8,
        question: "What does Glisten's name literally mean?",
        options: ['To shine brightly', 'To reflect a sparkling light', 'To sparkle continuously', 'To illuminate strongly'],
        correctAnswer: 'To reflect a sparkling light',
        difficulty: 'hard',
      },
      {
        id: 9,
        question: 'What kind of relationship does Glisten have with Razzle & Dazzle?',
        options: ['They are rivals', 'They are friends', 'They are enemies', 'They are neutral'],
        correctAnswer: 'They are friends',
        difficulty: 'medium',
      },
      {
        id: 10,
        question: 'What happens in a glitch involving multiple Glistens?',
        options: ['They all freeze in place', 'Their abilities cancel out', 'Confused III effects stack on one Glisten', 'They become invisible'],
        correctAnswer: 'Confused III effects stack on one Glisten',
        difficulty: 'hard',
      },
    ],
  },
    'brightney-quiz-1': {
    id: 'brightney-quiz-1',
    title: 'Brightney Gameplay & Appearance Quiz',
    questions: [
      {
        id: 1,
        question: 'What type of object is Brightney designed after?',
        options: [
          'A flashlight',
          'A lamp',
          'A chandelier',
          'A lantern'
        ],
        correctAnswer: 'A lamp',
        difficulty: 'easy',
      },
      {
        id: 2,
        question: 'What is Brightney\'s active ability called?',
        options: [
          'Bright Idea',
          'Illuminate',
          'Night Light',
          'Light Show'
        ],
        correctAnswer: 'Night Light',
        difficulty: 'easy',
      },
      {
        id: 3,
        question: 'When can Brightney use her active ability?',
        options: [
          'Any time',
          'Only during chases',
          'Only during Blackouts',
          'Only when near other Toons'
        ],
        correctAnswer: 'Only during Blackouts',
        difficulty: 'medium',
      },
      {
        id: 4,
        question: 'What is Brightney\'s lowest stat?',
        options: [
          'Movement Speed',
          'Stealth',
          'Stamina',
          'Extraction Speed'
        ],
        correctAnswer: 'Stealth',
        difficulty: 'medium',
      },
      {
        id: 5,
        question: 'Which trinket combination is recommended for Brightney\'s extraction?',
        options: [
          'Diary + Magnifying Glass',
          'Magnifying Glass + Participation Award',
          'Blue Bandana + Machine Manual',
          'Vanity Mirror + Cardboard Armor'
        ],
        correctAnswer: 'Magnifying Glass + Participation Award',
        difficulty: 'hard',
      },
      {
        id: 6,
        question: 'What happens during Blackouts that makes Brightney particularly useful?',
        options: [
          'She becomes completely invisible',
          'Her light is brighter and larger than other Toons',
          'She can float above obstacles',
          'Her extraction speed doubles'
        ],
        correctAnswer: 'Her light is brighter and larger than other Toons',
        difficulty: 'medium',
      },
      {
        id: 7,
        question: 'Which Twisted type is particularly dangerous for Brightney to encounter?',
        options: [
          'Twisted Rodger',
          'Twisted Vee',
          'Twisted Looey',
          'Twisted Flutter'
        ],
        correctAnswer: 'Twisted Vee',
        difficulty: 'hard',
      },
      {
        id: 8,
        question: 'What color is Brightney\'s lampshade?',
        options: [
          'Pink',
          'Magenta',
          'Red',
          'Purple'
        ],
        correctAnswer: 'Magenta',
        difficulty: 'easy',
      },
      {
        id: 9,
        question: 'Why is Diary NOT recommended as a trinket for Brightney?',
        options: [
          'It decreases her movement speed',
          'It has no effect due to her zero stealth stat',
          'It makes her light dimmer',
          'It conflicts with her ability'
        ],
        correctAnswer: 'It has no effect due to her zero stealth stat',
        difficulty: 'hard',
      },
      {
        id: 10,
        question: 'What advantage does Brightney\'s low stealth provide in team situations?',
        options: [
          'She can hide better',
          'She can easily bring Twisteds to Distractors',
          'She becomes invisible to certain Twisteds',
          'She can communicate with Twisteds'
        ],
        correctAnswer: 'She can easily bring Twisteds to Distractors',
        difficulty: 'medium',
      }
    ],
  },
  'brightney-quiz-2': {
    id: 'brightney-quiz-2',
    title: 'Brightney Lore & Trivia Quiz',
    questions: [
      {
        id: 1,
        question: 'What does Brightney\'s name likely reference?',
        options: [
          'A bright night sky',
          'A mixture of "Britney" and "bright"',
          'A famous lamp designer',
          'A character from another game'
        ],
        correctAnswer: 'A mixture of "Britney" and "bright"',
        difficulty: 'medium',
      },
      {
        id: 2,
        question: 'What is Brightney\'s designation number?',
        options: [
          'U-001',
          'R-001',
          'C-001',
          'M-001'
        ],
        correctAnswer: 'U-001',
        difficulty: 'medium',
      },
      {
        id: 3,
        question: 'What club is Brightney the president of?',
        options: [
          'Dance club',
          'Book club',
          'Science club',
          'Art club'
        ],
        correctAnswer: 'Book club',
        difficulty: 'medium',
      },
      {
        id: 4,
        question: 'Which other Toons are in Brightney\'s book club?',
        options: [
          'Astro and both Razzle & Dazzle',
          'Astro and Dazzle only',
          'Flutter and Vee',
          'Tisha and Gigi'
        ],
        correctAnswer: 'Astro and Dazzle only',
        difficulty: 'hard',
      },
      {
        id: 5,
        question: 'What type of light bulb does Brightney use?',
        options: [
          'LED',
          'Fluorescent',
          'Incandescent',
          'Halogen'
        ],
        correctAnswer: 'Incandescent',
        difficulty: 'hard',
      },
      {
        id: 6,
        question: 'According to Brightney, what color is her lampshade actually?',
        options: [
          'Pink',
          'Purple',
          'Red',
          'Magenta'
        ],
        correctAnswer: 'Red',
        difficulty: 'hard',
      },
      {
        id: 7,
        question: 'What does Brightney have on her nightstand in Roleplay Mode?',
        options: [
          'Books',
          'Batteries',
          'Candles',
          'Photos'
        ],
        correctAnswer: 'Batteries',
        difficulty: 'medium',
      },
      {
        id: 8,
        question: 'What is unique about Brightney\'s lampshade?',
        options: [
          'It changes color',
          'It\'s not connected to the rest of her body',
          'It glows in the dark',
          'It can be used as a weapon'
        ],
        correctAnswer: 'It\'s not connected to the rest of her body',
        difficulty: 'medium',
      },
      {
        id: 9,
        question: 'According to an interaction, who considers Brightney their favorite contestant?',
        options: [
          'Dandy',
          'Vee',
          'Pebble',
          'Finn'
        ],
        correctAnswer: 'Vee',
        difficulty: 'hard',
      },
      {
        id: 10,
        question: 'What shape do Brightney\'s stats form when visualized?',
        options: [
          'A lamp',
          'A star',
          'A light bulb',
          'A circle'
        ],
        correctAnswer: 'A lamp',
        difficulty: 'medium',
      }
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
