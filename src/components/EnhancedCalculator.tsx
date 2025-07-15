import React, { useState, useEffect, useCallback } from 'react';
import { Car, Home, Utensils, Package, Trash2, Zap, TrendingUp, Target, Sparkles, Flame, Star, Award, Globe, Save, RotateCcw, MapPin, Navigation } from 'lucide-react';
import { calculateTotalFootprint } from '../utils/carbonCalculations';
import { validateInput, sanitizeNumericInput, VALIDATION_RULES, INPUT_TOOLTIPS } from '../utils/validation';
import { saveCalculation, getUserSettings, saveUserSettings } from '../utils/storage';
import { gpsTracker, calculateCityDistance } from '../utils/gpsTracking';
import InputField from './InputField';
import VehicleSelector from './VehicleSelector';
import RouteCalculator from './RouteCalculator';

interface EnhancedCalculatorProps {
  onFootprintChange: (footprint: number) => void;
}

export default function EnhancedCalculator({ onFootprintChange }: EnhancedCalculatorProps) {
  // Load saved data from localStorage on component mount
  const loadSavedData = () => {
    try {
      const saved = localStorage.getItem('calculator_data');
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (error) {
      console.error('Error loading saved data:', error);
    }
    return {
      transport: {
        carKm: '',
        carType: 'petrol',
        carEfficiency: 8.0,
        publicTransportKm: '',
        flightKm: '',
        bikeKm: ''
      },
      energy: {
        electricityKwh: '',
        heatingKwh: '',
        heatingType: 'gas'
      },
      lifestyle: {
        diet: 'omnivore' as const,
        shopping: 2,
        waste: ''
      }
    };
  };

  const [usage, setUsage] = useState(loadSavedData);

  const [footprint, setFootprint] = useState<number | null>(null);
  const [previousFootprint, setPreviousFootprint] = useState(0);
  const [isCalculated, setIsCalculated] = useState(false);
  const [validationErrors, setValidationErrors] = useState<{[key: string]: string[]}>({});
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);
  const [currentLocation, setCurrentLocation] = useState<{city: string; country: string} | null>(null);
  const [showRouteCalculator, setShowRouteCalculator] = useState(false);
  const [saveStatus, setSaveStatus] = useState<'idle' | 'saving' | 'success' | 'error'>('idle');
  const [saveMessage, setSaveMessage] = useState('');

  const settings = getUserSettings();

  // Save data to localStorage whenever usage changes
  useEffect(() => {
    try {
      localStorage.setItem('calculator_data', JSON.stringify(usage));
    } catch (error) {
      console.error('Error saving data:', error);
    }
  }, [usage]);

  useEffect(() => {
    // Get user's location for context
    if (settings.gpsTracking && navigator.geolocation) {
      gpsTracker.requestPermission().then(granted => {
        if (granted) {
          // Mock location for demo - in production, use reverse geocoding
          setCurrentLocation({ city: 'San Francisco', country: 'USA' });
        }
      });
    }
  }, [settings.gpsTracking]);

  // Validate if all required fields have values
  const validateRequiredFields = useCallback(() => {
    const requiredFields = [
      usage.transport.carKm,
      usage.transport.publicTransportKm,
      usage.transport.flightKm,
      usage.energy.electricityKwh,
      usage.energy.heatingKwh,
      usage.lifestyle.waste
    ];
    
    return requiredFields.some(field => field !== '' && field !== '0');
  }, [usage]);

  const validateAllInputs = useCallback(() => {
    const errors: {[key: string]: string[]} = {};
    
    // Validate transport inputs
    Object.entries(usage.transport).forEach(([key, value]) => {
      if (key.includes('Km') && value !== '') {
        const rule = VALIDATION_RULES[key as keyof typeof VALIDATION_RULES];
        if (rule) {
          const result = validateInput(sanitizeNumericInput(value as string), rule);
          if (!result.isValid) {
            errors[key] = result.errors;
          }
        }
      }
    });

    // Validate energy inputs
    Object.entries(usage.energy).forEach(([key, value]) => {
      if (key.includes('Kwh') && value !== '') {
        const rule = VALIDATION_RULES[key as keyof typeof VALIDATION_RULES];
        if (rule) {
          const result = validateInput(sanitizeNumericInput(value as string), rule);
          if (!result.isValid) {
            errors[key] = result.errors;
          }
        }
      }
    });

    // Validate lifestyle inputs
    if (usage.lifestyle.waste !== '') {
      const result = validateInput(sanitizeNumericInput(usage.lifestyle.waste), VALIDATION_RULES.waste);
      if (!result.isValid) {
        errors.waste = result.errors;
      }
    }

    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  }, [usage]);

  // Manual calculation trigger
  const handleCalculate = () => {
    const isValid = validateAllInputs();
    const hasRequiredData = validateRequiredFields();
    
    if (!hasRequiredData) {
      setSaveMessage('Please enter at least one value to calculate your footprint.');
      setSaveStatus('error');
      setTimeout(() => setSaveStatus('idle'), 3000);
      return;
    }
    
    if (isValid) {
      const carbonData = {
        transportation: {
          car: sanitizeNumericInput(usage.transport.carKm),
          publicTransport: sanitizeNumericInput(usage.transport.publicTransportKm),
          flights: sanitizeNumericInput(usage.transport.flightKm),
          bike: sanitizeNumericInput(usage.transport.bikeKm)
        },
        energy: {
          electricity: sanitizeNumericInput(usage.energy.electricityKwh),
          heating: sanitizeNumericInput(usage.energy.heatingKwh),
          cooling: 0
        },
        lifestyle: {
          diet: usage.lifestyle.diet,
          shopping: usage.lifestyle.shopping,
          waste: sanitizeNumericInput(usage.lifestyle.waste)
        }
      };

      setPreviousFootprint(footprint || 0);
      const total = calculateTotalFootprint(carbonData, usage);
      setFootprint(total);
      setIsCalculated(true);
      onFootprintChange(total);
      setHasUnsavedChanges(true);
    } else {
      setSaveMessage('Please fix validation errors before calculating.');
      setSaveStatus('error');
      setTimeout(() => setSaveStatus('idle'), 3000);
    }
  };

  const updateUsage = (category: string, field: string, value: any) => {
    setUsage(prev => ({
      ...prev,
      [category]: {
        ...prev[category as keyof typeof prev],
        [field]: value
      }
    }));
    setIsCalculated(false); // Reset calculation status when inputs change
  };

  const handleSave = async (currentFootprint?: number, carbonData?: any) => {
    if (!isCalculated || footprint === null) {
      setSaveMessage('Please calculate your footprint before saving.');
      setSaveStatus('error');
      setTimeout(() => setSaveStatus('idle'), 3000);
      return;
    }

    setSaveStatus('saving');
    
    try {
      const footprintToSave = currentFootprint || footprint;
      
      if (!validateRequiredFields()) {
        throw new Error('Please enter at least one value before saving.');
      }
      
      if (!validateAllInputs()) {
        throw new Error('Please fix validation errors before saving.');
      }

      const dataToSave = carbonData || {
        transportation: {
          car: sanitizeNumericInput(usage.transport.carKm),
          publicTransport: sanitizeNumericInput(usage.transport.publicTransportKm),
          flights: sanitizeNumericInput(usage.transport.flightKm),
          bike: sanitizeNumericInput(usage.transport.bikeKm)
        },
        energy: {
          electricity: sanitizeNumericInput(usage.energy.electricityKwh),
          heating: sanitizeNumericInput(usage.energy.heatingKwh),
          cooling: 0
        },
        lifestyle: {
          diet: usage.lifestyle.diet,
          shopping: usage.lifestyle.shopping,
          waste: sanitizeNumericInput(usage.lifestyle.waste)
        }
      };

      const calculationId = saveCalculation({
        timestamp: new Date(),
        footprint: footprintToSave,
        data: dataToSave,
        usage,
        location: currentLocation || undefined
      });

      if (calculationId) {
        setHasUnsavedChanges(false);
        setSaveStatus('success');
        setSaveMessage('Calculation saved successfully!');
        setTimeout(() => setSaveStatus('idle'), 3000);
      } else {
        throw new Error('Failed to save calculation.');
      }
    } catch (error) {
      setSaveStatus('error');
      setSaveMessage(error instanceof Error ? error.message : 'Failed to save calculation.');
      setTimeout(() => setSaveStatus('idle'), 3000);
    }
  };

  const handleReset = () => {
    if (window.confirm('Are you sure you want to reset all values? This will clear all your inputs.')) {
      setUsage({
        transport: {
          carKm: '',
          carType: 'petrol',
          carEfficiency: 8.0,
          publicTransportKm: '',
          flightKm: '',
          bikeKm: ''
        },
        energy: {
          electricityKwh: '',
          heatingKwh: '',
          heatingType: 'gas'
        },
        lifestyle: {
          diet: 'omnivore',
          shopping: 2,
          waste: ''
        }
      });
      setValidationErrors({});
      setHasUnsavedChanges(false);
      setFootprint(null);
      setIsCalculated(false);
      localStorage.removeItem('calculator_data');
    }
  };

  const footprintChange = footprint !== null ? footprint - previousFootprint : 0;
  const globalAverage = 7500;
  const parisTarget = 2300;

  const getProgressColor = (value: number, max: number) => {
    const percentage = (value / max) * 100;
    if (percentage <= 33) return 'from-emerald-500 to-green-500';
    if (percentage <= 66) return 'from-yellow-500 to-orange-500';
    return 'from-orange-500 to-red-500';
  };

  return (
    <div className="max-w-6xl mx-auto space-y-10 animate-slide-up-dark">
      {/* Enhanced Hero Footprint Display */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-teal-500/15 to-cyan-500/10 rounded-3xl blur-3xl animate-aurora" />
        <div className="absolute inset-0 hero-bg rounded-3xl" />
        
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
              {hasUnsavedChanges && (
                <div className="flex items-center space-x-2 px-3 py-1 bg-yellow-500/20 rounded-full border border-yellow-400/30">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
                  <span className="text-yellow-300 text-sm font-medium">Unsaved</span>
                </div>
              )}
            </div>
            
            <div className="relative">
              <div className="text-7xl lg:text-8xl font-black scale-100 opacity-100">
                <span className="text-white drop-shadow-2xl font-black" style={{ opacity: 1, filter: 'none' }}>
                  {footprint !== null ? Math.round(footprint).toLocaleString() : '-- kg CO₂'}
                </span>
              </div>
              
              {footprintChange !== 0 && isCalculated && footprint !== null && (
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

            {/* Enhanced Progress Bars */}
            {footprint !== null && isCalculated && (
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
                    <div className="mt-4 w-full bg-blue-900/30 rounded-full h-3">
                      <div 
                        className={`h-3 rounded-full transition-all duration-1000 bg-gradient-to-r ${getProgressColor(footprint, globalAverage * 2)}`}
                        style={{ width: `${Math.min(100, (footprint / (globalAverage * 2)) * 100)}%` }}
                      />
                    </div>
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
                    <div className="mt-4 w-full bg-emerald-900/30 rounded-full h-3">
                      <div 
                        className="h-3 rounded-full transition-all duration-1000 bg-gradient-to-r from-emerald-500 to-green-500"
                        style={{ width: `${Math.min(100, (parisTarget / footprint) * 100)}%` }}
                      />
                    </div>
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
                    <div className="mt-4 w-full bg-purple-900/30 rounded-full h-3">
                      <div 
                        className={`h-3 rounded-full transition-all duration-1000 bg-gradient-to-r ${getProgressColor(footprint / 12, 1000)}`}
                        style={{ width: `${Math.min(100, (footprint / 12 / 1000) * 100)}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex items-center justify-center space-x-4 mt-8">
              <button
                onClick={handleCalculate}
                className="flex items-center space-x-2 px-6 py-3 bg-blue-500 text-white rounded-xl font-semibold hover:bg-blue-600 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Zap className="w-5 h-5" />
                <span>Calculate Footprint</span>
              </button>
              
              <button
                onClick={() => handleSave()}
                disabled={!isCalculated || footprint === null || saveStatus === 'saving'}
                className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  isCalculated && footprint !== null && saveStatus !== 'saving'
                    ? 'bg-emerald-500 text-white hover:bg-emerald-600 shadow-lg hover:shadow-xl'
                    : 'bg-gray-600 text-gray-300 cursor-not-allowed'
                }`}
              >
                <Save className="w-5 h-5" />
                <span>{saveStatus === 'saving' ? 'Saving...' : 'Save Calculation'}</span>
              </button>
              
              <button
                onClick={handleReset}
                className="flex items-center space-x-2 px-6 py-3 bg-gray-600 text-white rounded-xl font-semibold hover:bg-gray-700 transition-all duration-300"
              >
                <RotateCcw className="w-5 h-5" />
                <span>Reset All</span>
              </button>

              {currentLocation && (
                <div className="flex items-center space-x-2 px-4 py-2 bg-blue-500/20 text-blue-300 rounded-xl border border-blue-400/30">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">{currentLocation.city}, {currentLocation.country}</span>
                </div>
              )}
            </div>
            
            {/* Save Status Message */}
            {saveStatus !== 'idle' && (
              <div className={`mt-4 p-4 rounded-xl border ${
                saveStatus === 'success' 
                  ? 'bg-emerald-500/20 text-emerald-300 border-emerald-400/30' 
                  : saveStatus === 'error'
                    ? 'bg-red-500/20 text-red-300 border-red-400/30'
                    : 'bg-blue-500/20 text-blue-300 border-blue-400/30'
              }`}>
                <p className="text-center font-medium">{saveMessage}</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Enhanced Transportation Section */}
      <div className="card-premium-dark p-10 animate-slide-right-dark" style={{ animationDelay: '0.1s' }}>
        <div className="flex items-center justify-between mb-10">
          <div className="flex items-center space-x-6">
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
          
          <button
            onClick={() => setShowRouteCalculator(!showRouteCalculator)}
            className="flex items-center space-x-2 px-4 py-2 bg-blue-500/20 text-blue-300 rounded-xl border border-blue-400/30 hover:bg-blue-500/30 transition-colors"
          >
            <Navigation className="w-4 h-4" />
            <span>Route Calculator</span>
          </button>
        </div>

        {showRouteCalculator && (
          <div className="mb-8">
            <RouteCalculator onRouteSelect={(distance, mode) => {
              updateUsage('transport', mode === 'driving' ? 'carKm' : 'publicTransportKm', distance.toString());
            }} />
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="space-y-8">
            <InputField
              label="Car usage (km/month)"
              value={usage.transport.carKm}
              onChange={(value) => updateUsage('transport', 'carKm', value)}
              placeholder="Enter kilometers"
              tooltip={INPUT_TOOLTIPS.carKm}
              errors={validationErrors.carKm}
              type="number"
            />

            <VehicleSelector
              value={usage.transport.carType}
              efficiency={usage.transport.carEfficiency}
              onChange={(type, efficiency) => {
                updateUsage('transport', 'carType', type);
                updateUsage('transport', 'carEfficiency', efficiency);
              }}
            />
          </div>

          <div className="space-y-8">
            <InputField
              label="Public transport (km/month)"
              value={usage.transport.publicTransportKm}
              onChange={(value) => updateUsage('transport', 'publicTransportKm', value)}
              placeholder="Bus, train, metro"
              tooltip={INPUT_TOOLTIPS.publicTransportKm}
              errors={validationErrors.publicTransportKm}
              type="number"
            />

            <InputField
              label="Flights (km/month)"
              value={usage.transport.flightKm}
              onChange={(value) => updateUsage('transport', 'flightKm', value)}
              placeholder="Air travel distance"
              tooltip={INPUT_TOOLTIPS.flightKm}
              errors={validationErrors.flightKm}
              type="number"
            />
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
          <InputField
            label="Electricity (kWh/month)"
            value={usage.energy.electricityKwh}
            onChange={(value) => updateUsage('energy', 'electricityKwh', value)}
            placeholder="Monthly electricity usage"
            tooltip={INPUT_TOOLTIPS.electricityKwh}
            errors={validationErrors.electricityKwh}
            type="number"
            icon={<Zap className="w-3 h-3" />}
            helperText="Average household: 300-400 kWh/month"
          />

          <InputField
            label="Heating (kWh/month)"
            value={usage.energy.heatingKwh}
            onChange={(value) => updateUsage('energy', 'heatingKwh', value)}
            placeholder="Monthly heating usage"
            tooltip={INPUT_TOOLTIPS.heatingKwh}
            errors={validationErrors.heatingKwh}
            type="number"
            icon={<Flame className="w-3 h-3" />}
            helperText="Varies by season and insulation"
          />
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
              className="w-full min-h-[40px] px-3 py-2 bg-white text-gray-900 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 hover:bg-gray-50 transition-colors"
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
              className="w-full min-h-[40px] px-3 py-2 bg-white text-gray-900 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 hover:bg-gray-50 transition-colors"
            >
              <option value={1}>🛍️ Low (minimal)</option>
              <option value={2}>🛒 Medium (average)</option>
              <option value={3}>🛍️ High (frequent)</option>
            </select>
          </div>

          <InputField
            label="Waste (kg/month)"
            value={usage.lifestyle.waste}
            onChange={(value) => updateUsage('lifestyle', 'waste', value)}
            placeholder="Monthly waste production"
            tooltip={INPUT_TOOLTIPS.waste}
            errors={validationErrors.waste}
            type="number"
          />
        </div>
      </div>
    </div>
  );
}