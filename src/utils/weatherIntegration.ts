import { WeatherData } from '../types';

// Mock weather data - in production, this would integrate with a weather API
export function getCurrentWeather(): WeatherData {
  const conditions = ['sunny', 'cloudy', 'rainy', 'snowy'];
  const condition = conditions[Math.floor(Math.random() * conditions.length)];
  const temperature = Math.floor(Math.random() * 40) - 10; // -10 to 30°C

  let energyRecommendation = '';
  let carbonImpact = 0;

  if (temperature < 5) {
    energyRecommendation = 'Cold weather detected. Consider lowering thermostat by 1°C to save 8% on heating.';
    carbonImpact = 2.5;
  } else if (temperature > 25) {
    energyRecommendation = 'Hot weather ahead. Use fans instead of AC when possible to reduce energy use.';
    carbonImpact = 3.2;
  } else if (condition === 'sunny') {
    energyRecommendation = 'Perfect weather for air-drying clothes and opening windows for natural cooling.';
    carbonImpact = -1.5;
  } else {
    energyRecommendation = 'Mild weather - great opportunity to reduce heating and cooling energy use.';
    carbonImpact = -0.8;
  }

  return {
    temperature,
    condition,
    humidity: Math.floor(Math.random() * 40) + 40,
    energyRecommendation,
    carbonImpact
  };
}

export function getWeatherBasedTips(weather: WeatherData): string[] {
  const tips = [];

  if (weather.temperature < 10) {
    tips.push('Wear layers instead of cranking up the heat');
    tips.push('Close curtains at night to retain heat');
    tips.push('Use a programmable thermostat to optimize heating');
  } else if (weather.temperature > 25) {
    tips.push('Use ceiling fans to feel 4°C cooler');
    tips.push('Close blinds during peak sun hours');
    tips.push('Consider a cold shower to cool down naturally');
  }

  if (weather.condition === 'sunny') {
    tips.push('Perfect day for solar energy generation');
    tips.push('Air-dry your laundry outside');
    tips.push('Walk or bike instead of driving');
  } else if (weather.condition === 'rainy') {
    tips.push('Great day to work from home and reduce commute emissions');
    tips.push('Use this time for indoor energy-saving activities');
  }

  return tips;
}