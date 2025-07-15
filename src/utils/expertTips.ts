import { CarbonTip } from '../types';

export const EXPERT_TIPS: CarbonTip[] = [
  {
    id: 'tip_1',
    title: 'The 2-Degree Rule for Massive Savings',
    content: 'Lowering your thermostat by just 2°C can reduce your heating emissions by 16% annually. In a typical home, this saves 400kg of CO₂ per year - equivalent to driving 1,600km less. The key is gradual adjustment: your body adapts within a week, and you\'ll barely notice the difference while your carbon footprint plummets.',
    category: 'Energy',
    difficulty: 'easy',
    potentialSaving: 400,
    author: 'Dr. Sarah Chen',
    authorTitle: 'Energy Efficiency Researcher, MIT',
    readTime: 2
  },
  {
    id: 'tip_2',
    title: 'The Hidden Carbon in Your Commute Timing',
    content: 'Shifting your commute by just 30 minutes can reduce your transport emissions by up to 25%. Peak-hour traffic increases fuel consumption dramatically due to stop-and-go driving. Early morning commuters (before 7 AM) typically use 20% less fuel than those traveling at 8 AM. Consider flexible work arrangements - this simple change can save 300kg CO₂ annually.',
    category: 'Transportation',
    difficulty: 'medium',
    potentialSaving: 300,
    author: 'Prof. Michael Rodriguez',
    authorTitle: 'Urban Mobility Expert, Stanford',
    readTime: 3
  },
  {
    id: 'tip_3',
    title: 'The Refrigerator Efficiency Hack',
    content: 'Your refrigerator accounts for 15% of home energy use. Setting it to 3-4°C (not colder) and your freezer to -18°C optimizes efficiency. But here\'s the secret: keep it 75% full. Empty fridges work harder, while overpacked ones restrict airflow. This optimization can cut your fridge emissions by 30% - saving 150kg CO₂ yearly.',
    category: 'Energy',
    difficulty: 'easy',
    potentialSaving: 150,
    author: 'Dr. Emma Thompson',
    authorTitle: 'Appliance Efficiency Specialist',
    readTime: 2
  },
  {
    id: 'tip_4',
    title: 'Strategic Meal Planning for Climate Impact',
    content: 'Reducing food waste by 50% through strategic meal planning can save more CO₂ than going vegetarian one day per week. Plan meals around ingredients that spoil quickly first, batch cook grains and proteins, and use the "first in, first out" rule. This approach typically saves 200kg CO₂ annually while reducing grocery costs by 25%.',
    category: 'Food',
    difficulty: 'medium',
    potentialSaving: 200,
    author: 'Chef Maria Santos',
    authorTitle: 'Sustainable Nutrition Consultant',
    readTime: 4
  },
  {
    id: 'tip_5',
    title: 'The Phantom Load Elimination Strategy',
    content: 'Electronics in standby mode consume 10% of household electricity. The biggest culprits: gaming consoles (150W), cable boxes (30W), and coffee makers (5W). Use smart power strips that cut phantom loads automatically, or simply unplug devices when not in use. This "vampire energy" elimination saves 180kg CO₂ annually with zero lifestyle impact.',
    category: 'Energy',
    difficulty: 'easy',
    potentialSaving: 180,
    author: 'Dr. James Park',
    authorTitle: 'Smart Grid Researcher, Berkeley',
    readTime: 3
  },
  {
    id: 'tip_6',
    title: 'The Clothing Longevity Formula',
    content: 'Extending clothing life by just 9 months reduces its carbon impact by 30%. The secret: proper care and strategic purchasing. Wash in cold water (saves 90% of washing energy), air dry when possible, and invest in quality basics. Fast fashion has 10x the carbon footprint of durable alternatives. One quality shirt worn 100 times beats 5 cheap shirts worn 20 times each.',
    category: 'Lifestyle',
    difficulty: 'medium',
    potentialSaving: 250,
    author: 'Dr. Lisa Wang',
    authorTitle: 'Circular Economy Researcher',
    readTime: 4
  }
];

export function getTipOfTheDay(): CarbonTip {
  const today = new Date().getDay();
  return EXPERT_TIPS[today % EXPERT_TIPS.length];
}

export function getTipsByCategory(category: string): CarbonTip[] {
  return EXPERT_TIPS.filter(tip => 
    tip.category.toLowerCase() === category.toLowerCase()
  );
}

export function getTipsByDifficulty(difficulty: 'easy' | 'medium' | 'hard'): CarbonTip[] {
  return EXPERT_TIPS.filter(tip => tip.difficulty === difficulty);
}