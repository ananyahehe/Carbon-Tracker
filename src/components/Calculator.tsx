import React, { useState, useEffect } from 'react';
import { Car, Home, Utensils, Package, Trash2, Zap, TrendingUp, Target, Sparkles, Flame, Star, Award, Globe } from 'lucide-react';
import { calculateTotalFootprint } from '../utils/carbonCalculations';

interface CalculatorProps {
  onFootprintChange: (footprint: number) => void;
}

export default function Calculator({ onFootprintChange }: CalculatorProps) {
  const [usage, setUsage] = useState({
    transport: {
      carKm: 100,
      carType: 'petrol',
      publicTransportKm: 50,
      flightKm: 20,
      bikeKm: 30
    },
    energy: {
      electricityKwh: 350,
      heatingKwh: 200,
      heatingType: 'gas'
    },
    lifestyle: {
      diet: 'omnivore' as const,
      shopping: 2,
      waste: 15
    }
  });

  const [footprint, setFootprint] = useState(0);
  const [previousFootprint, setPreviousFootprint] = useState(0);
  const [isCalculating, setIsCalculating] = useState(false);

  useEffect(() => {
    setIsCalculating(true);
    const timer = setTimeout(() => {
      const carbonData = {
        transportation: {
          car: usage.transport.carKm,
          publicTransport: usage.transport.publicTransportKm,
          flights: usage.transport.flightKm,
          bike: usage.transport.bikeKm
        },
        energy: {
          electricity: usage.energy.electricityKwh,
          heating: usage.energy.heatingKwh,
          cooling: 0
        },
        lifestyle: {
          diet: usage.lifestyle.diet,
          shopping: usage.lifestyle.shopping,
          waste: usage.lifestyle.waste
        }
      };

      setPreviousFootprint(footprint);
      const total = calculateTotalFootprint(carbonData, usage);
      setFootprint(total);
      onFootprintChange(total);
      setIsCalculating(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [usage, onFootprintChange]);

  const updateUsage = (category: string, field: string, value: any) => {
    setUsage(prev => ({
      ...prev,
      [category]: {
        ...prev[category as keyof typeof prev],
        [field]: value
      }
    }));
  };

  const footprintChange = footprint - previousFootprint;
  const globalAverage = 7500;
  const parisTarget = 2300;

  return (
    <div className="max-w-6xl mx-auto space-y-10 animate-slide-up-dark">
      {/* Hero Footprint Display with Enhanced Dark Aesthetics */}
      <div className="relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-teal-500/15 to-cyan-500/10 rounded-3xl blur-3xl animate-aurora" />
        <div className="absolute inset-0 hero-bg rounded-3xl" />
        
        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden rounded-3xl">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-emerald-400/60 rounded-full animate-float-dark"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 8}s`,
                animationDuration: `${8 + Math.random() * 4}s`
              }}
            />
          ))}
        </div>
        
        <div className="relative card-premium-dark p-10 lg:p-16">
          <div className="text-center space-y-8">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-3xl blur-lg opacity-60 animate-pulse-glow-dark" />
                <div className="relative flex items-center justify-center w-16 h-16 bg-gradient-to-br from-emerald-500 via-emerald-400 to-teal-500 rounded-3xl shadow-2xl">
                  <Sparkles className="w-8 h-8 text-white animate-glow-pulse" />
                </div>
              </div>
              <h2 className="text-4xl font-black text-gradient-dark">Your Carbon Footprint</h2>
            </div>
            
            <div className="relative">
              <div className="text-7xl lg:text-8xl font-black scale-100 opacity-100">
                <span className="text-white drop-shadow-2xl font-black" style={{ opacity: 1, filter: 'none' }}>
                  {Math.round(footprint).toLocaleString()}
                </span>
              </div>
              
              {/* Enhanced Change Indicator */}
              {footprintChange !== 0 && (
                <div className={`inline-flex items-center space-x-3 mt-6 px-6 py-3 rounded-2xl backdrop-blur-sm border transition-all duration-500 animate-scale-in-dark ${
                  footprintChange > 0 
                    ? 'bg-red-500/20 text-red-300 border-red-400/30 shadow-lg shadow-red-500/20' 
                    : 'bg-emerald-500/20 text-emerald-300 border-emerald-400/30 shadow-lg shadow-emerald-500/20'
                }`}>
                  <TrendingUp className={`w-6 h-6 transition-transform duration-300 ${footprintChange > 0 ? 'rotate-180' : ''}`} />
                  <span className="font-bold text-lg">
                    {footprintChange > 0 ? '+' : ''}{Math.round(footprintChange)} kg CO₂
                  </span>
                  <div className={`w-2 h-2 rounded-full animate-pulse ${footprintChange > 0 ? 'bg-red-400' : 'bg-emerald-400'}`} />
                </div>
              )}
            </div>

            {/* Enhanced Comparison Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-3xl blur-lg opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                <div className="relative text-center p-8 bg-gradient-to-br from-blue-500/10 via-blue-400/5 to-indigo-500/10 rounded-3xl border border-blue-400/20 backdrop-blur-sm group-hover:scale-105 transition-transform duration-300">
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl mx-auto mb-4 shadow-lg">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-3xl font-black text-blue-300 mb-2">
                    {((footprint / globalAverage) * 100).toFixed(0)}%
                  </div>
                  <p className="text-blue-200 font-bold">of global average</p>
                  <p className="text-sm text-blue-300/70 mt-2">({globalAverage.toLocaleString()} kg)</p>
                </div>
              </div>
              
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-green-500/20 rounded-3xl blur-lg opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                <div className="relative text-center p-8 bg-gradient-to-br from-emerald-500/10 via-emerald-400/5 to-green-500/10 rounded-3xl border border-emerald-400/20 backdrop-blur-sm group-hover:scale-105 transition-transform duration-300">
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-emerald-500 to-green-500 rounded-2xl mx-auto mb-4 shadow-lg">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-3xl font-black text-emerald-300 mb-2">
                    {((parisTarget / footprint) * 100).toFixed(0)}%
                  </div>
                  <p className="text-emerald-200 font-bold">to Paris target</p>
                  <p className="text-sm text-emerald-300/70 mt-2">({parisTarget.toLocaleString()} kg)</p>
                </div>
              </div>
              
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-3xl blur-lg opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                <div className="relative text-center p-8 bg-gradient-to-br from-purple-500/10 via-purple-400/5 to-pink-500/10 rounded-3xl border border-purple-400/20 backdrop-blur-sm group-hover:scale-105 transition-transform duration-300">
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl mx-auto mb-4 shadow-lg">
                    <Star className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-3xl font-black text-purple-300 mb-2">
                    {Math.round(footprint / 12).toLocaleString()}
                  </div>
                  <p className="text-purple-200 font-bold">kg per month</p>
                  <p className="text-sm text-purple-300/70 mt-2">monthly average</p>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center space-x-2 text-slate-400 text-sm font-semibold">
              <Zap className="w-4 h-4 text-emerald-400 animate-pulse" />
              <span>Updates in real-time as you adjust your lifestyle inputs</span>
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Transportation Section */}
      <div className="card-premium-dark p-10 animate-slide-right-dark" style={{ animationDelay: '0.1s' }}>
        <div className="flex items-center space-x-6 mb-10">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-3xl blur-lg opacity-60 animate-pulse" />
            <div className="relative flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 via-blue-400 to-indigo-600 rounded-3xl shadow-2xl">
              <Car className="w-8 h-8 text-white" />
            </div>
          </div>
          <div>
            <h3 className="text-3xl font-black text-white mb-2">Transportation</h3>
            <p className="text-slate-300 text-lg">Your mobility carbon footprint</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="space-y-8">
            <div>
              <label className="block text-sm font-bold text-slate-200 mb-4">
                Car usage (km/month)
              </label>
              <input
                type="number"
                value={usage.transport.carKm}
                onChange={(e) => updateUsage('transport', 'carKm', Number(e.target.value))}
                className="input-premium-dark w-full"
                placeholder="Enter kilometers"
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-slate-200 mb-4">
                Car type
              </label>
              <select
                value={usage.transport.carType}
                onChange={(e) => updateUsage('transport', 'carType', e.target.value)}
                className="input-premium-dark w-full"
              >
                <option value="petrol">🚗 Petrol Vehicle</option>
                <option value="diesel">🚙 Diesel Vehicle</option>
                <option value="electric">⚡ Electric Vehicle</option>
              </select>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <label className="block text-sm font-bold text-slate-200 mb-4">
                Public transport (km/month)
              </label>
              <input
                type="number"
                value={usage.transport.publicTransportKm}
                onChange={(e) => updateUsage('transport', 'publicTransportKm', Number(e.target.value))}
                className="input-premium-dark w-full"
                placeholder="Bus, train, metro"
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-slate-200 mb-4">
                Flights (km/month)
              </label>
              <input
                type="number"
                value={usage.transport.flightKm}
                onChange={(e) => updateUsage('transport', 'flightKm', Number(e.target.value))}
                className="input-premium-dark w-full"
                placeholder="Air travel distance"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Energy Section */}
      <div className="card-premium-dark p-10 animate-slide-right-dark" style={{ animationDelay: '0.2s' }}>
        <div className="flex items-center space-x-6 mb-10">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-600 rounded-3xl blur-lg opacity-60 animate-pulse" />
            <div className="relative flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-500 via-orange-400 to-red-600 rounded-3xl shadow-2xl">
              <Home className="w-8 h-8 text-white" />
            </div>
          </div>
          <div>
            <h3 className="text-3xl font-black text-white mb-2">Home Energy</h3>
            <p className="text-slate-300 text-lg">Electricity and heating consumption</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <label className="block text-sm font-bold text-slate-200 mb-4">
              Electricity (kWh/month)
            </label>
            <input
              type="number"
              value={usage.energy.electricityKwh}
              onChange={(e) => updateUsage('energy', 'electricityKwh', Number(e.target.value))}
              className="input-premium-dark w-full"
              placeholder="Monthly electricity usage"
            />
            <p className="text-xs text-slate-400 mt-3 flex items-center space-x-2">
              <Zap className="w-3 h-3" />
              <span>Average household: 300-400 kWh/month</span>
            </p>
          </div>

          <div>
            <label className="block text-sm font-bold text-slate-200 mb-4">
              Heating (kWh/month)
            </label>
            <input
              type="number"
              value={usage.energy.heatingKwh}
              onChange={(e) => updateUsage('energy', 'heatingKwh', Number(e.target.value))}
              className="input-premium-dark w-full"
              placeholder="Monthly heating usage"
            />
            <p className="text-xs text-slate-400 mt-3 flex items-center space-x-2">
              <Flame className="w-3 h-3" />
              <span>Varies by season and insulation</span>
            </p>
          </div>
        </div>
      </div>

      {/* Enhanced Lifestyle Section */}
      <div className="card-premium-dark p-10 animate-slide-right-dark" style={{ animationDelay: '0.3s' }}>
        <div className="flex items-center space-x-6 mb-10">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-600 rounded-3xl blur-lg opacity-60 animate-pulse" />
            <div className="relative flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-500 via-green-400 to-emerald-600 rounded-3xl shadow-2xl">
              <Utensils className="w-8 h-8 text-white" />
            </div>
          </div>
          <div>
            <h3 className="text-3xl font-black text-white mb-2">Lifestyle</h3>
            <p className="text-slate-300 text-lg">Diet, shopping, and waste habits</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div>
            <label className="block text-sm font-bold text-slate-200 mb-4">
              Diet type
            </label>
            <select
              value={usage.lifestyle.diet}
              onChange={(e) => updateUsage('lifestyle', 'diet', e.target.value)}
              className="input-premium-dark w-full"
            >
              <option value="vegan">🌱 Vegan</option>
              <option value="vegetarian">🥗 Vegetarian</option>
              <option value="pescatarian">🐟 Pescatarian</option>
              <option value="omnivore">🥩 Omnivore</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-bold text-slate-200 mb-4">
              Shopping frequency
            </label>
            <select
              value={usage.lifestyle.shopping}
              onChange={(e) => updateUsage('lifestyle', 'shopping', Number(e.target.value))}
              className="input-premium-dark w-full"
            >
              <option value={1}>🛍️ Low (minimal)</option>
              <option value={2}>🛒 Medium (average)</option>
              <option value={3}>🛍️ High (frequent)</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-bold text-slate-200 mb-4">
              Waste (kg/month)
            </label>
            <input
              type="number"
              value={usage.lifestyle.waste}
              onChange={(e) => updateUsage('lifestyle', 'waste', Number(e.target.value))}
              className="input-premium-dark w-full"
              placeholder="Monthly waste production"
            />
          </div>
        </div>
      </div>

      {/* Enhanced Quick Actions */}
      <div className="card-premium-dark p-10 animate-scale-in-dark" style={{ animationDelay: '0.4s' }}>
        <h3 className="text-2xl font-black text-white mb-8 flex items-center space-x-3">
          <Award className="w-7 h-7 text-emerald-400" />
          <span>Quick Impact Actions</span>
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { action: 'Switch to electric car', saving: '2,400 kg CO₂/year', icon: '⚡', gradient: 'from-blue-500 to-indigo-500' },
            { action: 'Reduce flights by 50%', saving: '1,800 kg CO₂/year', icon: '✈️', gradient: 'from-purple-500 to-pink-500' },
            { action: 'Go vegetarian', saving: '1,200 kg CO₂/year', icon: '🌱', gradient: 'from-emerald-500 to-green-500' }
          ].map((item, index) => (
            <div 
              key={index} 
              className={`group relative p-6 bg-gradient-to-br ${item.gradient}/10 rounded-2xl border border-white/10 hover:border-emerald-400/30 hover:bg-gradient-to-br hover:${item.gradient}/20 transition-all duration-500 cursor-pointer hover:scale-105 hover:shadow-2xl`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient}/5 rounded-2xl blur-lg opacity-0 group-hover:opacity-60 transition-opacity duration-300`} />
              <div className="relative">
                <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                <h4 className="font-bold text-white mb-3 text-lg">{item.action}</h4>
                <p className="text-emerald-300 font-bold text-sm">{item.saving}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}