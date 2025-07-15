import { OffsetOption } from '../types';

export const OFFSET_OPTIONS: OffsetOption[] = [
  {
    id: 'reforestation',
    title: 'Tropical Forest Restoration',
    description: 'Plant native trees in degraded tropical forests to restore biodiversity and capture carbon.',
    costPerTon: 12,
    provider: 'Forest Carbon Partners',
    verificationStandard: 'VCS',
    projectType: 'forestry'
  },
  {
    id: 'solar-india',
    title: 'Solar Power in Rural India',
    description: 'Support solar panel installations in remote villages, providing clean energy access.',
    costPerTon: 8,
    provider: 'Clean Energy Foundation',
    verificationStandard: 'Gold Standard',
    projectType: 'renewable'
  },
  {
    id: 'efficiency',
    title: 'Energy Efficiency Programs',
    description: 'Fund LED lighting and efficient cooking stoves in developing communities.',
    costPerTon: 15,
    provider: 'Efficiency Alliance',
    verificationStandard: 'VCS',
    projectType: 'efficiency'
  },
  {
    id: 'direct-capture',
    title: 'Direct Air Capture',
    description: 'Support cutting-edge technology that removes CO2 directly from the atmosphere.',
    costPerTon: 180,
    provider: 'Carbon Engineering',
    verificationStandard: 'ISO 14064',
    projectType: 'capture'
  },
  {
    id: 'wind-farm',
    title: 'Wind Farm Development',
    description: 'Finance new wind energy projects that replace fossil fuel power generation.',
    costPerTon: 22,
    provider: 'Renewable Wind Corp',
    verificationStandard: 'Gold Standard',
    projectType: 'renewable'
  },
  {
    id: 'mangrove',
    title: 'Mangrove Conservation',
    description: 'Protect and restore coastal mangrove forests that sequester carbon and protect shorelines.',
    costPerTon: 18,
    provider: 'Blue Carbon Initiative',
    verificationStandard: 'Plan Vivo',
    projectType: 'forestry'
  }
];

export function getPersonalizedOffsets(footprint: number, budget?: number): OffsetOption[] {
  const sorted = [...OFFSET_OPTIONS].sort((a, b) => a.costPerTon - b.costPerTon);
  
  if (budget) {
    return sorted.filter(option => (option.costPerTon * (footprint / 1000)) <= budget);
  }
  
  return sorted.slice(0, 3); // Return top 3 most cost-effective options
}