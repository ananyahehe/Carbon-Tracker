import React, { useState } from 'react';
import { Car, Zap, Fuel, Leaf } from 'lucide-react';

interface VehicleSelectorProps {
  value: string;
  efficiency: number;
  onChange: (type: string, efficiency: number) => void;
}

const VEHICLE_TYPES = {
  petrol: {
    label: 'Petrol Vehicle',
    icon: <Car className="w-5 h-5" />,
    efficiency: 8.0,
    emissions: 0.171,
    color: 'text-gray-600',
    bgColor: 'bg-gray-100'
  },
  diesel: {
    label: 'Diesel Vehicle',
    icon: <Fuel className="w-5 h-5" />,
    efficiency: 7.2,
    emissions: 0.168,
    color: 'text-orange-600',
    bgColor: 'bg-orange-100'
  },
  hybrid: {
    label: 'Hybrid Vehicle',
    icon: <Leaf className="w-5 h-5" />,
    efficiency: 5.5,
    emissions: 0.120,
    color: 'text-green-600',
    bgColor: 'bg-green-100'
  },
  electric: {
    label: 'Electric Vehicle',
    icon: <Zap className="w-5 h-5" />,
    efficiency: 0.2, // kWh/km equivalent
    emissions: 0.053,
    color: 'text-emerald-600',
    bgColor: 'bg-emerald-100'
  },
  cng: {
    label: 'CNG Vehicle',
    icon: <Fuel className="w-5 h-5" />,
    efficiency: 6.8,
    emissions: 0.145,
    color: 'text-blue-600',
    bgColor: 'bg-blue-100'
  }
};

export default function VehicleSelector({ value, efficiency, onChange }: VehicleSelectorProps) {
  const [customEfficiency, setCustomEfficiency] = useState(efficiency.toString());
  const [showCustom, setShowCustom] = useState(false);

  const handleTypeChange = (type: string) => {
    const vehicleData = VEHICLE_TYPES[type as keyof typeof VEHICLE_TYPES];
    onChange(type, vehicleData.efficiency);
    setCustomEfficiency(vehicleData.efficiency.toString());
    setShowCustom(false);
  };

  const handleCustomEfficiencyChange = (newEfficiency: string) => {
    setCustomEfficiency(newEfficiency);
    const numValue = parseFloat(newEfficiency);
    if (!isNaN(numValue) && numValue > 0) {
      onChange(value, numValue);
    }
  };

  const selectedVehicle = VEHICLE_TYPES[value as keyof typeof VEHICLE_TYPES];

  return (
    <div className="space-y-4">
      <label className="block text-sm font-bold text-slate-200 mb-4">
        Vehicle Type & Efficiency
      </label>

      {/* Vehicle Type Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
        {Object.entries(VEHICLE_TYPES).map(([type, data]) => (
          <button
            key={type}
            onClick={() => handleTypeChange(type)}
            className={`p-4 rounded-xl border-2 transition-all duration-200 text-left ${
              value === type
                ? 'border-emerald-400 bg-emerald-500/10 text-emerald-300'
                : 'border-slate-600 bg-slate-800/50 text-slate-300 hover:border-slate-500 hover:bg-slate-700/50'
            }`}
          >
            <div className="flex items-center space-x-3 mb-2">
              <div className={`p-2 rounded-lg ${value === type ? 'bg-emerald-500/20' : data.bgColor}`}>
                <div className={value === type ? 'text-emerald-400' : data.color}>
                  {data.icon}
                </div>
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-sm">{data.label}</h4>
              </div>
            </div>
            
            <div className="space-y-1 text-xs">
              <div className="flex justify-between">
                <span className="text-slate-400">Efficiency:</span>
                <span className="font-medium">
                  {type === 'electric' ? `${data.efficiency} kWh/km` : `${data.efficiency} L/100km`}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Emissions:</span>
                <span className="font-medium">{data.emissions} kg CO₂/km</span>
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* Custom Efficiency Input */}
      <div className="bg-slate-800/30 rounded-xl p-4 border border-slate-600">
        <div className="flex items-center justify-between mb-3">
          <label className="text-sm font-medium text-slate-200">
            Custom Efficiency Rating
          </label>
          <button
            onClick={() => setShowCustom(!showCustom)}
            className="text-xs text-emerald-400 hover:text-emerald-300 transition-colors"
          >
            {showCustom ? 'Use Default' : 'Customize'}
          </button>
        </div>

        {showCustom ? (
          <div className="space-y-2">
            <input
              type="number"
              value={customEfficiency}
              onChange={(e) => handleCustomEfficiencyChange(e.target.value)}
              placeholder="Enter efficiency"
              className="w-full min-h-[40px] px-3 py-2 bg-white text-gray-900 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 hover:bg-gray-50 transition-colors"
              step="0.1"
              min="0.1"
            />
            <p className="text-xs text-slate-400">
              {value === 'electric' ? 'kWh per kilometer' : 'Liters per 100 kilometers'}
            </p>
          </div>
        ) : (
          <div className="flex items-center justify-between">
            <span className="text-sm text-slate-300">
              Current: {efficiency} {value === 'electric' ? 'kWh/km' : 'L/100km'}
            </span>
            <div className={`px-3 py-1 rounded-full text-xs font-medium ${
              efficiency <= 5 ? 'bg-emerald-100 text-emerald-700' :
              efficiency <= 8 ? 'bg-yellow-100 text-yellow-700' :
              'bg-red-100 text-red-700'
            }`}>
              {efficiency <= 5 ? 'Excellent' : efficiency <= 8 ? 'Good' : 'Poor'}
            </div>
          </div>
        )}
      </div>

      {/* Efficiency Tips */}
      <div className="bg-blue-500/10 border border-blue-400/20 rounded-xl p-4">
        <h4 className="text-sm font-semibold text-blue-300 mb-2">💡 Efficiency Tips</h4>
        <ul className="text-xs text-blue-200 space-y-1">
          <li>• Maintain steady speeds and avoid rapid acceleration</li>
          <li>• Keep tires properly inflated and vehicle well-maintained</li>
          <li>• Remove excess weight and use air conditioning efficiently</li>
          <li>• Plan routes to avoid traffic and combine trips</li>
        </ul>
      </div>
    </div>
  );
}