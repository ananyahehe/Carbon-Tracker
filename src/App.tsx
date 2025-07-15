import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import EnhancedCalculator from './components/EnhancedCalculator';
import CityComparison from './components/CityComparison';
import DataVisualization from './components/DataVisualization';
import OffsetRecommendations from './components/OffsetRecommendations';
import Gamification from './components/Gamification';
import SmartRecommendations from './components/SmartRecommendations';
import HabitTracker from './components/HabitTracker';
import EducationHub from './components/EducationHub';
import HistorySection from './components/HistorySection';
import PrivacySettings from './components/PrivacySettings';
import { UserProfile, Achievement, HabitEntry } from './types';
import { checkAchievements } from './utils/achievements';
import { hasUserConsent } from './utils/storage';

function App() {
  const [activeTab, setActiveTab] = useState('calculator');
  const [userFootprint, setUserFootprint] = useState(10000); // Default 10 tons CO2
  const [userProfile, setUserProfile] = useState<UserProfile>({
    id: 'user_1',
    totalFootprint: 10000,
    cityComparison: 9500,
    lastUpdated: new Date(),
    goals: {
      target: 7000,
      deadline: new Date(2025, 11, 31)
    },
    achievements: [],
    streaks: {
      current: 3,
      longest: 7,
      lastUpdate: new Date()
    },
    preferences: {
      notifications: true,
      challenges: true,
      privacy: 'anonymous'
    }
  });

  const [userPatterns, setUserPatterns] = useState({
    weekendDriving: 1.2, // 20% more driving on weekends
    seasonalHeating: { winter: 1.5, summer: 0.8 },
    workFromHome: 2 // days per week
  });

  useEffect(() => {
    // Check for new achievements when footprint changes
    const newAchievements = checkAchievements(userProfile, userFootprint, []);
    if (newAchievements.length > 0) {
      setUserProfile(prev => ({
        ...prev,
        achievements: [...prev.achievements, ...newAchievements]
      }));
    }
  }, [userFootprint, userProfile.streaks.current]);

  const handleFootprintChange = (footprint: number) => {
    setUserFootprint(footprint);
    setUserProfile(prev => ({
      ...prev,
      totalFootprint: footprint,
      lastUpdated: new Date()
    }));
  };

  const handleAchievementUnlock = (achievement: Achievement) => {
    // Achievement notification is handled in Gamification component
    console.log('Achievement unlocked:', achievement.title);
  };

  const handleHabitAdd = (habit: Omit<HabitEntry, 'id'>) => {
    // Update streak if habit was added today
    const today = new Date().toDateString();
    const lastUpdate = userProfile.streaks.lastUpdate.toDateString();
    
    if (today !== lastUpdate) {
      setUserProfile(prev => ({
        ...prev,
        streaks: {
          ...prev.streaks,
          current: prev.streaks.current + 1,
          longest: Math.max(prev.streaks.longest, prev.streaks.current + 1),
          lastUpdate: new Date()
        }
      }));
    }
  };

  const renderActiveTab = () => {
    switch (activeTab) {
      case 'calculator':
        return <EnhancedCalculator onFootprintChange={handleFootprintChange} />;
      case 'comparison':
        return <CityComparison userFootprint={userFootprint} />;
      case 'insights':
        return <DataVisualization userFootprint={userFootprint} />;
      case 'history':
        return <HistorySection />;
      case 'offsets':
        return <OffsetRecommendations userFootprint={userFootprint} />;
      case 'gamification':
        return (
          <Gamification 
            userProfile={userProfile} 
            onAchievementUnlock={handleAchievementUnlock}
          />
        );
      case 'recommendations':
        return (
          <SmartRecommendations 
            userFootprint={userFootprint}
            userPatterns={userPatterns}
          />
        );
      case 'habits':
        return <HabitTracker onHabitAdd={handleHabitAdd} />;
      case 'education':
        return <EducationHub />;
      case 'privacy':
        return <PrivacySettings />;
      default:
        return <EnhancedCalculator onFootprintChange={handleFootprintChange} />;
    }
  };


  return (
    <div className="h-screen bg-gray-50 overflow-hidden flex flex-col">
      <Header activeTab={activeTab} onTabChange={setActiveTab} />
      
      <main className="flex-1 py-8 px-4 sm:px-6 lg:px-8 overflow-y-auto">
        {renderActiveTab()}
      </main>

      {/* Enhanced Privacy Notice */}
      <footer className="bg-white border-t border-gray-200 py-6 flex-shrink-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="text-sm text-gray-600">
              <p>🔒 Your data is processed anonymously and never shared. All calculations happen locally.</p>
            </div>
            <div className="flex items-center space-x-6 text-sm text-gray-500">
              <span>© 2025 CarbonTracker</span>
              <span>•</span>
              <span>Creator : Ananya Roy</span>
              <span>•</span>
              <span className="text-emerald-600 font-medium">
                {userProfile.achievements.length} achievements unlocked
              </span>
              <span>•</span>
              <button
                onClick={() => setActiveTab('privacy')}
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                Privacy Settings
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;