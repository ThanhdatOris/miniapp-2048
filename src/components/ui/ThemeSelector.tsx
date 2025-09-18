'use client';

import { useTheme } from '@/contexts/ThemeContext';
import React, { useState } from 'react';

export const ThemeSelector: React.FC = () => {
  const { currentTheme, availableThemes, setTheme, isDarkMode, toggleDarkMode } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const getThemePreview = () => {
    return (
      <div className="w-8 h-8 rounded-lg border theme-preview flex-shrink-0">
        <div className="absolute bottom-0 right-0 w-3 h-3 rounded-tl-lg theme-preview-accent" />
      </div>
    );
  };

  return (
    <div className="relative">
      {/* Theme Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="glass-button p-3 flex items-center gap-3 min-w-[120px]"
        aria-label="Select theme"
      >
        {getThemePreview()}
        <span className="text-sm font-medium theme-text-primary">
          {currentTheme.name}
        </span>
        <i className={`fas fa-chevron-${isOpen ? 'up' : 'down'} text-xs theme-text-secondary`} />
      </button>

      {/* Theme Dropdown */}
      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-64 glass-card p-4 z-50">
          <div className="space-y-3">
            {/* Dark Mode Toggle */}
            <div className="flex items-center justify-between pb-3 border-b theme-border">
              <span className="text-sm font-medium theme-text-primary">
                Dark Mode
              </span>
              <button
                onClick={toggleDarkMode}
                className={`w-12 h-6 rounded-full transition-colors duration-200 relative ${
                  isDarkMode ? 'theme-toggle-active' : 'theme-toggle-inactive'
                }`}
                aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
              >
                <div 
                  className={`w-5 h-5 bg-white rounded-full transition-transform duration-200 absolute top-0.5 ${
                    isDarkMode ? 'translate-x-6' : 'translate-x-0.5'
                  }`}
                />
              </button>
            </div>

            {/* Theme List */}
            <div className="space-y-2">
              <h4 className="text-sm font-medium mb-2 theme-text-secondary">
                Color Themes
              </h4>
              <div className="grid gap-2">
                {availableThemes.map((theme) => (
                  <button
                    key={theme.id}
                    onClick={() => {
                      setTheme(theme.id);
                      setIsOpen(false);
                    }}
                    className={`flex items-center gap-3 p-2 rounded-lg transition-all duration-200 ${
                      currentTheme.id === theme.id 
                        ? 'glass-raised' 
                        : 'glass-subtle hover:glass-depth-1'
                    }`}
                  >
                    {getThemePreview()}
                    <div className="flex-1 text-left">
                      <div className="text-sm font-medium theme-text-primary">
                        {theme.name}
                      </div>
                      <div className="text-xs theme-text-muted">
                        {theme.type === 'dark' ? 'Dark' : 'Light'} theme
                      </div>
                    </div>
                    {currentTheme.id === theme.id && (
                      <i className="fas fa-check text-sm theme-primary-color" />
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Backdrop to close dropdown */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
};