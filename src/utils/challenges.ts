import { Challenge } from '../types';

export const ACTIVE_CHALLENGES: Challenge[] = [
  {
    id: 'car_free_week',
    title: 'Car-Free Week',
    description: 'Use alternative transportation for 7 consecutive days',
    type: 'weekly',
    target: 7,
    unit: 'days',
    startDate: new Date(),
    endDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
    participants: 1247,
    reward: {
      id: 'car_free_champion',
      title: 'Car-Free Champion',
      description: 'Completed the Car-Free Week challenge',
      icon: '🚲',
      unlockedAt: new Date(),
      category: 'challenge',
      rarity: 'rare'
    }
  },
  {
    id: 'energy_saver',
    title: 'Energy Saver Challenge',
    description: 'Reduce your energy consumption by 20% this month',
    type: 'monthly',
    target: 20,
    unit: '% reduction',
    startDate: new Date(new Date().getFullYear(), new Date().getMonth(), 1),
    endDate: new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0),
    participants: 892,
    reward: {
      id: 'energy_master',
      title: 'Energy Master',
      description: 'Achieved 20% energy reduction',
      icon: '⚡',
      unlockedAt: new Date(),
      category: 'challenge',
      rarity: 'epic'
    }
  },
  {
    id: 'plant_based_month',
    title: 'Plant-Based Month',
    description: 'Eat plant-based meals for 30 days',
    type: 'monthly',
    target: 30,
    unit: 'days',
    startDate: new Date(new Date().getFullYear(), new Date().getMonth(), 1),
    endDate: new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0),
    participants: 2156,
    reward: {
      id: 'plant_pioneer',
      title: 'Plant Pioneer',
      description: 'Completed 30 days of plant-based eating',
      icon: '🌿',
      unlockedAt: new Date(),
      category: 'challenge',
      rarity: 'rare'
    }
  },
  {
    id: 'zero_waste_week',
    title: 'Zero Waste Week',
    description: 'Minimize waste production for one week',
    type: 'weekly',
    target: 1,
    unit: 'kg waste max',
    startDate: new Date(),
    endDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
    participants: 634,
    reward: {
      id: 'waste_warrior',
      title: 'Waste Warrior',
      description: 'Mastered zero waste living',
      icon: '♻️',
      unlockedAt: new Date(),
      category: 'challenge',
      rarity: 'epic'
    }
  }
];

export function getChallengeProgress(challenge: Challenge, userData: any): number {
  // This would calculate actual progress based on user's tracked activities
  // For demo purposes, returning random progress
  return Math.floor(Math.random() * challenge.target);
}

export function getActiveChallenges(): Challenge[] {
  const now = new Date();
  return ACTIVE_CHALLENGES.filter(challenge => 
    challenge.startDate <= now && challenge.endDate >= now
  );
}