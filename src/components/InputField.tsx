import React, { useState } from 'react';
import { AlertCircle, HelpCircle } from 'lucide-react';

interface InputFieldProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  type?: 'text' | 'number' | 'email';
  errors?: string[];
  tooltip?: {
    title: string;
    content: string;
    range: string;
  };
  icon?: React.ReactNode;
  helperText?: string;
  required?: boolean;
}

export default function InputField({
  label,
  value,
  onChange,
  placeholder,
  type = 'text',
  errors = [],
  tooltip,
  icon,
  helperText,
  required = false
}: InputFieldProps) {
  const [showTooltip, setShowTooltip] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const hasErrors = errors.length > 0;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let newValue = e.target.value;
    
    // For number inputs, sanitize the input
    if (type === 'number') {
      // Allow empty string, numbers, and decimal points
      if (newValue === '' || /^\d*\.?\d*$/.test(newValue)) {
        onChange(newValue);
      }
    } else {
      onChange(newValue);
    }
  };

  return (
    <div className="relative">
      <div className="flex items-center space-x-2 mb-4">
        <label className={`block text-sm font-bold ${hasErrors ? 'text-red-300' : 'text-slate-200'}`}>
          {label}
          {required && <span className="text-red-400 ml-1">*</span>}
        </label>
        
        {tooltip && (
          <div className="relative">
            <button
              type="button"
              onMouseEnter={() => setShowTooltip(true)}
              onMouseLeave={() => setShowTooltip(false)}
              className="text-slate-400 hover:text-slate-200 transition-colors"
            >
              <HelpCircle className="w-4 h-4" />
            </button>
            
            {showTooltip && (
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 z-50">
                <div className="bg-gray-900 text-white p-4 rounded-lg shadow-xl border border-gray-700 max-w-xs">
                  <h4 className="font-semibold text-sm mb-2">{tooltip.title}</h4>
                  <p className="text-xs text-gray-300 mb-2">{tooltip.content}</p>
                  <div className="text-xs text-emerald-400 font-medium">
                    Range: {tooltip.range}
                  </div>
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      <div className="relative">
        <input
          type={type}
          value={value}
          onChange={handleChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder={placeholder}
          className={`input-premium-dark w-full transition-all duration-300 ${
            hasErrors 
              ? 'border-red-400 focus:border-red-400 focus:ring-red-400/20' 
              : isFocused 
                ? 'border-emerald-400 ring-4 ring-emerald-400/20' 
                : 'border-slate-600 hover:border-slate-500'
          } ${icon ? 'pr-10' : ''}`}
          min={type === 'number' ? '0' : undefined}
          step={type === 'number' ? 'any' : undefined}
        />
        
        {icon && (
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400">
            {icon}
          </div>
        )}
        
        {hasErrors && (
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
            <AlertCircle className="w-5 h-5 text-red-400" />
          </div>
        )}
      </div>

      {/* Helper text */}
      {helperText && !hasErrors && (
        <p className="text-xs text-slate-400 mt-2 flex items-center space-x-1">
          {icon && <span className="opacity-60">{icon}</span>}
          <span>{helperText}</span>
        </p>
      )}

      {/* Error messages */}
      {hasErrors && (
        <div className="mt-2 space-y-1">
          {errors.map((error, index) => (
            <p key={index} className="text-xs text-red-400 flex items-center space-x-1">
              <AlertCircle className="w-3 h-3" />
              <span>{error}</span>
            </p>
          ))}
        </div>
      )}

      {/* Focus indicator */}
      {isFocused && !hasErrors && (
        <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-xl blur opacity-75 -z-10"></div>
      )}
    </div>
  );
}