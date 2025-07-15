import { QuizQuestion } from '../types';

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 'q1',
    question: 'Which transportation mode has the lowest carbon footprint per kilometer?',
    options: ['Electric car', 'Bus', 'Bicycle', 'Train'],
    correctAnswer: 2,
    explanation: 'Bicycles have virtually zero operational emissions and the lowest lifecycle carbon footprint at about 21g CO₂/km, including manufacturing.',
    category: 'Transportation',
    difficulty: 'beginner'
  },
  {
    id: 'q2',
    question: 'What percentage of global greenhouse gas emissions come from food production?',
    options: ['10%', '15%', '26%', '35%'],
    correctAnswer: 2,
    explanation: 'Food systems account for approximately 26% of global greenhouse gas emissions, including agriculture, land use change, and food processing.',
    category: 'Food',
    difficulty: 'intermediate'
  },
  {
    id: 'q3',
    question: 'Which diet change has the biggest impact on reducing carbon footprint?',
    options: ['Eating local food', 'Reducing meat consumption', 'Buying organic', 'Avoiding processed foods'],
    correctAnswer: 1,
    explanation: 'Reducing meat consumption, especially beef, has the largest impact. Beef production generates 60kg CO₂ per kg of protein, compared to 6kg for chicken and 2kg for legumes.',
    category: 'Food',
    difficulty: 'beginner'
  },
  {
    id: 'q4',
    question: 'How much can you reduce your heating emissions by lowering thermostat by 1°C?',
    options: ['3%', '8%', '15%', '20%'],
    correctAnswer: 1,
    explanation: 'Each 1°C reduction in heating temperature typically reduces energy consumption by 8%, making this one of the most effective energy-saving measures.',
    category: 'Energy',
    difficulty: 'intermediate'
  },
  {
    id: 'q5',
    question: 'What is the Paris Agreement target for individual carbon footprints by 2030?',
    options: ['1.5 tons CO₂/year', '2.3 tons CO₂/year', '4.0 tons CO₂/year', '6.5 tons CO₂/year'],
    correctAnswer: 1,
    explanation: 'The Paris Agreement implies a target of 2.3 tons CO₂ per person per year by 2030 to limit global warming to 1.5°C.',
    category: 'Climate Science',
    difficulty: 'advanced'
  },
  {
    id: 'q6',
    question: 'Which household appliance typically uses the most electricity?',
    options: ['Refrigerator', 'Air conditioning', 'Water heater', 'Washing machine'],
    correctAnswer: 1,
    explanation: 'Air conditioning typically accounts for 15-25% of household electricity use in homes that have it, making it the largest single electricity consumer.',
    category: 'Energy',
    difficulty: 'beginner'
  },
  {
    id: 'q7',
    question: 'How much CO₂ does the average person emit per year globally?',
    options: ['2.5 tons', '4.8 tons', '7.5 tons', '12.1 tons'],
    correctAnswer: 2,
    explanation: 'The global average carbon footprint is approximately 7.5 tons CO₂ per person per year, though this varies dramatically by country and lifestyle.',
    category: 'Climate Science',
    difficulty: 'intermediate'
  },
  {
    id: 'q8',
    question: 'What percentage of clothing is recycled globally?',
    options: ['Less than 1%', '5%', '15%', '25%'],
    correctAnswer: 0,
    explanation: 'Less than 1% of clothing is recycled into new clothing. Most textile waste ends up in landfills or is incinerated, highlighting the importance of buying less and choosing durable items.',
    category: 'Lifestyle',
    difficulty: 'advanced'
  }
];

export function getRandomQuiz(difficulty?: 'beginner' | 'intermediate' | 'advanced'): QuizQuestion[] {
  let questions = QUIZ_QUESTIONS;
  
  if (difficulty) {
    questions = questions.filter(q => q.difficulty === difficulty);
  }
  
  // Return 5 random questions
  return questions.sort(() => Math.random() - 0.5).slice(0, 5);
}

export function getQuizByCategory(category: string): QuizQuestion[] {
  return QUIZ_QUESTIONS.filter(q => 
    q.category.toLowerCase() === category.toLowerCase()
  );
}