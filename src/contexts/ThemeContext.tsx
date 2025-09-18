"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Theme, ThemeContextType, ThemeMode } from '@/types/theme';
import { themes, defaultLightTheme, defaultDarkTheme } from '@/utils/themes';

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
}

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState<Theme>(defaultLightTheme);
  const [themeMode, setThemeMode] = useState<ThemeMode>('system');

  // Detect system dark mode preference
  const [systemDarkMode, setSystemDarkMode] = useState(false);

  useEffect(() => {
    // Check system preference
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setSystemDarkMode(mediaQuery.matches);

    const handler = (e: MediaQueryListEvent) => setSystemDarkMode(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  // Load saved theme from localStorage
  useEffect(() => {
    const savedThemeId = localStorage.getItem('miniapp-2048-theme');
    const savedMode = localStorage.getItem('miniapp-2048-theme-mode') as ThemeMode;

    if (savedMode) {
      setThemeMode(savedMode);
    }

    if (savedThemeId) {
      const theme = themes.find(t => t.id === savedThemeId);
      if (theme) {
        setCurrentTheme(theme);
        return;
      }
    }

    // Default to system preference
    const effectiveDarkMode = savedMode === 'system' ? systemDarkMode : savedMode === 'dark';
    setCurrentTheme(effectiveDarkMode ? defaultDarkTheme : defaultLightTheme);
  }, [systemDarkMode]);

  // Apply CSS variables to document
  useEffect(() => {
    const root = document.documentElement;
    const { colors, gradients } = currentTheme;

    // Apply CSS custom properties
    root.style.setProperty('--theme-primary', colors.primary);
    root.style.setProperty('--theme-secondary', colors.secondary);
    root.style.setProperty('--theme-accent', colors.accent);
    
    root.style.setProperty('--theme-bg-primary', colors.background.primary);
    root.style.setProperty('--theme-bg-secondary', colors.background.secondary);
    root.style.setProperty('--theme-bg-blur', colors.background.blur);
    
    root.style.setProperty('--theme-glass-bg', colors.glass.background);
    root.style.setProperty('--theme-glass-border', colors.glass.border);
    root.style.setProperty('--theme-glass-shadow', colors.glass.shadow);
    
    root.style.setProperty('--theme-text-primary', colors.text.primary);
    root.style.setProperty('--theme-text-secondary', colors.text.secondary);
    root.style.setProperty('--theme-text-muted', colors.text.muted);
    
    root.style.setProperty('--theme-gradient-bg', gradients.background);
    root.style.setProperty('--theme-gradient-glass', gradients.glass);
    root.style.setProperty('--theme-gradient-tile', gradients.tile);

    // Additional variables for glass effects
    root.style.setProperty('--glass-background', colors.glass.background);
    root.style.setProperty('--glass-border', colors.glass.border);
    root.style.setProperty('--glass-shadow', colors.glass.shadow);
    root.style.setProperty('--glass-gradient', gradients.glass);
    root.style.setProperty('--tile-gradient', gradients.tile);
    
    // Tile specific variables
    root.style.setProperty('--tile-empty', colors.tile.empty);
    root.style.setProperty('--tile-text', colors.tile.text);
    
    // Apply tile background colors
    Object.entries(colors.tile.background).forEach(([value, color]) => {
      root.style.setProperty(`--tile-${value}`, color);
    });

    // Set color scheme for browser UI
    root.style.setProperty('color-scheme', currentTheme.type);
  }, [currentTheme]);

  const setTheme = (themeId: string) => {
    const theme = themes.find(t => t.id === themeId);
    if (theme) {
      setCurrentTheme(theme);
      localStorage.setItem('miniapp-2048-theme', themeId);
    }
  };

  const toggleDarkMode = () => {
    const newMode: ThemeMode = themeMode === 'dark' ? 'light' : 'dark';
    setThemeMode(newMode);
    localStorage.setItem('miniapp-2048-theme-mode', newMode);
    
    const newTheme = newMode === 'dark' ? defaultDarkTheme : defaultLightTheme;
    setCurrentTheme(newTheme);
    localStorage.setItem('miniapp-2048-theme', newTheme.id);
  };

  const isDarkMode = currentTheme.type === 'dark';

  const value: ThemeContextType = {
    currentTheme,
    isDarkMode,
    setTheme,
    toggleDarkMode,
    availableThemes: themes,
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};