import React, { useState } from 'react';
import { Shield, Leaf, Zap, Wind, Factory, DollarSign, CheckCircle } from 'lucide-react';
import { getPersonalizedOffsets, OFFSET_OPTIONS } from '../utils/offsetOptions';

interface OffsetRecommendationsProps {
  userFootprint: number;
}

export default function OffsetRecommendations({ userFootprint }: OffsetRecommendationsProps) {
  const [budget, setBudget] = useState<number>(100);
  const [selectedOffsets, setSelectedOffsets] = useState<string[]>([]);
  
  const footprintTons = userFootprint / 1000;
  const recommendations = getPersonalizedOffsets(userFootprint, budget);
  
  const getProjectIcon = (type: string) => {
    switch (type) {
      case 'forestry': return Leaf;
      case 'renewable': return Wind;
      case 'efficiency': return Zap;
      case 'capture': return Factory;
      default: return Leaf;
    }
  };

  const toggleOffset = (offsetId: string) => {
    setSelectedOffsets(prev => 
      prev.includes(offsetId) 
        ? prev.filter(id => id !== offsetId)
        : [...prev, offsetId]
    );
  };

  const calculateTotal = () => {
    const selected = OFFSET_OPTIONS.filter(option => selectedOffsets.includes(option.id));
    return selected.reduce((total, option) => total + (option.costPerTon * footprintTons), 0);
  };

  const calculateTotalTons = () => {
    return selectedOffsets.length * footprintTons;
  };

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Offset Summary */}
      <div className="bg-gradient-to-r from-emerald-500 to-teal-600 rounded-xl p-8 text-white">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Carbon Offset Calculator</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <div className="text-3xl font-bold">{footprintTons.toFixed(1)}</div>
              <div className="text-emerald-100">tons CO₂ to offset</div>
            </div>
            <div>
              <div className="text-3xl font-bold">${calculateTotal().toFixed(0)}</div>
              <div className="text-emerald-100">total offset cost</div>
            </div>
            <div>
              <div className="text-3xl font-bold">{selectedOffsets.length}</div>
              <div className="text-emerald-100">projects selected</div>
            </div>
          </div>
        </div>
      </div>

      {/* Budget Selector */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Set Your Budget</h3>
        <div className="flex items-center space-x-6">
          <label className="text-sm font-medium text-gray-700">Monthly budget:</label>
          <input
            type="range"
            min="25"
            max="500"
            step="25"
            value={budget}
            onChange={(e) => setBudget(Number(e.target.value))}
            className="flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
          />
          <div className="text-lg font-bold text-gray-900 min-w-[80px]">${budget}</div>
        </div>
        <div className="flex justify-between text-xs text-gray-500 mt-2">
          <span>$25</span>
          <span>$500</span>
        </div>
      </div>

      {/* Offset Options */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
        <h3 className="text-xl font-semibold text-gray-900 mb-6">Offset Projects</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {OFFSET_OPTIONS.map((option) => {
            const Icon = getProjectIcon(option.projectType);
            const cost = option.costPerTon * footprintTons;
            const isSelected = selectedOffsets.includes(option.id);
            const isAffordable = cost <= budget;
            
            return (
              <div
                key={option.id}
                onClick={() => toggleOffset(option.id)}
                className={`relative p-6 rounded-xl border-2 cursor-pointer transition-all duration-200 ${
                  isSelected
                    ? 'border-emerald-500 bg-emerald-50'
                    : isAffordable 
                      ? 'border-gray-200 hover:border-emerald-300 hover:bg-emerald-50'
                      : 'border-gray-200 bg-gray-50 opacity-60 cursor-not-allowed'
                }`}
              >
                {isSelected && (
                  <div className="absolute top-4 right-4">
                    <CheckCircle className="w-6 h-6 text-emerald-500" />
                  </div>
                )}
                
                <div className="flex items-start space-x-4">
                  <div className={`flex items-center justify-center w-12 h-12 rounded-xl ${
                    option.projectType === 'forestry' ? 'bg-green-100' :
                    option.projectType === 'renewable' ? 'bg-blue-100' :
                    option.projectType === 'efficiency' ? 'bg-yellow-100' :
                    'bg-purple-100'
                  }`}>
                    <Icon className={`w-6 h-6 ${
                      option.projectType === 'forestry' ? 'text-green-600' :
                      option.projectType === 'renewable' ? 'text-blue-600' :
                      option.projectType === 'efficiency' ? 'text-yellow-600' :
                      'text-purple-600'
                    }`} />
                  </div>
                  
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 mb-2">{option.title}</h4>
                    <p className="text-sm text-gray-600 mb-3">{option.description}</p>
                    
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500">Cost per ton:</span>
                        <span className="font-medium">${option.costPerTon}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500">Your cost:</span>
                        <span className="text-lg font-bold text-gray-900">
                          ${cost.toFixed(0)}
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500">Standard:</span>
                        <span className="text-sm font-medium">{option.verificationStandard}</span>
                      </div>
                    </div>
                    
                    {!isAffordable && (
                      <div className="mt-3 text-sm text-red-600">
                        Exceeds budget by ${(cost - budget).toFixed(0)}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Selected Summary */}
      {selectedOffsets.length > 0 && (
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Your Offset Portfolio</h3>
          
          <div className="space-y-4 mb-6">
            {selectedOffsets.map(offsetId => {
              const option = OFFSET_OPTIONS.find(o => o.id === offsetId);
              if (!option) return null;
              
              const cost = option.costPerTon * footprintTons;
              
              return (
                <div key={offsetId} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <h4 className="font-medium text-gray-900">{option.title}</h4>
                    <p className="text-sm text-gray-600">{option.provider}</p>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-gray-900">${cost.toFixed(0)}</div>
                    <div className="text-sm text-gray-500">{footprintTons.toFixed(1)} tons</div>
                  </div>
                </div>
              );
            })}
          </div>
          
          <div className="border-t pt-4">
            <div className="flex items-center justify-between text-lg font-bold">
              <span>Total Monthly Cost:</span>
              <span className="text-emerald-600">${calculateTotal().toFixed(0)}</span>
            </div>
            <div className="flex items-center justify-between text-sm text-gray-600 mt-1">
              <span>Total CO₂ Offset:</span>
              <span>{calculateTotalTons().toFixed(1)} tons annually</span>
            </div>
            
            <button className="w-full mt-6 bg-emerald-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-emerald-600 transition-colors duration-200">
              Start Offsetting (${calculateTotal().toFixed(0)}/month)
            </button>
          </div>
        </div>
      )}

      {/* Additional Information */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Why Offset?</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <Shield className="w-5 h-5 text-emerald-500 mt-1" />
              <div>
                <h4 className="font-medium text-gray-900">Verified Projects</h4>
                <p className="text-sm text-gray-600">All projects are certified by international standards</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <Leaf className="w-5 h-5 text-emerald-500 mt-1" />
              <div>
                <h4 className="font-medium text-gray-900">Immediate Impact</h4>
                <p className="text-sm text-gray-600">Start making a difference while you work on reducing emissions</p>
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <DollarSign className="w-5 h-5 text-emerald-500 mt-1" />
              <div>
                <h4 className="font-medium text-gray-900">Transparent Pricing</h4>
                <p className="text-sm text-gray-600">Clear, competitive pricing with no hidden fees</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <CheckCircle className="w-5 h-5 text-emerald-500 mt-1" />
              <div>
                <h4 className="font-medium text-gray-900">Track Progress</h4>
                <p className="text-sm text-gray-600">Monitor your impact and see real project updates</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}