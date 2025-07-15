import { CityData } from '../types';

export const CITY_DATA: CityData[] = [
  {
    name: 'Copenhagen',
    country: 'Denmark',
    averageFootprint: 6800,
    population: 650000,
    greenScore: 95
  },
  {
    name: 'Stockholm',
    country: 'Sweden',
    averageFootprint: 7200,
    population: 980000,
    greenScore: 92
  },
  {
    name: 'Portland',
    country: 'USA',
    averageFootprint: 8900,
    population: 650000,
    greenScore: 88
  },
  {
    name: 'Amsterdam',
    country: 'Netherlands',
    averageFootprint: 8100,
    population: 900000,
    greenScore: 90
  },
  {
    name: 'London',
    country: 'UK',
    averageFootprint: 9500,
    population: 9000000,
    greenScore: 82
  },
  {
    name: 'Berlin',
    country: 'Germany',
    averageFootprint: 8700,
    population: 3700000,
    greenScore: 85
  },
  {
    name: 'Tokyo',
    country: 'Japan',
    averageFootprint: 10200,
    population: 14000000,
    greenScore: 78
  },
  {
    name: 'New York',
    country: 'USA',
    averageFootprint: 11800,
    population: 8400000,
    greenScore: 75
  },
  {
    name: 'Los Angeles',
    country: 'USA',
    averageFootprint: 13500,
    population: 4000000,
    greenScore: 68
  },
  {
    name: 'Dubai',
    country: 'UAE',
    averageFootprint: 18600,
    population: 3400000,
    greenScore: 45
  }
];

export function getCityComparison(userFootprint: number): { 
  better: CityData[], 
  worse: CityData[], 
  closest: CityData 
} {
  const sorted = [...CITY_DATA].sort((a, b) => 
    Math.abs(a.averageFootprint - userFootprint) - Math.abs(b.averageFootprint - userFootprint)
  );

  return {
    better: CITY_DATA.filter(city => city.averageFootprint > userFootprint),
    worse: CITY_DATA.filter(city => city.averageFootprint < userFootprint),
    closest: sorted[0]
  };
}