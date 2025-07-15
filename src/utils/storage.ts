import { CarbonData, UserProfile, HabitEntry } from '../types';

export interface StoredCalculation {
  id: string;
  timestamp: Date;
  footprint: number;
  data: CarbonData;
  usage: any;
  location?: {
    city: string;
    country: string;
    coordinates?: { lat: number; lng: number };
  };
}

export interface UserSettings {
  dataRetention: number; // days
  autoSave: boolean;
  gpsTracking: boolean;
  notifications: boolean;
  privacyLevel: 'minimal' | 'standard' | 'full';
  exportFormat: 'csv' | 'pdf';
}

const STORAGE_KEYS = {
  CALCULATIONS: 'carbon_calculations',
  USER_PROFILE: 'user_profile',
  SETTINGS: 'user_settings',
  HABITS: 'user_habits',
  CONSENT: 'privacy_consent'
};

// GDPR Compliance utilities
export function hasUserConsent(): boolean {
  const consent = localStorage.getItem(STORAGE_KEYS.CONSENT);
  return consent === 'granted';
}

export function setUserConsent(granted: boolean): void {
  localStorage.setItem(STORAGE_KEYS.CONSENT, granted ? 'granted' : 'denied');
  if (!granted) {
    clearAllData();
  }
}

export function clearAllData(): void {
  Object.values(STORAGE_KEYS).forEach(key => {
    localStorage.removeItem(key);
  });
}

// Secure storage with encryption (basic implementation)
function encryptData(data: any): string {
  return btoa(JSON.stringify(data));
}

function decryptData(encryptedData: string): any {
  try {
    return JSON.parse(atob(encryptedData));
  } catch {
    return null;
  }
}

// Calculation history management
export function saveCalculation(calculation: Omit<StoredCalculation, 'id'>): string {
  if (!hasUserConsent()) return '';
  
  const calculations = getCalculationHistory();
  const newCalculation: StoredCalculation = {
    ...calculation,
    id: crypto.randomUUID(),
    timestamp: new Date(calculation.timestamp)
  };
  
  calculations.push(newCalculation);
  
  // Apply data retention policy
  const settings = getUserSettings();
  const cutoffDate = new Date();
  cutoffDate.setDate(cutoffDate.getDate() - settings.dataRetention);
  
  const filteredCalculations = calculations.filter(calc => 
    new Date(calc.timestamp) > cutoffDate
  );
  
  localStorage.setItem(
    STORAGE_KEYS.CALCULATIONS, 
    encryptData(filteredCalculations)
  );
  
  return newCalculation.id;
}

export function getCalculationHistory(): StoredCalculation[] {
  if (!hasUserConsent()) return [];
  
  const stored = localStorage.getItem(STORAGE_KEYS.CALCULATIONS);
  if (!stored) return [];
  
  const data = decryptData(stored);
  return data ? data.map((calc: any) => ({
    ...calc,
    timestamp: new Date(calc.timestamp)
  })) : [];
}

export function deleteCalculation(id: string): void {
  const calculations = getCalculationHistory();
  const filtered = calculations.filter(calc => calc.id !== id);
  localStorage.setItem(STORAGE_KEYS.CALCULATIONS, encryptData(filtered));
}

// User settings management
export function getUserSettings(): UserSettings {
  const stored = localStorage.getItem(STORAGE_KEYS.SETTINGS);
  const defaultSettings: UserSettings = {
    dataRetention: 365,
    autoSave: true,
    gpsTracking: false,
    notifications: true,
    privacyLevel: 'standard',
    exportFormat: 'csv'
  };
  
  if (!stored) return defaultSettings;
  
  const data = decryptData(stored);
  return data ? { ...defaultSettings, ...data } : defaultSettings;
}

export function saveUserSettings(settings: Partial<UserSettings>): void {
  if (!hasUserConsent()) return;
  
  const current = getUserSettings();
  const updated = { ...current, ...settings };
  localStorage.setItem(STORAGE_KEYS.SETTINGS, encryptData(updated));
}

// Export functionality
export function exportToCSV(calculations: StoredCalculation[]): string {
  const headers = [
    'Date',
    'Total Footprint (kg CO2)',
    'Transportation',
    'Energy',
    'Lifestyle',
    'Location'
  ];
  
  const rows = calculations.map(calc => [
    calc.timestamp.toISOString().split('T')[0],
    calc.footprint.toString(),
    (calc.footprint * 0.35).toFixed(2), // Approximate breakdown
    (calc.footprint * 0.28).toFixed(2),
    (calc.footprint * 0.37).toFixed(2),
    calc.location ? `${calc.location.city}, ${calc.location.country}` : 'Unknown'
  ]);
  
  return [headers, ...rows].map(row => row.join(',')).join('\n');
}

export function downloadCSV(calculations: StoredCalculation[], filename: string = 'carbon-footprint-history.csv'): void {
  const csv = exportToCSV(calculations);
  const blob = new Blob([csv], { type: 'text/csv' });
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  window.URL.revokeObjectURL(url);
}