import React, { useState, useEffect } from 'react';
import { Navigation, MapPin, Clock, Leaf, Car, Bus, Bike, Footprints } from 'lucide-react';
import { gpsTracker, calculateCityDistance, RouteOption } from '../utils/gpsTracking';

interface RouteCalculatorProps {
  onRouteSelect: (distance: number, mode: string) => void;
}

export default function RouteCalculator({ onRouteSelect }: RouteCalculatorProps) {
  const [fromCity, setFromCity] = useState('');
  const [toCity, setToCity] = useState('');
  const [routes, setRoutes] = useState<RouteOption[]>([]);
  const [loading, setLoading] = useState(false);
  const [useCurrentLocation, setUseCurrentLocation] = useState(false);

  const popularCities = [
    'New York', 'Los Angeles', 'Chicago', 'London', 'Paris', 'Tokyo',
    'Berlin', 'Sydney', 'Toronto', 'Amsterdam', 'Barcelona', 'Rome'
  ];

  const calculateRoutes = async () => {
    if (!fromCity || !toCity) return;

    setLoading(true);
    try {
      const result = await calculateCityDistance(fromCity, toCity);
      
      const routeOptions: RouteOption[] = [
        {
          mode: 'Walking',
          distance: result.distance,
          duration: result.distance * 12,
          emissions: 0,
          description: `${result.distance.toFixed(1)}km walk`,
          ecoFriendly: true
        },
        {
          mode: 'Cycling',
          distance: result.distance,
          duration: result.distance * 4,
          emissions: result.distance * 0.021,
          description: `${result.distance.toFixed(1)}km bike ride`,
          ecoFriendly: true
        },
        {
          mode: 'Public Transport',
          distance: result.distance * 1.2,
          duration: result.distance * 3,
          emissions: result.emissions.bus,
          description: 'Bus/train route',
          ecoFriendly: true
        },
        {
          mode: 'Driving',
          distance: result.distance,
          duration: result.distance * 2,
          emissions: result.emissions.car,
          description: `${result.distance.toFixed(1)}km drive`,
          ecoFriendly: false
        },
        {
          mode: 'Flight',
          distance: result.distance,
          duration: result.distance * 0.5,
          emissions: result.emissions.flight,
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
      <div className="flex items-center space-x-3 mb-6">
        <Navigation className="w-6 h-6 text-blue-400" />
        <h3 className="text-lg font-semibold text-white">Route Calculator</h3>
      </div>

      {/* Input Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div>
          <label className="block text-sm font-medium text-slate-200 mb-2">From</label>
          <div className="relative">
            <input
              type="text"
              value={fromCity}
              onChange={(e) => setFromCity(e.target.value)}
              placeholder="Enter departure city"
              className="input-premium-dark w-full"
              list="from-cities"
            />
            <datalist id="from-cities">
              {popularCities.map(city => (
                <option key={city} value={city} />
              ))}
            </datalist>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-200 mb-2">To</label>
          <div className="relative">
            <input
              type="text"
              value={toCity}
              onChange={(e) => setToCity(e.target.value)}
              placeholder="Enter destination city"
              className="input-premium-dark w-full"
              list="to-cities"
            />
            <datalist id="to-cities">
              {popularCities.map(city => (
                <option key={city} value={city} />
              ))}
            </datalist>
          </div>
        </div>
      </div>

      <button
        onClick={calculateRoutes}
        disabled={!fromCity || !toCity || loading}
        className="w-full bg-blue-500 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-600 disabled:bg-gray-600 disabled:cursor-not-allowed transition-colors mb-6"
      >
        {loading ? 'Calculating Routes...' : 'Calculate Routes'}
      </button>

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
        <div className="grid grid-cols-2 gap-3">
          <button
            onClick={() => {
              setFromCity('New York');
              setToCity('Los Angeles');
            }}
            className="p-3 bg-slate-700/50 rounded-lg text-sm text-slate-300 hover:bg-slate-600/50 transition-colors"
          >
            NYC → LA
          </button>
          <button
            onClick={() => {
              setFromCity('London');
              setToCity('Paris');
            }}
            className="p-3 bg-slate-700/50 rounded-lg text-sm text-slate-300 hover:bg-slate-600/50 transition-colors"
          >
            London → Paris
          </button>
        </div>
      </div>
    </div>
  );
}