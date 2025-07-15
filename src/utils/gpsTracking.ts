export interface GPSLocation {
  latitude: number;
  longitude: number;
  accuracy: number;
  timestamp: Date;
}

export interface TripData {
  id: string;
  startLocation: GPSLocation;
  endLocation: GPSLocation;
  distance: number;
  duration: number;
  transportMode: 'walking' | 'cycling' | 'driving' | 'public_transport';
  emissions: number;
  timestamp: Date;
}

export interface RouteOption {
  mode: string;
  distance: number;
  duration: number;
  emissions: number;
  description: string;
  ecoFriendly: boolean;
}

class GPSTracker {
  private watchId: number | null = null;
  private currentPosition: GPSLocation | null = null;
  private isTracking = false;

  async requestPermission(): Promise<boolean> {
    if (!navigator.geolocation) {
      throw new Error('Geolocation is not supported by this browser');
    }

    try {
      const position = await this.getCurrentPosition();
      return true;
    } catch (error) {
      console.error('GPS permission denied:', error);
      return false;
    }
  }

  private getCurrentPosition(): Promise<GeolocationPosition> {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject, {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 60000
      });
    });
  }

  async startTracking(): Promise<void> {
    if (!navigator.geolocation || this.isTracking) return;

    this.isTracking = true;
    this.watchId = navigator.geolocation.watchPosition(
      (position) => {
        this.currentPosition = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          accuracy: position.coords.accuracy,
          timestamp: new Date()
        };
      },
      (error) => {
        console.error('GPS tracking error:', error);
        this.stopTracking();
      },
      {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 30000
      }
    );
  }

  stopTracking(): void {
    if (this.watchId !== null) {
      navigator.geolocation.clearWatch(this.watchId);
      this.watchId = null;
    }
    this.isTracking = false;
  }

  getCurrentLocation(): GPSLocation | null {
    return this.currentPosition;
  }

  calculateDistance(lat1: number, lon1: number, lat2: number, lon2: number): number {
    const R = 6371; // Earth's radius in kilometers
    const dLat = this.toRadians(lat2 - lat1);
    const dLon = this.toRadians(lon2 - lon1);
    const a = 
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(this.toRadians(lat1)) * Math.cos(this.toRadians(lat2)) * 
      Math.sin(dLon/2) * Math.sin(dLon/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    return R * c;
  }

  private toRadians(degrees: number): number {
    return degrees * (Math.PI / 180);
  }

  calculateEmissions(distance: number, mode: string): number {
    const emissionFactors = {
      walking: 0,
      cycling: 0.021,
      driving: 0.171,
      public_transport: 0.089,
      electric_car: 0.053,
      hybrid: 0.120
    };

    return distance * (emissionFactors[mode as keyof typeof emissionFactors] || 0.171);
  }

  async getRouteOptions(
    start: GPSLocation, 
    end: GPSLocation
  ): Promise<RouteOption[]> {
    const distance = this.calculateDistance(
      start.latitude, start.longitude,
      end.latitude, end.longitude
    );

    // Mock route options - in production, integrate with mapping APIs
    return [
      {
        mode: 'Walking',
        distance: distance,
        duration: distance * 12, // 12 minutes per km
        emissions: 0,
        description: `${distance.toFixed(1)}km walk`,
        ecoFriendly: true
      },
      {
        mode: 'Cycling',
        distance: distance,
        duration: distance * 4, // 4 minutes per km
        emissions: this.calculateEmissions(distance, 'cycling'),
        description: `${distance.toFixed(1)}km bike ride`,
        ecoFriendly: true
      },
      {
        mode: 'Public Transport',
        distance: distance * 1.2, // Slightly longer route
        duration: distance * 3,
        emissions: this.calculateEmissions(distance * 1.2, 'public_transport'),
        description: `Bus/train route`,
        ecoFriendly: true
      },
      {
        mode: 'Driving',
        distance: distance,
        duration: distance * 2, // 2 minutes per km
        emissions: this.calculateEmissions(distance, 'driving'),
        description: `${distance.toFixed(1)}km drive`,
        ecoFriendly: false
      }
    ].sort((a, b) => a.emissions - b.emissions);
  }
}

export const gpsTracker = new GPSTracker();

// City-to-city distance calculation
export async function calculateCityDistance(
  fromCity: string, 
  toCity: string
): Promise<{ distance: number; emissions: { [key: string]: number } }> {
  // Mock implementation - in production, use geocoding API
  const cityCoordinates: { [key: string]: { lat: number; lng: number } } = {
    'New York': { lat: 40.7128, lng: -74.0060 },
    'Los Angeles': { lat: 34.0522, lng: -118.2437 },
    'Chicago': { lat: 41.8781, lng: -87.6298 },
    'London': { lat: 51.5074, lng: -0.1278 },
    'Paris': { lat: 48.8566, lng: 2.3522 },
    'Tokyo': { lat: 35.6762, lng: 139.6503 }
  };

  const from = cityCoordinates[fromCity];
  const to = cityCoordinates[toCity];

  if (!from || !to) {
    throw new Error('City not found in database');
  }

  const distance = gpsTracker.calculateDistance(from.lat, from.lng, to.lat, to.lng);

  return {
    distance,
    emissions: {
      flight: distance * 0.255,
      train: distance * 0.041,
      bus: distance * 0.089,
      car: distance * 0.171
    }
  };
}