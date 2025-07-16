import React, { useState, useEffect } from 'react';
import { Navigation, MapPin, Clock, Leaf, Car, Bus, Bike, Footprints, Search, Star, Filter } from 'lucide-react';
import { gpsTracker, calculateCityDistance, RouteOption } from '../utils/gpsTracking';
import { IndianCityAI, IndianCity, POPULAR_CITIES } from '../utils/indianCitiesDatabase';

interface RouteCalculatorProps {
  onRouteSelect: (distance: number, mode: string) => void;
}

export default function RouteCalculator({ onRouteSelect }: RouteCalculatorProps) {
  const [fromCity, setFromCity] = useState('');
  const [toCity, setToCity] = useState('');
  const [fromCityObj, setFromCityObj] = useState<IndianCity | null>(null);
  const [toCityObj, setToCityObj] = useState<IndianCity | null>(null);
  const [routes, setRoutes] = useState<RouteOption[]>([]);
  const [loading, setLoading] = useState(false);
  const [fromSuggestions, setFromSuggestions] = useState<IndianCity[]>([]);
  const [toSuggestions, setToSuggestions] = useState<IndianCity[]>([]);
  const [showFromSuggestions, setShowFromSuggestions] = useState(false);
  const [showToSuggestions, setShowToSuggestions] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'metro' | 'capital' | 'tier1' | 'tier2'>('all');

  // Get filtered popular cities based on selected filter
  const getFilteredCities = () => {
    switch (selectedFilter) {
      case 'metro': return POPULAR_CITIES.filter(city => city.isMetro);
      case 'capital': return POPULAR_CITIES.filter(city => city.isCapital);
      case 'tier1': return POPULAR_CITIES.filter(city => city.tier === 1);
      case 'tier2': return POPULAR_CITIES.filter(city => city.tier === 2);
      default: return POPULAR_CITIES;
    }
  };

  const calculateRoutes = async () => {
    if (!fromCityObj || !toCityObj) return;

    setLoading(true);
    try {
      // Calculate distance using coordinates from our database
      const distance = IndianCityAI.calculateDistance(fromCityObj.id, toCityObj.id);
      
      const routeOptions: RouteOption[] = [
        {
          mode: 'Walking',
          distance: distance,
          duration: distance * 12,
          emissions: 0,
          description: `${distance.toFixed(1)}km walk`,
          ecoFriendly: true
        },
        {
          mode: 'Cycling',
          distance: distance,
          duration: distance * 4,
          emissions: distance * 0.021,
          description: `${distance.toFixed(1)}km bike ride`,
          ecoFriendly: true
        },
        {
          mode: 'Public Transport',
          distance: distance * 1.2,
          duration: distance * 3,
          emissions: distance * 1.2 * 0.089,
          description: 'Bus/train route',
          ecoFriendly: true
        },
        {
          mode: 'Driving',
          distance: distance,
          duration: distance * 2,
          emissions: distance * 0.171,
          description: `${distance.toFixed(1)}km drive`,
          ecoFriendly: false
        },
        {
          mode: 'Flight',
          distance: distance,
          duration: distance * 0.5,
          emissions: distance * 0.255,
          description: 'Direct flight',
          ecoFriendly: false
        }
      ].sort((a, b) => a.emissions - b.emissions);

      setRoutes(routeOptions);
    } catch (error) {
      console.error('Error calculating routes:', error);
    } finally {
      setLoading(false);
    }
  };

  // Handle city input changes with AI search
  const handleFromCityChange = (value: string) => {
    setFromCity(value);
    if (value.length >= 2) {
      const suggestions = IndianCityAI.searchCities(value, 8);
      setFromSuggestions(suggestions);
      setShowFromSuggestions(true);
    } else {
      setFromSuggestions([]);
      setShowFromSuggestions(false);
    }
  };

  const handleToCityChange = (value: string) => {
    setToCity(value);
    if (value.length >= 2) {
      const suggestions = IndianCityAI.searchCities(value, 8);
      setToSuggestions(suggestions);
      setShowToSuggestions(true);
    } else {
      setToSuggestions([]);
      setShowToSuggestions(false);
    }
  };

  // Handle city selection
  const selectFromCity = (city: IndianCity) => {
    setFromCity(city.name);
    setFromCityObj(city);
    setShowFromSuggestions(false);
  };

  const selectToCity = (city: IndianCity) => {
    setToCity(city.name);
    setToCityObj(city);
    setShowToSuggestions(false);
  };

  // Quick route selection
  const setQuickRoute = (from: IndianCity, to: IndianCity) => {
    setFromCity(from.name);
    setToCity(to.name);
    setFromCityObj(from);
    setToCityObj(to);
  };

  const getModeIcon = (mode: string) => {
    switch (mode.toLowerCase()) {
      case 'walking': return <Footprints className="w-5 h-5" />;
      case 'cycling': return <Bike className="w-5 h-5" />;
      case 'public transport': return <Bus className="w-5 h-5" />;
      case 'driving': return <Car className="w-5 h-5" />;
      case 'flight': return <Navigation className="w-5 h-5" />;
      default: return <MapPin className="w-5 h-5" />;
    }
  };

  const getModeColor = (mode: string, ecoFriendly: boolean) => {
    if (ecoFriendly) {
      return 'text-emerald-400 bg-emerald-500/10 border-emerald-400/20';
    }
    return 'text-orange-400 bg-orange-500/10 border-orange-400/20';
  };

  return (
    <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-600">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <Navigation className="w-6 h-6 text-blue-400" />
          <h3 className="text-lg font-semibold text-white">Indian Route Calculator</h3>
        </div>
        <div className="text-xs text-slate-400 bg-slate-700/50 px-3 py-1 rounded-full">
          🇮🇳 {POPULAR_CITIES.length}+ Indian Cities
        </div>
      </div>

      {/* City Filter */}
      <div className="mb-6">
        <div className="flex items-center space-x-2 mb-3">
          <Filter className="w-4 h-4 text-slate-400" />
          <span className="text-sm text-slate-300">Filter cities:</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {[
            { id: 'all', label: 'All Cities', count: POPULAR_CITIES.length },
            { id: 'metro', label: 'Metro Cities', count: POPULAR_CITIES.filter(c => c.isMetro).length },
            { id: 'capital', label: 'Capitals', count: POPULAR_CITIES.filter(c => c.isCapital).length },
            { id: 'tier1', label: 'Tier 1', count: POPULAR_CITIES.filter(c => c.tier === 1).length },
            { id: 'tier2', label: 'Tier 2', count: POPULAR_CITIES.filter(c => c.tier === 2).length }
          ].map(filter => (
            <button
              key={filter.id}
              onClick={() => setSelectedFilter(filter.id as any)}
              className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                selectedFilter === filter.id
                  ? 'bg-blue-500 text-white'
                  : 'bg-slate-700/50 text-slate-300 hover:bg-slate-600/50'
              }`}
            >
              {filter.label} ({filter.count})
            </button>
          ))}
        </div>
      </div>

      {/* Input Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="relative">
          <label className="block text-sm font-medium text-slate-200 mb-2">From</label>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={fromCity}
              onChange={(e) => handleFromCityChange(e.target.value)}
              onFocus={() => setShowFromSuggestions(fromSuggestions.length > 0)}
              placeholder="Search Indian cities..."
              className="input-premium-dark w-full pl-10"
            />
            {fromCityObj && (
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center space-x-1">
                <span className="text-xs text-emerald-400 font-medium">{fromCityObj.state}</span>
                <div className={`w-2 h-2 rounded-full ${
                  fromCityObj.tier === 1 ? 'bg-emerald-400' :
                  fromCityObj.tier === 2 ? 'bg-blue-400' : 'bg-yellow-400'
                }`} />
              </div>
            )}
          </div>
          
          {/* From City Suggestions */}
          {showFromSuggestions && fromSuggestions.length > 0 && (
            <div className="absolute z-10 w-full mt-1 bg-slate-800 border border-slate-600 rounded-lg shadow-xl max-h-60 overflow-y-auto">
              {fromSuggestions.map(city => (
                <button
                  key={city.id}
                  onClick={() => selectFromCity(city)}
                  className="w-full px-4 py-3 text-left hover:bg-slate-700 transition-colors border-b border-slate-700 last:border-b-0"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-white font-medium">{city.name}</div>
                      <div className="text-xs text-slate-400">{city.state} • {city.district}</div>
                    </div>
                    <div className="flex items-center space-x-2">
                      {city.isCapital && <span className="text-xs text-yellow-400">Capital</span>}
                      {city.isMetro && <span className="text-xs text-emerald-400">Metro</span>}
                      <div className={`w-2 h-2 rounded-full ${
                        city.tier === 1 ? 'bg-emerald-400' :
                        city.tier === 2 ? 'bg-blue-400' : 'bg-yellow-400'
                      }`} />
                    </div>
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="relative">
          <label className="block text-sm font-medium text-slate-200 mb-2">To</label>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={toCity}
              onChange={(e) => handleToCityChange(e.target.value)}
              onFocus={() => setShowToSuggestions(toSuggestions.length > 0)}
              placeholder="Search Indian cities..."
              className="input-premium-dark w-full pl-10"
            />
            {toCityObj && (
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center space-x-1">
                <span className="text-xs text-emerald-400 font-medium">{toCityObj.state}</span>
                <div className={`w-2 h-2 rounded-full ${
                  toCityObj.tier === 1 ? 'bg-emerald-400' :
                  toCityObj.tier === 2 ? 'bg-blue-400' : 'bg-yellow-400'
                }`} />
              </div>
            )}
          </div>
          
          {/* To City Suggestions */}
          {showToSuggestions && toSuggestions.length > 0 && (
            <div className="absolute z-10 w-full mt-1 bg-slate-800 border border-slate-600 rounded-lg shadow-xl max-h-60 overflow-y-auto">
              {toSuggestions.map(city => (
                <button
                  key={city.id}
                  onClick={() => selectToCity(city)}
                  className="w-full px-4 py-3 text-left hover:bg-slate-700 transition-colors border-b border-slate-700 last:border-b-0"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-white font-medium">{city.name}</div>
                      <div className="text-xs text-slate-400">{city.state} • {city.district}</div>
                    </div>
                    <div className="flex items-center space-x-2">
                      {city.isCapital && <span className="text-xs text-yellow-400">Capital</span>}
                      {city.isMetro && <span className="text-xs text-emerald-400">Metro</span>}
                      <div className={`w-2 h-2 rounded-full ${
                        city.tier === 1 ? 'bg-emerald-400' :
                        city.tier === 2 ? 'bg-blue-400' : 'bg-yellow-400'
                      }`} />
                    </div>
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      <button
        onClick={calculateRoutes}
        disabled={!fromCityObj || !toCityObj || loading}
        className="w-full bg-blue-500 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-600 disabled:bg-gray-600 disabled:cursor-not-allowed transition-colors mb-6"
      >
        {loading ? 'Calculating Routes...' : 'Calculate Routes'}
      </button>

      {/* Distance Info */}
      {fromCityObj && toCityObj && (
        <div className="mb-6 p-4 bg-slate-700/30 rounded-lg border border-slate-600">
          <div className="flex items-center justify-between">
            <div className="text-sm text-slate-300">
              <span className="font-medium text-white">{fromCityObj.name}</span>
              <span className="mx-2">→</span>
              <span className="font-medium text-white">{toCityObj.name}</span>
            </div>
            <div className="text-sm text-slate-400">
              ~{IndianCityAI.calculateDistance(fromCityObj.id, toCityObj.id).toFixed(0)} km
            </div>
          </div>
          <div className="text-xs text-slate-400 mt-1">
            {fromCityObj.state} to {toCityObj.state} • {fromCityObj.region} to {toCityObj.region}
          </div>
        </div>
      )}

      {/* Routes Display */}
      {routes.length > 0 && (
        <div className="space-y-3">
          <h4 className="text-sm font-semibold text-slate-200 mb-3">Route Options</h4>
          {routes.map((route, index) => (
            <div
              key={index}
              className={`p-4 rounded-lg border transition-all duration-200 cursor-pointer hover:scale-[1.02] ${getModeColor(route.mode, route.ecoFriendly)}`}
              onClick={() => onRouteSelect(route.distance, route.mode.toLowerCase().replace(' ', '_'))}
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-3">
                  {getModeIcon(route.mode)}
                  <div>
                    <h5 className="font-semibold">{route.mode}</h5>
                    <p className="text-xs opacity-80">{route.description}</p>
                  </div>
                </div>
                {route.ecoFriendly && (
                  <div className="flex items-center space-x-1 px-2 py-1 bg-emerald-500/20 rounded-full">
                    <Leaf className="w-3 h-3 text-emerald-400" />
                    <span className="text-xs text-emerald-400 font-medium">Eco</span>
                  </div>
                )}
              </div>

              <div className="grid grid-cols-3 gap-4 text-xs">
                <div>
                  <span className="opacity-60">Distance:</span>
                  <div className="font-medium">{route.distance.toFixed(1)} km</div>
                </div>
                <div>
                  <span className="opacity-60">Duration:</span>
                  <div className="font-medium">{Math.round(route.duration)} min</div>
                </div>
                <div>
                  <span className="opacity-60">CO₂:</span>
                  <div className="font-medium">{route.emissions.toFixed(1)} kg</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Quick Actions */}
      <div className="mt-6 pt-4 border-t border-slate-600">
        <h4 className="text-sm font-semibold text-slate-200 mb-3">Quick Actions</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {[
            { from: 'mumbai', to: 'delhi', label: 'Mumbai → Delhi' },
            { from: 'bangalore', to: 'chennai', label: 'Bangalore → Chennai' },
            { from: 'kolkata', to: 'hyderabad', label: 'Kolkata → Hyderabad' },
            { from: 'pune', to: 'ahmedabad', label: 'Pune → Ahmedabad' }
          ].map(route => {
            const fromCity = IndianCityAI.getCityDetails(route.from);
            const toCity = IndianCityAI.getCityDetails(route.to);
            if (!fromCity || !toCity) return null;
            
            return (
              <button
                key={`${route.from}-${route.to}`}
                onClick={() => setQuickRoute(fromCity, toCity)}
                className="p-3 bg-slate-700/50 rounded-lg text-sm text-slate-300 hover:bg-slate-600/50 transition-colors text-left"
              >
                <div className="font-medium">{route.label}</div>
                <div className="text-xs text-slate-400 mt-1">
                  ~{IndianCityAI.calculateDistance(route.from, route.to).toFixed(0)} km
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Popular Cities Quick Access */}
      <div className="mt-4 pt-4 border-t border-slate-600">
        <h4 className="text-sm font-semibold text-slate-200 mb-3">
          <Star className="w-4 h-4 inline mr-1" />
          Popular Cities ({selectedFilter === 'all' ? 'All' : selectedFilter})
        </h4>
        <div className="flex flex-wrap gap-2 max-h-32 overflow-y-auto">
          {getFilteredCities().slice(0, 20).map(city => (
            <button
              key={city.id}
              onClick={() => !fromCityObj ? selectFromCity(city) : selectToCity(city)}
              className="px-3 py-1 bg-slate-700/30 hover:bg-slate-600/50 rounded-full text-xs text-slate-300 transition-colors border border-slate-600"
            >
              {city.name}
              {city.isCapital && <span className="ml-1 text-yellow-400">👑</span>}
              {city.isMetro && <span className="ml-1 text-emerald-400">🏙️</span>}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}