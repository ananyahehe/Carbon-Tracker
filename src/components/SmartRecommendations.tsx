import React, { useState, useEffect } from 'react';
import { Brain, TrendingDown, Lightbulb, MapPin, Clock, Zap } from 'lucide-react';
import { getCurrentWeather, getWeatherBasedTips } from '../utils/weatherIntegration';
import { getTipOfTheDay } from '../utils/expertTips';
import { findNearbyBusinesses, calculateCarbonSavings } from '../utils/localBusinesses';
import { generatePredictions } from '../utils/predictions';

interface SmartRecommendationsProps {
  userFootprint: number;
  userPatterns: any;
}

export default function SmartRecommendations({ userFootprint, userPatterns }: SmartRecommendationsProps) {
  const [weather, setWeather] = useState(getCurrentWeather());
  const [tipOfDay] = useState(getTipOfTheDay());
  const [nearbyBusinesses] = useState(findNearbyBusinesses().slice(0, 3));
  const [predictions] = useState(generatePredictions([8500, 8200, 7900, 7600], userFootprint));

  useEffect(() => {
    // Update weather every hour
    const interval = setInterval(() => {
      setWeather(getCurrentWeather());
    }, 3600000);

    return () => clearInterval(interval);
  }, []);

  const weatherTips = getWeatherBasedTips(weather);

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* AI-Powered Insights Header */}
      <div className="bg-gradient-to-r from-purple-500 to-indigo-600 rounded-xl p-8 text-white">
        <div className="flex items-center space-x-4 mb-4">
          <Brain className="w-8 h-8" />
          <h2 className="text-2xl font-bold">AI-Powered Insights</h2>
        </div>
        <p className="text-purple-100">
          Personalized recommendations based on your patterns, local conditions, and climate science
        </p>
      </div>

      {/* Weather-Based Recommendations */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <div className="flex items-center justify-center w-10 h-10 bg-blue-100 rounded-lg">
              <Zap className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Weather-Smart Actions</h3>
              <p className="text-sm text-gray-600">
                {weather.temperature}°C, {weather.condition} • {weather.humidity}% humidity
              </p>
            </div>
          </div>
          <div className={`px-3 py-1 rounded-full text-sm font-medium ${
            weather.carbonImpact < 0 
              ? 'bg-emerald-100 text-emerald-700' 
              : 'bg-orange-100 text-orange-700'
          }`}>
            {weather.carbonImpact > 0 ? '+' : ''}{weather.carbonImpact.toFixed(1)} kg CO₂ today
          </div>
        </div>

        <div className="bg-blue-50 rounded-lg p-4 mb-4">
          <p className="text-blue-800 font-medium">{weather.energyRecommendation}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {weatherTips.map((tip, index) => (
            <div key={index} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
              <Lightbulb className="w-5 h-5 text-yellow-500 mt-0.5" />
              <span className="text-sm text-gray-700">{tip}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Expert Tip of the Day */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
        <div className="flex items-center space-x-3 mb-4">
          <div className="flex items-center justify-center w-10 h-10 bg-emerald-100 rounded-lg">
            <Brain className="w-5 h-5 text-emerald-600" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Expert Tip of the Day</h3>
            <p className="text-sm text-gray-600">
              By {tipOfDay.author}, {tipOfDay.authorTitle}
            </p>
          </div>
          <div className="ml-auto flex items-center space-x-4 text-sm text-gray-500">
            <div className="flex items-center space-x-1">
              <Clock className="w-4 h-4" />
              <span>{tipOfDay.readTime} min read</span>
            </div>
            <div className="flex items-center space-x-1">
              <TrendingDown className="w-4 h-4" />
              <span>{tipOfDay.potentialSaving} kg CO₂/year</span>
            </div>
          </div>
        </div>

        <h4 className="text-xl font-bold text-gray-900 mb-3">{tipOfDay.title}</h4>
        <p className="text-gray-700 leading-relaxed">{tipOfDay.content}</p>

        <div className="mt-4 flex items-center justify-between">
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${
            tipOfDay.difficulty === 'easy' ? 'bg-green-100 text-green-700' :
            tipOfDay.difficulty === 'medium' ? 'bg-yellow-100 text-yellow-700' :
            'bg-red-100 text-red-700'
          }`}>
            {tipOfDay.difficulty} difficulty
          </span>
          <button className="px-4 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors">
            Try This Tip
          </button>
        </div>
      </div>

      {/* Predictive Analytics */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Predictive Analytics</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="text-center p-4 bg-blue-50 rounded-lg">
            <div className="text-2xl font-bold text-blue-600">
              {Math.round(predictions.projected2025).toLocaleString()}
            </div>
            <div className="text-sm text-gray-600">Projected 2025 footprint</div>
            <div className="text-xs text-blue-600 mt-1">
              {predictions.currentTrend > 0 ? '↗' : '↘'} {Math.abs(predictions.currentTrend * 12).toFixed(0)} kg/year trend
            </div>
          </div>

          <div className="text-center p-4 bg-purple-50 rounded-lg">
            <div className="text-2xl font-bold text-purple-600">
              {Math.round(predictions.projected2030).toLocaleString()}
            </div>
            <div className="text-sm text-gray-600">Projected 2030 footprint</div>
            <div className="text-xs text-purple-600 mt-1">
              {predictions.projected2030 <= 2300 ? '✓ Paris aligned' : '⚠ Above target'}
            </div>
          </div>

          <div className="text-center p-4 bg-emerald-50 rounded-lg">
            <div className="text-2xl font-bold text-emerald-600">
              {predictions.confidence}%
            </div>
            <div className="text-sm text-gray-600">Prediction confidence</div>
            <div className="text-xs text-emerald-600 mt-1">
              Based on your data history
            </div>
          </div>
        </div>

        <div className="space-y-3">
          <h4 className="font-medium text-gray-900">Recommended Actions:</h4>
          {predictions.recommendations.map((rec, index) => (
            <div key={index} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
              <TrendingDown className="w-5 h-5 text-emerald-500 mt-0.5" />
              <span className="text-sm text-gray-700">{rec}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Local Eco-Friendly Businesses */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
        <div className="flex items-center space-x-3 mb-6">
          <div className="flex items-center justify-center w-10 h-10 bg-green-100 rounded-lg">
            <MapPin className="w-5 h-5 text-green-600" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900">Nearby Eco-Friendly Options</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {nearbyBusinesses.map((business) => {
            const savings = calculateCarbonSavings(business);
            
            return (
              <div key={business.id} className="border border-gray-200 rounded-lg p-4 hover:border-emerald-300 transition-colors">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h4 className="font-semibold text-gray-900">{business.name}</h4>
                    <p className="text-sm text-gray-600">{business.category}</p>
                    <p className="text-xs text-gray-500">{business.distance} km away</p>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <div
                          key={i}
                          className={`w-2 h-2 rounded-full ${
                            i < business.carbonRating ? 'bg-emerald-500' : 'bg-gray-200'
                          }`}
                        />
                      ))}
                    </div>
                    <div className="text-xs text-gray-500 mt-1">
                      {business.carbonRating}/5 carbon rating
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex flex-wrap gap-1">
                    {business.sustainabilityFeatures.slice(0, 2).map((feature, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-emerald-100 text-emerald-700 text-xs rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                  
                  <div className="text-sm text-emerald-600 font-medium">
                    ~{savings.toFixed(1)} kg CO₂ saved vs conventional
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}