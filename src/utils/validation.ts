export interface ValidationRule {
  required?: boolean;
  min?: number;
  max?: number;
  type?: 'number' | 'string' | 'email';
  pattern?: RegExp;
  custom?: (value: any) => string | null;
}

export interface ValidationResult {
  isValid: boolean;
  errors: string[];
}

export function validateInput(value: any, rules: ValidationRule): ValidationResult {
  const errors: string[] = [];

  // Required check
  if (rules.required && (value === null || value === undefined || value === '')) {
    errors.push('This field is required');
    return { isValid: false, errors };
  }

  // Skip other validations if value is empty and not required
  if (!rules.required && (value === null || value === undefined || value === '')) {
    return { isValid: true, errors: [] };
  }

  // Type validation
  if (rules.type === 'number') {
    const numValue = Number(value);
    if (isNaN(numValue)) {
      errors.push('Must be a valid number');
    } else {
      // Min/Max validation for numbers
      if (rules.min !== undefined && numValue < rules.min) {
        errors.push(`Must be at least ${rules.min}`);
      }
      if (rules.max !== undefined && numValue > rules.max) {
        errors.push(`Must be no more than ${rules.max}`);
      }
    }
  }

  // Pattern validation
  if (rules.pattern && typeof value === 'string') {
    if (!rules.pattern.test(value)) {
      errors.push('Invalid format');
    }
  }

  // Custom validation
  if (rules.custom) {
    const customError = rules.custom(value);
    if (customError) {
      errors.push(customError);
    }
  }

  return {
    isValid: errors.length === 0,
    errors
  };
}

// Predefined validation rules for carbon calculator
export const VALIDATION_RULES = {
  carKm: {
    type: 'number' as const,
    min: 0,
    max: 10000,
    custom: (value: number) => {
      if (value > 5000) return 'Unusually high monthly driving distance. Please verify.';
      return null;
    }
  },
  electricityKwh: {
    type: 'number' as const,
    min: 0,
    max: 5000,
    custom: (value: number) => {
      if (value > 2000) return 'Very high electricity usage. Please check your bill.';
      return null;
    }
  },
  heatingKwh: {
    type: 'number' as const,
    min: 0,
    max: 3000
  },
  publicTransportKm: {
    type: 'number' as const,
    min: 0,
    max: 2000
  },
  flightKm: {
    type: 'number' as const,
    min: 0,
    max: 50000,
    custom: (value: number) => {
      if (value > 20000) return 'High flight distance. Consider carbon offsets.';
      return null;
    }
  },
  waste: {
    type: 'number' as const,
    min: 0,
    max: 200,
    custom: (value: number) => {
      if (value > 100) return 'High waste production. Consider reduction strategies.';
      return null;
    }
  }
};

// Input sanitization
export function sanitizeNumericInput(value: string): number {
  // Remove non-numeric characters except decimal point
  const cleaned = value.replace(/[^0-9.]/g, '');
  
  // Handle multiple decimal points
  const parts = cleaned.split('.');
  if (parts.length > 2) {
    return parseFloat(parts[0] + '.' + parts.slice(1).join(''));
  }
  
  const num = parseFloat(cleaned);
  return isNaN(num) ? 0 : Math.max(0, num); // Ensure non-negative
}

// Tooltip content for input fields
export const INPUT_TOOLTIPS = {
  carKm: {
    title: 'Monthly Car Usage',
    content: 'Enter kilometers driven per month (0-10,000). Average: 1,000-1,500 km/month',
    range: '0 - 10,000 km'
  },
  electricityKwh: {
    title: 'Monthly Electricity',
    content: 'Check your electricity bill for kWh usage. Average household: 300-900 kWh/month',
    range: '0 - 5,000 kWh'
  },
  heatingKwh: {
    title: 'Monthly Heating',
    content: 'Gas, oil, or electric heating consumption. Varies by season and home size',
    range: '0 - 3,000 kWh'
  },
  publicTransportKm: {
    title: 'Public Transport',
    content: 'Bus, train, metro distance per month. Urban average: 200-800 km/month',
    range: '0 - 2,000 km'
  },
  flightKm: {
    title: 'Flight Distance',
    content: 'Total flight kilometers per month. Include round trips. Domestic: ~1,000km, International: ~8,000km',
    range: '0 - 50,000 km'
  },
  waste: {
    title: 'Monthly Waste',
    content: 'Household waste in kg/month. Average: 30-60 kg per person',
    range: '0 - 200 kg'
  }
};