export interface ThemeColors {
  primary: string;
  secondary: string;
  accent: string;
  background: {
    primary: string;
    secondary: string;
    blur: string;
  };
  glass: {
    background: string;
    border: string;
    shadow: string;
  };
  tile: {
    empty: string;
    text: string;
    background: Record<number, string>;
  };
  text: {
    primary: string;
    secondary: string;
    muted: string;
  };
}

export interface Theme {
  id: string;
  name: string;
  type: 'light' | 'dark';
  colors: ThemeColors;
  gradients: {
    background: string;
    glass: string;
    tile: string;
  };
}

export interface ThemeContextType {
  currentTheme: Theme;
  isDarkMode: boolean;
  setTheme: (themeId: string) => void;
  toggleDarkMode: () => void;
  availableThemes: Theme[];
}

export type ThemeMode = 'light' | 'dark' | 'system';