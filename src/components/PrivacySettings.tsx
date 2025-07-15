import React, { useState, useEffect } from 'react';
import { Shield, Eye, EyeOff, Download, Trash2, Settings, Lock, Globe, User } from 'lucide-react';
import { getUserSettings, saveUserSettings, hasUserConsent, setUserConsent, clearAllData, UserSettings } from '../utils/storage';

export default function PrivacySettings() {
  const [settings, setSettings] = useState<UserSettings>(getUserSettings());
  const [consent, setConsent] = useState(hasUserConsent());
  const [showDataDeletion, setShowDataDeletion] = useState(false);

  useEffect(() => {
    setSettings(getUserSettings());
    setConsent(hasUserConsent());
  }, []);

  const handleSettingChange = (key: keyof UserSettings, value: any) => {
    const newSettings = { ...settings, [key]: value };
    setSettings(newSettings);
    saveUserSettings(newSettings);
  };

  const handleConsentChange = (granted: boolean) => {
    setUserConsent(granted);
    setConsent(granted);
    if (!granted) {
      setShowDataDeletion(false);
    }
  };

  const handleDataDeletion = () => {
    if (window.confirm('Are you sure you want to delete all your data? This action cannot be undone.')) {
      clearAllData();
      setShowDataDeletion(false);
      window.location.reload();
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl p-8 text-white">
        <div className="flex items-center space-x-4 mb-4">
          <Shield className="w-8 h-8" />
          <h2 className="text-2xl font-bold">Privacy & Data Settings</h2>
        </div>
        <p className="text-blue-100">
          Control how your data is stored, processed, and used. We're committed to protecting your privacy.
        </p>
      </div>

      {/* GDPR Consent */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <Lock className="w-6 h-6 text-blue-500" />
            <h3 className="text-lg font-semibold text-gray-900">Data Processing Consent</h3>
          </div>
          <div className={`px-3 py-1 rounded-full text-sm font-medium ${
            consent ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
          }`}>
            {consent ? 'Granted' : 'Not Granted'}
          </div>
        </div>

        <p className="text-gray-600 mb-4">
          We need your consent to store and process your carbon footprint data locally on your device. 
          This enables features like history tracking, progress monitoring, and personalized recommendations.
        </p>

        <div className="space-y-3">
          <label className="flex items-center space-x-3">
            <input
              type="radio"
              name="consent"
              checked={consent}
              onChange={() => handleConsentChange(true)}
              className="w-4 h-4 text-blue-600"
            />
            <span className="text-gray-700">
              <strong>I consent</strong> to local data storage and processing for enhanced functionality
            </span>
          </label>
          
          <label className="flex items-center space-x-3">
            <input
              type="radio"
              name="consent"
              checked={!consent}
              onChange={() => handleConsentChange(false)}
              className="w-4 h-4 text-blue-600"
            />
            <span className="text-gray-700">
              <strong>I do not consent</strong> - use basic functionality only
            </span>
          </label>
        </div>

        {!consent && (
          <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
            <p className="text-yellow-800 text-sm">
              ⚠️ Without consent, you won't be able to save calculations, track history, or use advanced features.
            </p>
          </div>
        )}
      </div>

      {consent && (
        <>
          {/* Privacy Level */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-center space-x-3 mb-4">
              <Eye className="w-6 h-6 text-green-500" />
              <h3 className="text-lg font-semibold text-gray-900">Privacy Level</h3>
            </div>

            <div className="space-y-4">
              {[
                {
                  value: 'minimal',
                  label: 'Minimal',
                  description: 'Store only essential calculation data',
                  icon: <EyeOff className="w-5 h-5" />
                },
                {
                  value: 'standard',
                  label: 'Standard',
                  description: 'Include location data and usage patterns for better recommendations',
                  icon: <User className="w-5 h-5" />
                },
                {
                  value: 'full',
                  label: 'Full Features',
                  description: 'Enable all features including GPS tracking and detailed analytics',
                  icon: <Globe className="w-5 h-5" />
                }
              ].map((option) => (
                <label key={option.value} className="flex items-start space-x-3 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                  <input
                    type="radio"
                    name="privacyLevel"
                    value={option.value}
                    checked={settings.privacyLevel === option.value}
                    onChange={(e) => handleSettingChange('privacyLevel', e.target.value)}
                    className="w-4 h-4 text-blue-600 mt-1"
                  />
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      {option.icon}
                      <span className="font-medium text-gray-900">{option.label}</span>
                    </div>
                    <p className="text-sm text-gray-600">{option.description}</p>
                  </div>
                </label>
              ))}
            </div>
          </div>

          {/* Data Retention */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-center space-x-3 mb-4">
              <Settings className="w-6 h-6 text-purple-500" />
              <h3 className="text-lg font-semibold text-gray-900">Data Retention</h3>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Keep data for: {settings.dataRetention} days
                </label>
                <input
                  type="range"
                  min="30"
                  max="1095"
                  step="30"
                  value={settings.dataRetention}
                  onChange={(e) => handleSettingChange('dataRetention', Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>30 days</span>
                  <span>3 years</span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium text-gray-900">Auto-save calculations</h4>
                  <p className="text-sm text-gray-600">Automatically save calculations as you make changes</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={settings.autoSave}
                    onChange={(e) => handleSettingChange('autoSave', e.target.checked)}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium text-gray-900">GPS tracking</h4>
                  <p className="text-sm text-gray-600">Enable location-based features and automatic trip logging</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={settings.gpsTracking}
                    onChange={(e) => handleSettingChange('gpsTracking', e.target.checked)}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium text-gray-900">Notifications</h4>
                  <p className="text-sm text-gray-600">Receive reminders and achievement notifications</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={settings.notifications}
                    onChange={(e) => handleSettingChange('notifications', e.target.checked)}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
              </div>
            </div>
          </div>

          {/* Data Management */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-center space-x-3 mb-4">
              <Download className="w-6 h-6 text-indigo-500" />
              <h3 className="text-lg font-semibold text-gray-900">Data Management</h3>
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Export Format</h4>
                <div className="flex space-x-4">
                  <label className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="exportFormat"
                      value="csv"
                      checked={settings.exportFormat === 'csv'}
                      onChange={(e) => handleSettingChange('exportFormat', e.target.value)}
                      className="w-4 h-4 text-blue-600"
                    />
                    <span className="text-gray-700">CSV</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="exportFormat"
                      value="pdf"
                      checked={settings.exportFormat === 'pdf'}
                      onChange={(e) => handleSettingChange('exportFormat', e.target.value)}
                      className="w-4 h-4 text-blue-600"
                    />
                    <span className="text-gray-700">PDF</span>
                  </label>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-200">
                <button
                  onClick={() => setShowDataDeletion(true)}
                  className="flex items-center space-x-2 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
                >
                  <Trash2 className="w-4 h-4" />
                  <span>Delete All Data</span>
                </button>
              </div>
            </div>
          </div>

          {/* Data Deletion Confirmation */}
          {showDataDeletion && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
              <div className="bg-white rounded-xl p-6 max-w-md mx-4">
                <div className="flex items-center space-x-3 mb-4">
                  <Trash2 className="w-6 h-6 text-red-500" />
                  <h3 className="text-lg font-semibold text-gray-900">Delete All Data</h3>
                </div>
                
                <p className="text-gray-600 mb-6">
                  This will permanently delete all your stored calculations, history, and settings. 
                  This action cannot be undone.
                </p>
                
                <div className="flex space-x-3">
                  <button
                    onClick={handleDataDeletion}
                    className="flex-1 bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition-colors"
                  >
                    Delete Everything
                  </button>
                  <button
                    onClick={() => setShowDataDeletion(false)}
                    className="flex-1 bg-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-400 transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          )}
        </>
      )}

      {/* Privacy Information */}
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-blue-900 mb-3">Your Privacy Rights</h3>
        <ul className="space-y-2 text-blue-800">
          <li>• All data is stored locally on your device - we never send it to external servers</li>
          <li>• You can export or delete your data at any time</li>
          <li>• GPS data is only used for route calculations and is not stored permanently</li>
          <li>• No personal information is required to use this application</li>
          <li>• You can withdraw consent and delete all data at any time</li>
        </ul>
      </div>
    </div>
  );
}