import { CarbonData } from '../types';

// Carbon emission factors (kg CO2 per unit)
export const EMISSION_FACTORS = {
  transport: {
    car_petrol_per_km: 0.171,
    car_diesel_per_km: 0.168,
    car_electric_per_km: 0.053,
    public_transport_per_km: 0.089,
    flight_domestic_per_km: 0.255,
    flight_international_per_km: 0.298,
    bike_per_km: 0.021, // manufacturing and maintenance
  },
  energy: {
    electricity_per_kwh: 0.233,
    heating_gas_per_kwh: 0.185,
    heating_oil_per_liter: 2.52,
  },
  lifestyle: {
    diet_vegan_per_day: 2.89,
    diet_vegetarian_per_day: 3.81,
    diet_pescatarian_per_day: 4.67,
    diet_omnivore_per_day: 7.19,
    shopping_low_per_month: 45,
    shopping_medium_per_month: 89,
    shopping_high_per_month: 156,
  }
};

export function calculateTransportationFootprint(data: CarbonData['transportation'], usage: any): number {
  const { carKm = 0, carType = 'petrol', publicTransportKm = 0, flightKm = 0, bikeKm = 0 } = usage;
  
  let carEmissions = 0;
  if (carType === 'petrol') carEmissions = carKm * EMISSION_FACTORS.transport.car_petrol_per_km;
  else if (carType === 'diesel') carEmissions = carKm * EMISSION_FACTORS.transport.car_diesel_per_km;
  else if (carType === 'electric') carEmissions = carKm * EMISSION_FACTORS.transport.car_electric_per_km;

  const publicTransportEmissions = publicTransportKm * EMISSION_FACTORS.transport.public_transport_per_km;
  const flightEmissions = flightKm * EMISSION_FACTORS.transport.flight_domestic_per_km;
  const bikeEmissions = bikeKm * EMISSION_FACTORS.transport.bike_per_km;

  return carEmissions + publicTransportEmissions + flightEmissions + bikeEmissions;
}

export function calculateEnergyFootprint(usage: any): number {
  const { electricityKwh = 0, heatingKwh = 0, heatingType = 'gas' } = usage;
  
  const electricityEmissions = electricityKwh * EMISSION_FACTORS.energy.electricity_per_kwh;
  const heatingEmissions = heatingKwh * EMISSION_FACTORS.energy.heating_gas_per_kwh;

  return electricityEmissions + heatingEmissions;
}

export function calculateLifestyleFootprint(data: CarbonData['lifestyle']): number {
  let dietEmissions = 0;
  switch (data.diet) {
    case 'vegan':
      dietEmissions = EMISSION_FACTORS.lifestyle.diet_vegan_per_day * 365;
      break;
    case 'vegetarian':
      dietEmissions = EMISSION_FACTORS.lifestyle.diet_vegetarian_per_day * 365;
      break;
    case 'pescatarian':
      dietEmissions = EMISSION_FACTORS.lifestyle.diet_pescatarian_per_day * 365;
      break;
    case 'omnivore':
      dietEmissions = EMISSION_FACTORS.lifestyle.diet_omnivore_per_day * 365;
      break;
  }

  let shoppingEmissions = 0;
  if (data.shopping <= 1) shoppingEmissions = EMISSION_FACTORS.lifestyle.shopping_low_per_month * 12;
  else if (data.shopping <= 2) shoppingEmissions = EMISSION_FACTORS.lifestyle.shopping_medium_per_month * 12;
  else shoppingEmissions = EMISSION_FACTORS.lifestyle.shopping_high_per_month * 12;

  const wasteEmissions = data.waste * 12; // kg per month

  return dietEmissions + shoppingEmissions + wasteEmissions;
}

export function calculateTotalFootprint(data: CarbonData, usage: any): number {
  const transportFootprint = calculateTransportationFootprint(data.transportation, usage.transport);
  const energyFootprint = calculateEnergyFootprint(usage.energy);
  const lifestyleFootprint = calculateLifestyleFootprint(data.lifestyle);

  return transportFootprint + energyFootprint + lifestyleFootprint;
}