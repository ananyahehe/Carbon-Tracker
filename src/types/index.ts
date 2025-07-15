export interface CarbonData {
  transportation: {
    car: number;
    publicTransport: number;
    flights: number;
    bike: number;
  };
  energy: {
    electricity: number;
    heating: number;
    cooling: number;
  };
  lifestyle: {
    diet: 'vegan' | 'vegetarian' | 'pescatarian' | 'omnivore';
    shopping: number;
    waste: number;
  };
}

export interface CityData {
  name: string;
  country: string;
  averageFootprint: number;
  population: number;
  greenScore: number;
  climateData?: {
    avgTemp: number;
    tempChange: number;
    renewablePercent: number;
  };
}

export interface OffsetOption {
  id: string;
  title: string;
  description: string;
  costPerTon: number;
  provider: string;
  verificationStandard: string;
  projectType: 'forestry' | 'renewable' | 'efficiency' | 'capture';
  impactStory?: string;
  location: string;
}

export interface UserProfile {
  id: string;
  totalFootprint: number;
  cityComparison: number;
  lastUpdated: Date;
  goals: {
    target: number;
    deadline: Date;
  };
  achievements: Achievement[];
  streaks: {
    current: number;
    longest: number;
    lastUpdate: Date;
  };
  preferences: {
    notifications: boolean;
    challenges: boolean;
    privacy: 'anonymous' | 'community' | 'private';
  };
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  unlockedAt: Date;
  category: 'reduction' | 'offset' | 'streak' | 'challenge' | 'education';
  rarity: 'common' | 'rare' | 'epic' | 'legendary';
}

export interface Challenge {
  id: string;
  title: string;
  description: string;
  type: 'weekly' | 'monthly' | 'seasonal';
  target: number;
  unit: string;
  startDate: Date;
  endDate: Date;
  participants: number;
  reward: Achievement;
  progress?: number;
}

export interface HabitEntry {
  id: string;
  date: Date;
  type: 'transport' | 'energy' | 'lifestyle' | 'consumption';
  action: string;
  carbonSaved: number;
  description: string;
}

export interface LocalBusiness {
  id: string;
  name: string;
  category: string;
  carbonRating: number;
  distance: number;
  address: string;
  sustainabilityFeatures: string[];
  verified: boolean;
}

export interface WeatherData {
  temperature: number;
  condition: string;
  humidity: number;
  energyRecommendation: string;
  carbonImpact: number;
}

export interface CarbonTip {
  id: string;
  title: string;
  content: string;
  category: string;
  difficulty: 'easy' | 'medium' | 'hard';
  potentialSaving: number;
  author: string;
  authorTitle: string;
  readTime: number;
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  category: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
}

export interface PredictionData {
  currentTrend: number;
  projected2025: number;
  projected2030: number;
  confidence: number;
  recommendations: string[];
}

export interface ProductCarbonData {
  productName: string;
  carbonFootprint: number;
  category: string;
  alternatives: Array<{
    name: string;
    carbonFootprint: number;
    savings: number;
  }>;
}