import { PredictionData } from '../types';

export function generatePredictions(
  historicalData: number[],
  currentFootprint: number
): PredictionData {
  // Simple trend analysis - in a real app, this would use more sophisticated ML
  const trend = historicalData.length > 1 
    ? (historicalData[historicalData.length - 1] - historicalData[0]) / historicalData.length
    : 0;

  const projected2025 = Math.max(0, currentFootprint + (trend * 12)); // 12 months ahead
  const projected2030 = Math.max(0, currentFootprint + (trend * 60)); // 5 years ahead

  const recommendations = [];
  
  if (trend > 0) {
    recommendations.push("Your footprint is trending upward. Consider reviewing your transportation habits.");
    recommendations.push("Energy efficiency improvements could help reverse this trend.");
  } else if (trend < 0) {
    recommendations.push("Great progress! You're on track to meet climate goals.");
    recommendations.push("Consider carbon offsets to become carbon negative.");
  } else {
    recommendations.push("Your footprint is stable. Small changes can create big improvements.");
  }

  if (projected2030 > 2300) {
    recommendations.push("To meet Paris Agreement goals, consider reducing by " + 
      Math.round((projected2030 - 2300) / 60) + " kg CO₂ per month.");
  }

  return {
    currentTrend: trend,
    projected2025,
    projected2030,
    confidence: Math.min(95, 60 + (historicalData.length * 5)), // Higher confidence with more data
    recommendations
  };
}

export function getSeasonalAnalysis(monthlyData: number[]): {
  season: string;
  average: number;
  trend: string;
  recommendation: string;
}[] {
  const seasons = [
    { name: 'Winter', months: [11, 0, 1], color: '#3B82F6' },
    { name: 'Spring', months: [2, 3, 4], color: '#10B981' },
    { name: 'Summer', months: [5, 6, 7], color: '#F59E0B' },
    { name: 'Fall', months: [8, 9, 10], color: '#EF4444' }
  ];

  return seasons.map(season => {
    const seasonData = season.months.map(month => monthlyData[month] || 0);
    const average = seasonData.reduce((a, b) => a + b, 0) / seasonData.length;
    
    let trend = 'stable';
    let recommendation = '';

    if (season.name === 'Winter' && average > monthlyData.reduce((a, b) => a + b, 0) / 12 * 1.2) {
      trend = 'high';
      recommendation = 'Consider improving home insulation and using programmable thermostats.';
    } else if (season.name === 'Summer' && average > monthlyData.reduce((a, b) => a + b, 0) / 12 * 1.15) {
      trend = 'high';
      recommendation = 'Optimize air conditioning usage and consider energy-efficient cooling.';
    } else if (average < monthlyData.reduce((a, b) => a + b, 0) / 12 * 0.9) {
      trend = 'low';
      recommendation = 'Great seasonal efficiency! Maintain these habits year-round.';
    } else {
      recommendation = 'Consistent seasonal performance. Look for optimization opportunities.';
    }

    return {
      season: season.name,
      average,
      trend,
      recommendation
    };
  });
}