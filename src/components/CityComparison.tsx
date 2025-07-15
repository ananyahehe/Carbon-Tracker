import React from 'react';
import { MapPin, TrendingUp, TrendingDown, Users, Award, Globe, Star, Crown } from 'lucide-react';
import { getCityComparison, CITY_DATA } from '../utils/cityData';

interface CityComparisonProps {
  userFootprint: number;
}

export default function CityComparison({ userFootprint }: CityComparisonProps) {
  const comparison = getCityComparison(userFootprint);
  
  return (
    <div className="max-w-7xl mx-auto space-y-8 animate-slide-up">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-3xl blur-3xl" />
        <div className="relative card-premium p-8 lg:p-12">
          <div className="text-center space-y-6">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl shadow-lg">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Global City Comparison
              </h2>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how your carbon footprint compares to major cities worldwide and discover opportunities for improvement
            </p>
          </div>
        </div>
      </div>

      {/* Comparison Summary */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="card-premium p-8 text-center animate-scale-in" style={{ animationDelay: '0.1s' }}>
          <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-3xl mx-auto mb-6 shadow-xl">
            <Crown className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">Closest Match</h3>
          <p className="text-3xl font-black text-emerald-600 mb-2">{comparison.closest.name}</p>
          <p className="text-gray-600 font-medium">{comparison.closest.country}</p>
          <div className="mt-4 p-3 bg-emerald-50 rounded-xl border border-emerald-100">
            <p className="text-sm text-emerald-700 font-medium">
              {Math.abs(comparison.closest.averageFootprint - userFootprint).toLocaleString()} kg CO₂ difference
            </p>
          </div>
        </div>

        <div className="card-premium p-8 text-center animate-scale-in" style={{ animationDelay: '0.2s' }}>
          <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-3xl mx-auto mb-6 shadow-xl">
            <TrendingDown className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">Cities You Beat</h3>
          <p className="text-3xl font-black text-blue-600 mb-2">{comparison.worse.length}</p>
          <p className="text-gray-600 font-medium">out of {CITY_DATA.length} cities</p>
          <div className="mt-4 p-3 bg-blue-50 rounded-xl border border-blue-100">
            <p className="text-sm text-blue-700 font-medium">
              {Math.round((comparison.worse.length / CITY_DATA.length) * 100)}% percentile
            </p>
          </div>
        </div>

        <div className="card-premium p-8 text-center animate-scale-in" style={{ animationDelay: '0.3s' }}>
          <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-3xl mx-auto mb-6 shadow-xl">
            <TrendingUp className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">Cities Ahead</h3>
          <p className="text-3xl font-black text-orange-600 mb-2">{comparison.better.length}</p>
          <p className="text-gray-600 font-medium">cities with higher footprints</p>
          <div className="mt-4 p-3 bg-orange-50 rounded-xl border border-orange-100">
            <p className="text-sm text-orange-700 font-medium">
              Room for improvement
            </p>
          </div>
        </div>
      </div>

      {/* Detailed City Rankings */}
      <div className="card-premium p-8 animate-slide-right" style={{ animationDelay: '0.4s' }}>
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-2xl font-bold text-gray-900">Global City Rankings</h3>
          <div className="flex items-center space-x-2 text-sm text-gray-500">
            <Star className="w-4 h-4" />
            <span>Ranked by carbon efficiency</span>
          </div>
        </div>
        
        <div className="space-y-4">
          {CITY_DATA
            .sort((a, b) => a.averageFootprint - b.averageFootprint)
            .map((city, index) => {
              const isUserCity = Math.abs(city.averageFootprint - userFootprint) < 500;
              const difference = city.averageFootprint - userFootprint;
              
              return (
                <div
                  key={city.name}
                  className={`group relative p-6 rounded-2xl transition-all duration-300 hover:scale-[1.02] ${
                    isUserCity 
                      ? 'bg-gradient-to-r from-emerald-50 to-teal-50 border-2 border-emerald-200 shadow-lg' 
                      : 'bg-gray-50 hover:bg-white hover:shadow-lg border border-gray-200'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-6">
                      {/* Rank Badge */}
                      <div className={`flex items-center justify-center w-12 h-12 rounded-2xl font-bold text-lg ${
                        index === 0 ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-white shadow-lg' :
                        index === 1 ? 'bg-gradient-to-r from-gray-300 to-gray-400 text-white shadow-lg' :
                        index === 2 ? 'bg-gradient-to-r from-orange-400 to-red-500 text-white shadow-lg' :
                        'bg-gray-200 text-gray-700'
                      }`}>
                        {index < 3 ? (
                          index === 0 ? '🥇' : index === 1 ? '🥈' : '🥉'
                        ) : (
                          `#${index + 1}`
                        )}
                      </div>
                      
                      {/* City Info */}
                      <div className="space-y-2">
                        <div className="flex items-center space-x-3">
                          <MapPin className="w-5 h-5 text-gray-400" />
                          <h4 className="text-xl font-bold text-gray-900">{city.name}</h4>
                          <span className="text-gray-400">•</span>
                          <span className="text-gray-600 font-medium">{city.country}</span>
                          {isUserCity && (
                            <div className="px-3 py-1 bg-emerald-500 text-white text-xs font-bold rounded-full animate-pulse-glow">
                              YOUR MATCH!
                            </div>
                          )}
                        </div>
                        
                        <div className="flex items-center space-x-6">
                          <div className="flex items-center space-x-2">
                            <Users className="w-4 h-4 text-gray-400" />
                            <span className="text-sm text-gray-600 font-medium">
                              {(city.population / 1000000).toFixed(1)}M people
                            </span>
                          </div>
                          
                          <div className="flex items-center space-x-2">
                            <div className={`w-3 h-3 rounded-full ${
                              city.greenScore >= 85 ? 'bg-emerald-500' :
                              city.greenScore >= 70 ? 'bg-yellow-500' : 'bg-red-500'
                            }`} />
                            <span className="text-sm text-gray-600 font-medium">
                              Green Score: {city.greenScore}/100
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Footprint Data */}
                    <div className="text-right space-y-2">
                      <div className="text-2xl font-black text-gray-900">
                        {city.averageFootprint.toLocaleString()}
                      </div>
                      <div className="text-sm text-gray-500 font-medium">kg CO₂/year</div>
                      
                      {!isUserCity && (
                        <div className={`text-sm font-bold ${
                          difference > 0 ? 'text-red-600' : 'text-emerald-600'
                        }`}>
                          {difference > 0 ? '+' : ''}{difference.toLocaleString()} vs you
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="mt-4">
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full transition-all duration-1000 ${
                          index < 3 ? 'bg-gradient-to-r from-emerald-500 to-teal-600' :
                          index < 6 ? 'bg-gradient-to-r from-yellow-500 to-orange-500' :
                          'bg-gradient-to-r from-orange-500 to-red-500'
                        }`}
                        style={{ 
                          width: `${Math.min(100, (city.averageFootprint / Math.max(...CITY_DATA.map(c => c.averageFootprint))) * 100)}%` 
                        }}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>

      {/* Your Position Visualization */}
      <div className="card-premium p-8 animate-slide-up" style={{ animationDelay: '0.5s' }}>
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Your Global Position</h3>
        
        <div className="relative mb-8">
          <div className="w-full bg-gradient-to-r from-emerald-200 via-yellow-200 to-red-200 rounded-full h-8 shadow-inner">
            <div 
              className="bg-gradient-to-r from-emerald-500 to-teal-600 h-8 rounded-full transition-all duration-1000 shadow-lg relative"
              style={{ 
                width: `${Math.min(100, ((CITY_DATA.length - comparison.better.length) / CITY_DATA.length) * 100)}%` 
              }}
            >
              <div className="absolute right-0 top-0 w-4 h-8 bg-white rounded-full shadow-lg transform translate-x-2 flex items-center justify-center">
                <div className="w-2 h-2 bg-emerald-500 rounded-full" />
              </div>
            </div>
          </div>
          
          <div className="flex justify-between text-sm text-gray-600 mt-3 font-medium">
            <span>🌱 Best (Low emissions)</span>
            <span>🔥 Worst (High emissions)</span>
          </div>
        </div>

        <div className="text-center space-y-4">
          <div className="text-lg font-bold text-gray-900">
            You rank #{CITY_DATA.length - comparison.better.length} out of {CITY_DATA.length} cities
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-100">
              <div className="text-2xl font-bold text-emerald-600">
                {Math.round(((CITY_DATA.length - comparison.better.length) / CITY_DATA.length) * 100)}%
              </div>
              <p className="text-emerald-700 font-medium">Percentile rank</p>
            </div>
            
            <div className="p-4 bg-blue-50 rounded-xl border border-blue-100">
              <div className="text-2xl font-bold text-blue-600">
                {comparison.worse.length}
              </div>
              <p className="text-blue-700 font-medium">Cities behind you</p>
            </div>
            
            <div className="p-4 bg-orange-50 rounded-xl border border-orange-100">
              <div className="text-2xl font-bold text-orange-600">
                {comparison.better.length}
              </div>
              <p className="text-orange-700 font-medium">Cities ahead of you</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}