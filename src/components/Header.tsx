import React from 'react';
import { Leaf, BarChart3, Target, Globe, Trophy, Brain, Calendar, BookOpen, Sparkles, Zap, History, Shield } from 'lucide-react';

interface HeaderProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export default function Header({ activeTab, onTabChange }: HeaderProps) {
  const tabs = [
    { id: 'calculator', label: 'Calculator', icon: Leaf, gradient: 'from-emerald-500 via-emerald-400 to-teal-500' },
    { id: 'comparison', label: 'Cities', icon: Globe, gradient: 'from-blue-500 via-blue-400 to-indigo-500' },
    { id: 'history', label: 'History', icon: History, gradient: 'from-purple-500 via-purple-400 to-pink-500' },
    { id: 'insights', label: 'Insights', icon: BarChart3, gradient: 'from-purple-500 via-purple-400 to-pink-500' },
    { id: 'recommendations', label: 'AI Tips', icon: Brain, gradient: 'from-orange-500 via-orange-400 to-red-500' },
    { id: 'habits', label: 'Habits', icon: Calendar, gradient: 'from-green-500 via-green-400 to-emerald-500' },
    { id: 'gamification', label: 'Achievements', icon: Trophy, gradient: 'from-yellow-500 via-yellow-400 to-orange-500' },
    { id: 'education', label: 'Learn', icon: BookOpen, gradient: 'from-indigo-500 via-indigo-400 to-purple-500' },
    { id: 'offsets', label: 'Offsets', icon: Target, gradient: 'from-teal-500 via-teal-400 to-cyan-500' },
    { id: 'privacy', label: 'Privacy', icon: Shield, gradient: 'from-gray-500 via-gray-400 to-slate-500' }
  ];

  return (
    <header className="sticky top-0 z-50 glass-dark border-b border-white/10 h-24">
      <div className="absolute inset-0 hero-bg opacity-30" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          {/* Premium Logo with Glow Effect */}
          <div className="flex items-center space-x-6">
            <div className="relative group">
              {/* Outer Glow Ring */}
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 via-teal-400 to-emerald-500 rounded-3xl blur-xl opacity-40 group-hover:opacity-70 transition-opacity duration-500 animate-pulse-glow-dark"></div>
              
              {/* Main Logo Container */}
              <div className="relative flex items-center justify-center w-16 h-16 bg-gradient-to-br from-emerald-500 via-emerald-400 to-teal-500 rounded-3xl shadow-2xl group-hover:scale-110 transition-transform duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-3xl"></div>
                <Leaf className="w-9 h-9 text-white animate-float-dark filter drop-shadow-lg" />
              </div>
              
              {/* Floating Particles */}
              <div className="absolute -top-2 -right-2 w-3 h-3 bg-emerald-400 rounded-full animate-pulse opacity-80"></div>
              <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-teal-400 rounded-full animate-pulse opacity-60" style={{ animationDelay: '0.5s' }}></div>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <h1 className="text-3xl font-black text-white drop-shadow-lg">
                  CarbonTracker
                </h1>
                <div className="flex items-center space-x-2 px-3 py-1.5 bg-gradient-to-r from-emerald-500/20 via-teal-500/20 to-emerald-500/20 rounded-full border border-emerald-400/30 backdrop-blur-sm">
                  <Sparkles className="w-4 h-4 text-emerald-400 animate-pulse" />
                  <span className="text-sm font-bold text-emerald-300 tracking-wide">PRO</span>
                  <Zap className="w-3 h-3 text-yellow-400 animate-pulse" style={{ animationDelay: '0.3s' }} />
                </div>
              </div>
              <p className="text-sm font-semibold text-emerald-200 tracking-wide">
                ✨ AI-Powered Climate Intelligence Platform
              </p>
            </div>
          </div>
          
          {/* Premium Navigation with Enhanced Effects */}
          <nav className="flex items-center space-x-3 overflow-x-auto overflow-y-hidden scrollbar-hide max-h-16">
            {tabs.map(({ id, label, icon: Icon, gradient }, index) => (
              <button
                key={id}
                onClick={() => onTabChange(id)}
                className={`group relative flex items-center space-x-3 px-5 py-4 rounded-2xl transition-all duration-500 whitespace-nowrap transform hover:scale-105 ${
                  activeTab === id
                    ? 'text-white shadow-2xl scale-105'
                    : 'text-slate-300 hover:text-white hover:bg-white/5 hover:shadow-xl hover:scale-102'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Active Background with Glow */}
                {activeTab === id && (
                  <>
                    <div className={`absolute inset-0 bg-gradient-to-r ${gradient} rounded-2xl shadow-2xl`} />
                    <div className={`absolute inset-0 bg-gradient-to-r ${gradient} rounded-2xl blur-lg opacity-50`} />
                  </>
                )}
                
                {/* Hover Background */}
                {activeTab !== id && (
                  <div className="absolute inset-0 bg-gradient-to-r from-white/5 via-white/10 to-white/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                )}
                
                <div className="relative flex items-center space-x-3 z-10">
                  <Icon className={`w-5 h-5 transition-all duration-300 ${
                    activeTab === id 
                      ? 'scale-110 filter drop-shadow-lg' 
                      : 'group-hover:scale-110 group-hover:text-emerald-400'
                  }`} />
                  <span className="hidden sm:inline font-bold text-sm tracking-wide">{label}</span>
                </div>
                
                {/* Subtle Glow Effect on Hover */}
                <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-300 ${
                  activeTab !== id ? 'bg-gradient-to-r from-emerald-500/20 to-teal-500/20' : ''
                }`} />
              </button>
            ))}
          </nav>
        </div>
      </div>
      
      {/* Enhanced gradient line with animation */}
      <div className="h-px bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent animate-shimmer-dark" />
      
      {/* Floating particles effect */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="particle" style={{ left: '10%', animationDelay: '0s', animationDuration: '25s' }} />
        <div className="particle" style={{ left: '20%', animationDelay: '5s', animationDuration: '30s' }} />
        <div className="particle" style={{ left: '30%', animationDelay: '10s', animationDuration: '20s' }} />
        <div className="particle" style={{ left: '40%', animationDelay: '15s', animationDuration: '35s' }} />
        <div className="particle" style={{ left: '50%', animationDelay: '20s', animationDuration: '25s' }} />
        <div className="particle" style={{ left: '60%', animationDelay: '8s', animationDuration: '28s' }} />
        <div className="particle" style={{ left: '70%', animationDelay: '12s', animationDuration: '22s' }} />
        <div className="particle" style={{ left: '80%', animationDelay: '18s', animationDuration: '32s' }} />
        <div className="particle" style={{ left: '90%', animationDelay: '3s', animationDuration: '27s' }} />
      </div>
    </header>
  );
}