import React, { useState } from 'react';
import { BarChart3, TrendingUp, Target, Calendar } from 'lucide-react';

interface DataVisualizationProps {
  userFootprint: number;
}

export default function DataVisualization({ userFootprint }: DataVisualizationProps) {
  const [timeRange, setTimeRange] = useState('year');
  
  // Sample data for visualization
  const monthlyData = [
    { month: 'Jan', footprint: userFootprint * 0.85 },
    { month: 'Feb', footprint: userFootprint * 0.82 },
    { month: 'Mar', footprint: userFootprint * 0.88 },
    { month: 'Apr', footprint: userFootprint * 0.92 },
    { month: 'May', footprint: userFootprint * 0.95 },
    { month: 'Jun', footprint: userFootprint * 1.02 },
    { month: 'Jul', footprint: userFootprint * 1.08 },
    { month: 'Aug', footprint: userFootprint * 1.05 },
    { month: 'Sep', footprint: userFootprint * 0.98 },
    { month: 'Oct', footprint: userFootprint * 0.92 },
    { month: 'Nov', footprint: userFootprint * 0.87 },
    { month: 'Dec', footprint: userFootprint * 0.90 }
  ];

  const breakdown = [
    { category: 'Transportation', amount: userFootprint * 0.35, color: 'bg-blue-500' },
    { category: 'Energy', amount: userFootprint * 0.28, color: 'bg-orange-500' },
    { category: 'Food', amount: userFootprint * 0.22, color: 'bg-green-500' },
    { category: 'Shopping', amount: userFootprint * 0.10, color: 'bg-purple-500' },
    { category: 'Waste', amount: userFootprint * 0.05, color: 'bg-gray-500' }
  ];

  const maxMonthly = Math.max(...monthlyData.map(d => d.footprint));

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Annual Total</p>
              <p className="text-2xl font-bold text-gray-900">{Math.round(userFootprint).toLocaleString()}</p>
              <p className="text-xs text-gray-500">kg CO₂</p>
            </div>
            <BarChart3 className="w-8 h-8 text-blue-500" />
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Monthly Avg</p>
              <p className="text-2xl font-bold text-gray-900">{Math.round(userFootprint / 12).toLocaleString()}</p>
              <p className="text-xs text-gray-500">kg CO₂</p>
            </div>
            <Calendar className="w-8 h-8 text-emerald-500" />
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">vs Global Avg</p>
              <p className="text-2xl font-bold text-red-500">
                {userFootprint > 7500 ? '+' : ''}{Math.round(((userFootprint - 7500) / 7500) * 100)}%
              </p>
              <p className="text-xs text-gray-500">difference</p>
            </div>
            <TrendingUp className="w-8 h-8 text-red-500" />
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">2030 Target</p>
              <p className="text-2xl font-bold text-emerald-600">2,300</p>
              <p className="text-xs text-gray-500">kg CO₂</p>
            </div>
            <Target className="w-8 h-8 text-emerald-500" />
          </div>
        </div>
      </div>

      {/* Monthly Trend Chart */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-semibold text-gray-900">Monthly Footprint Trend</h3>
          <select
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value)}
            className="px-3 py-1 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
          >
            <option value="year">This Year</option>
            <option value="quarter">Last Quarter</option>
            <option value="month">This Month</option>
          </select>
        </div>

        <div className="space-y-3">
          {monthlyData.map((data, index) => (
            <div key={data.month} className="flex items-center space-x-4">
              <div className="w-12 text-sm text-gray-600 font-medium">{data.month}</div>
              <div className="flex-1 bg-gray-200 rounded-full h-6 relative overflow-hidden">
                <div
                  className="bg-gradient-to-r from-emerald-500 to-teal-600 h-full rounded-full transition-all duration-1000 ease-out"
                  style={{ 
                    width: `${(data.footprint / maxMonthly) * 100}%`,
                    transitionDelay: `${index * 100}ms`
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-end pr-2">
                  <span className="text-xs font-medium text-white">
                    {Math.round(data.footprint).toLocaleString()}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Category Breakdown */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
        <h3 className="text-xl font-semibold text-gray-900 mb-6">Footprint Breakdown</h3>
        
        <div className="space-y-4">
          {breakdown.map((item, index) => (
            <div key={item.category} className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-medium text-gray-900">{item.category}</span>
                <div className="text-right">
                  <span className="font-bold text-gray-900">
                    {Math.round(item.amount).toLocaleString()} kg
                  </span>
                  <span className="text-sm text-gray-500 ml-2">
                    ({Math.round((item.amount / userFootprint) * 100)}%)
                  </span>
                </div>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div
                  className={`${item.color} h-3 rounded-full transition-all duration-1000 ease-out`}
                  style={{ 
                    width: `${(item.amount / userFootprint) * 100}%`,
                    transitionDelay: `${index * 200}ms`
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Progress to 2030 Goals */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
        <h3 className="text-xl font-semibold text-gray-900 mb-6">Progress to 2030 Climate Goals</h3>
        
        <div className="space-y-6">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="font-medium text-gray-900">Paris Agreement Target (2.3t CO₂/year)</span>
              <span className="text-sm text-gray-600">
                {Math.round(((2300 / userFootprint) * 100))}% of your current footprint
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-4">
              <div
                className="bg-gradient-to-r from-emerald-500 to-green-600 h-4 rounded-full transition-all duration-1000"
                style={{ width: `${Math.min(100, (2300 / userFootprint) * 100)}%` }}
              />
            </div>
            <div className="text-sm text-gray-600 mt-1">
              Reduction needed: {Math.max(0, Math.round(userFootprint - 2300)).toLocaleString()} kg CO₂/year
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="font-medium text-gray-900">Global Average (7.5t CO₂/year)</span>
              <span className="text-sm text-gray-600">
                {userFootprint < 7500 ? 'Below' : 'Above'} global average
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-4">
              <div
                className={`h-4 rounded-full transition-all duration-1000 ${
                  userFootprint < 7500 
                    ? 'bg-gradient-to-r from-emerald-500 to-green-600' 
                    : 'bg-gradient-to-r from-orange-500 to-red-600'
                }`}
                style={{ width: `${Math.min(100, (Math.min(userFootprint, 7500) / 7500) * 100)}%` }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}