import React, { useState, useEffect } from 'react';
import { Trophy, Star, Flame, Target, Users, Gift, Calendar, Award } from 'lucide-react';
import { Achievement, Challenge, UserProfile } from '../types';
import { ACHIEVEMENT_DEFINITIONS, calculateAchievementPoints } from '../utils/achievements';
import { ACTIVE_CHALLENGES, getChallengeProgress } from '../utils/challenges';

interface GamificationProps {
  userProfile: UserProfile;
  onAchievementUnlock: (achievement: Achievement) => void;
}

export default function Gamification({ userProfile, onAchievementUnlock }: GamificationProps) {
  const [activeTab, setActiveTab] = useState<'achievements' | 'challenges' | 'leaderboard'>('achievements');
  const [showNewAchievement, setShowNewAchievement] = useState<Achievement | null>(null);

  const totalPoints = calculateAchievementPoints(userProfile.achievements);
  const activeChallenges = ACTIVE_CHALLENGES.slice(0, 3); // Show top 3 challenges

  useEffect(() => {
    // Simulate new achievement unlock
    const timer = setTimeout(() => {
      if (userProfile.achievements.length === 0) {
        const firstAchievement: Achievement = {
          ...ACHIEVEMENT_DEFINITIONS[0],
          unlockedAt: new Date()
        };
        setShowNewAchievement(firstAchievement);
        onAchievementUnlock(firstAchievement);
      }
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case 'common': return 'text-gray-600 bg-gray-100';
      case 'rare': return 'text-blue-600 bg-blue-100';
      case 'epic': return 'text-purple-600 bg-purple-100';
      case 'legendary': return 'text-yellow-600 bg-yellow-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Achievement Notification */}
      {showNewAchievement && (
        <div className="fixed top-4 right-4 z-50 bg-gradient-to-r from-emerald-500 to-teal-600 text-white p-6 rounded-xl shadow-2xl transform transition-all duration-500 animate-bounce">
          <div className="flex items-center space-x-4">
            <div className="text-4xl">{showNewAchievement.icon}</div>
            <div>
              <h3 className="font-bold text-lg">Achievement Unlocked!</h3>
              <p className="text-emerald-100">{showNewAchievement.title}</p>
            </div>
            <button 
              onClick={() => setShowNewAchievement(null)}
              className="text-emerald-100 hover:text-white"
            >
              ×
            </button>
          </div>
        </div>
      )}

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Total Points</p>
              <p className="text-2xl font-bold text-emerald-600">{totalPoints}</p>
            </div>
            <Star className="w-8 h-8 text-emerald-500" />
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Current Streak</p>
              <p className="text-2xl font-bold text-orange-600">{userProfile.streaks.current}</p>
              <p className="text-xs text-gray-500">days</p>
            </div>
            <Flame className="w-8 h-8 text-orange-500" />
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Achievements</p>
              <p className="text-2xl font-bold text-purple-600">{userProfile.achievements.length}</p>
              <p className="text-xs text-gray-500">of {ACHIEVEMENT_DEFINITIONS.length}</p>
            </div>
            <Trophy className="w-8 h-8 text-purple-500" />
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Global Rank</p>
              <p className="text-2xl font-bold text-blue-600">#1,247</p>
              <p className="text-xs text-gray-500">top 15%</p>
            </div>
            <Users className="w-8 h-8 text-blue-500" />
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="border-b border-gray-200">
          <nav className="flex space-x-8 px-6">
            {[
              { id: 'achievements', label: 'Achievements', icon: Trophy },
              { id: 'challenges', label: 'Challenges', icon: Target },
              { id: 'leaderboard', label: 'Leaderboard', icon: Users }
            ].map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => setActiveTab(id as any)}
                className={`flex items-center space-x-2 py-4 border-b-2 transition-colors ${
                  activeTab === id
                    ? 'border-emerald-500 text-emerald-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="font-medium">{label}</span>
              </button>
            ))}
          </nav>
        </div>

        <div className="p-6">
          {activeTab === 'achievements' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {ACHIEVEMENT_DEFINITIONS.map((achievement) => {
                  const isUnlocked = userProfile.achievements.some(a => a.id === achievement.id);
                  
                  return (
                    <div
                      key={achievement.id}
                      className={`p-4 rounded-lg border-2 transition-all duration-200 ${
                        isUnlocked
                          ? 'border-emerald-200 bg-emerald-50'
                          : 'border-gray-200 bg-gray-50 opacity-60'
                      }`}
                    >
                      <div className="flex items-start space-x-3">
                        <div className="text-3xl">{achievement.icon}</div>
                        <div className="flex-1">
                          <div className="flex items-center space-x-2">
                            <h3 className={`font-semibold ${isUnlocked ? 'text-gray-900' : 'text-gray-500'}`}>
                              {achievement.title}
                            </h3>
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getRarityColor(achievement.rarity)}`}>
                              {achievement.rarity}
                            </span>
                          </div>
                          <p className={`text-sm mt-1 ${isUnlocked ? 'text-gray-600' : 'text-gray-400'}`}>
                            {achievement.description}
                          </p>
                          {isUnlocked && (
                            <div className="flex items-center space-x-1 mt-2">
                              <Award className="w-4 h-4 text-emerald-500" />
                              <span className="text-xs text-emerald-600 font-medium">Unlocked!</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {activeTab === 'challenges' && (
            <div className="space-y-6">
              {activeChallenges.map((challenge) => {
                const progress = getChallengeProgress(challenge, {});
                const progressPercent = (progress / challenge.target) * 100;
                const daysLeft = Math.ceil((challenge.endDate.getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24));
                
                return (
                  <div key={challenge.id} className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{challenge.title}</h3>
                        <p className="text-gray-600 mt-1">{challenge.description}</p>
                        <div className="flex items-center space-x-4 mt-2 text-sm text-gray-500">
                          <div className="flex items-center space-x-1">
                            <Calendar className="w-4 h-4" />
                            <span>{daysLeft} days left</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Users className="w-4 h-4" />
                            <span>{challenge.participants.toLocaleString()} participants</span>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-blue-600">
                          {progress}/{challenge.target}
                        </div>
                        <div className="text-sm text-gray-500">{challenge.unit}</div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Progress</span>
                        <span className="font-medium">{Math.round(progressPercent)}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div
                          className="bg-gradient-to-r from-blue-500 to-indigo-600 h-3 rounded-full transition-all duration-500"
                          style={{ width: `${Math.min(100, progressPercent)}%` }}
                        />
                      </div>
                    </div>

                    <div className="mt-4 flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Gift className="w-5 h-5 text-purple-500" />
                        <span className="text-sm text-gray-600">
                          Reward: {challenge.reward.title} {challenge.reward.icon}
                        </span>
                      </div>
                      <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
                        Join Challenge
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {activeTab === 'leaderboard' && (
            <div className="space-y-4">
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-gray-900">Global Leaderboard</h3>
                <p className="text-gray-600">Top carbon footprint reducers this month</p>
              </div>

              {[
                { rank: 1, name: 'EcoWarrior2024', points: 2450, reduction: '45%', badge: '🥇' },
                { rank: 2, name: 'GreenThumb', points: 2380, reduction: '42%', badge: '🥈' },
                { rank: 3, name: 'ClimateChamp', points: 2290, reduction: '38%', badge: '🥉' },
                { rank: 4, name: 'SustainableSam', points: 2150, reduction: '35%', badge: '🏆' },
                { rank: 5, name: 'CarbonCrusher', points: 2080, reduction: '33%', badge: '⭐' },
                { rank: 1247, name: 'You', points: totalPoints, reduction: '12%', badge: '🌱', isUser: true }
              ].map((user) => (
                <div
                  key={user.rank}
                  className={`flex items-center justify-between p-4 rounded-lg ${
                    user.isUser 
                      ? 'bg-emerald-50 border-2 border-emerald-200' 
                      : 'bg-gray-50 border border-gray-200'
                  }`}
                >
                  <div className="flex items-center space-x-4">
                    <div className={`flex items-center justify-center w-10 h-10 rounded-full font-bold ${
                      user.rank <= 3 ? 'bg-yellow-100 text-yellow-800' : 'bg-gray-100 text-gray-600'
                    }`}>
                      {user.rank <= 3 ? user.badge : `#${user.rank}`}
                    </div>
                    <div>
                      <h4 className={`font-semibold ${user.isUser ? 'text-emerald-700' : 'text-gray-900'}`}>
                        {user.name}
                      </h4>
                      <p className="text-sm text-gray-600">{user.reduction} reduction this month</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-gray-900">{user.points}</div>
                    <div className="text-sm text-gray-500">points</div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}