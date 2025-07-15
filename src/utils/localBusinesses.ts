import { LocalBusiness } from '../types';

export const LOCAL_BUSINESSES: LocalBusiness[] = [
  {
    id: 'green_cafe',
    name: 'Green Leaf Café',
    category: 'Restaurant',
    carbonRating: 4.8,
    distance: 0.3,
    address: '123 Eco Street',
    sustainabilityFeatures: ['Organic ingredients', 'Solar powered', 'Zero waste', 'Local sourcing'],
    verified: true
  },
  {
    id: 'eco_market',
    name: 'EcoFresh Market',
    category: 'Grocery',
    carbonRating: 4.6,
    distance: 0.7,
    address: '456 Sustainable Ave',
    sustainabilityFeatures: ['Package-free options', 'Local produce', 'Renewable energy', 'Bike delivery'],
    verified: true
  },
  {
    id: 'repair_shop',
    name: 'Fix-It Workshop',
    category: 'Repair',
    carbonRating: 4.9,
    distance: 1.2,
    address: '789 Circular Economy Blvd',
    sustainabilityFeatures: ['Extends product life', 'Uses recycled parts', 'Carbon neutral'],
    verified: true
  },
  {
    id: 'bike_share',
    name: 'GreenCycle Station',
    category: 'Transportation',
    carbonRating: 5.0,
    distance: 0.1,
    address: '321 Clean Transport St',
    sustainabilityFeatures: ['Electric bikes', 'Solar charging', 'Carbon negative'],
    verified: true
  },
  {
    id: 'thrift_store',
    name: 'Second Life Boutique',
    category: 'Clothing',
    carbonRating: 4.7,
    distance: 0.9,
    address: '654 Reuse Road',
    sustainabilityFeatures: ['Circular fashion', 'Upcycling services', 'Donation program'],
    verified: true
  },
  {
    id: 'solar_installer',
    name: 'SunPower Solutions',
    category: 'Energy',
    carbonRating: 4.8,
    distance: 2.1,
    address: '987 Renewable Way',
    sustainabilityFeatures: ['Solar installation', 'Energy storage', 'Grid independence'],
    verified: true
  }
];

export function findNearbyBusinesses(
  category?: string,
  maxDistance: number = 5,
  minRating: number = 4.0
): LocalBusiness[] {
  return LOCAL_BUSINESSES.filter(business => 
    business.distance <= maxDistance &&
    business.carbonRating >= minRating &&
    (!category || business.category === category)
  ).sort((a, b) => b.carbonRating - a.carbonRating);
}

export function calculateCarbonSavings(business: LocalBusiness): number {
  // Estimate carbon savings compared to conventional alternatives
  const baseSavings = {
    'Restaurant': 2.5,
    'Grocery': 1.8,
    'Repair': 15.0,
    'Transportation': 8.5,
    'Clothing': 12.0,
    'Energy': 25.0
  };

  return (baseSavings[business.category as keyof typeof baseSavings] || 1.0) * business.carbonRating;
}