import { Achievement, UserProfile, HabitEntry } from '../types';

export const ACHIEVEMENT_DEFINITIONS: Omit<Achievement, 'unlockedAt'>[] = [
  {
    id: 'first_calculation',
    title: 'Carbon Aware',
    description: 'Completed your first carbon footprint calculation',
    icon: '🌱',
    category: 'education',
    rarity: 'common'
  },
  {
    id: 'week_under_target',
    title: 'Week Warrior',
    description: 'Stayed under your target for a full week',
    icon: '🎯',
    category: 'reduction',
    rarity: 'common'
  },
  {
    id: 'month_under_target',
    title: 'Monthly Master',
    description: 'Achieved your monthly carbon target',
    icon: '📅',
    category: 'reduction',
    rarity: 'rare'
  },
  {
    id: 'city_champion',
    title: 'City Champion',
    description: 'Your footprint is below your city average',
    icon: '🏆',
    category: 'reduction',
    rarity: 'epic'
  },
  {
    id: 'offset_hero',
    title: 'Offset Hero',
    description: 'Purchased your first carbon offsets',
    icon: '🌍',
    category: 'offset',
    rarity: 'rare'
  },
  {
    id: 'streak_7',
    title: 'Week Streak',
    description: 'Maintained improvements for 7 days',
    icon: '🔥',
    category: 'streak',
    rarity: 'common'
  },
  {
    id: 'streak_30',
    title: 'Month Streak',
    description: 'Maintained improvements for 30 days',
    icon: '⚡',
    category: 'streak',
    rarity: 'epic'
  },
  {
    id: 'challenge_complete',
    title: 'Challenge Champion',
    description: 'Completed your first challenge',
    icon: '🥇',
    category: 'challenge',
    rarity: 'rare'
  },
  {
    id: 'quiz_master',
    title: 'Climate Scholar',
    description: 'Scored 100% on a climate quiz',
    icon: '🧠',
    category: 'education',
    rarity: 'rare'
  },
  {
    id: 'paris_aligned',
    title: 'Paris Aligned',
    description: 'Achieved the 2.3t CO₂ Paris Agreement target',
    icon: '🌟',
    category: 'reduction',
    rarity: 'legendary'
  }
];

export function checkAchievements(
  profile: UserProfile, 
  footprint: number, 
  habits: HabitEntry[]
): Achievement[] {
  const newAchievements: Achievement[] = [];
  const existingIds = profile.achievements.map(a => a.id);

  // Check each achievement condition
  ACHIEVEMENT_DEFINITIONS.forEach(def => {
    if (existingIds.includes(def.id)) return;

    let shouldUnlock = false;

    switch (def.id) {
      case 'first_calculation':
        shouldUnlock = footprint > 0;
        break;
      case 'week_under_target':
        shouldUnlock = profile.streaks.current >= 7;
        break;
      case 'month_under_target':
        shouldUnlock = profile.streaks.current >= 30;
        break;
      case 'city_champion':
        shouldUnlock = footprint < profile.cityComparison;
        break;
      case 'offset_hero':
        // Would be triggered when user purchases offsets
        break;
      case 'streak_7':
        shouldUnlock = profile.streaks.current >= 7;
        break;
      case 'streak_30':
        shouldUnlock = profile.streaks.current >= 30;
        break;
      case 'paris_aligned':
        shouldUnlock = footprint <= 2300;
        break;
      case 'quiz_master':
        // Would be triggered when user completes quiz with 100%
        break;
    }

    if (shouldUnlock) {
      newAchievements.push({
        ...def,
        unlockedAt: new Date()
      });
    }
  });

  return newAchievements;
}

export function calculateAchievementPoints(achievements: Achievement[]): number {
  return achievements.reduce((total, achievement) => {
    switch (achievement.rarity) {
      case 'common': return total + 10;
      case 'rare': return total + 25;
      case 'epic': return total + 50;
      case 'legendary': return total + 100;
      default: return total;
    }
  }, 0);
}