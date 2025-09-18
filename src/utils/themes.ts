import { Theme } from '@/types/theme';

export const defaultLightTheme: Theme = {
  id: 'glass-light',
  name: 'Glass Light',
  type: 'light',
  colors: {
    primary: '#2563eb',
    secondary: '#7c3aed',
    accent: '#ea580c',
    background: {
      primary: '#f8fafc',
      secondary: '#ffffff',
      blur: 'rgba(248, 250, 252, 0.85)',
    },
    glass: {
      background: 'rgba(255, 255, 255, 0.4)',
      border: 'rgba(148, 163, 184, 0.3)',
      shadow: 'rgba(15, 23, 42, 0.15)',
    },
    tile: {
      empty: 'rgba(203, 213, 225, 0.3)',
      text: '#0f172a',
      background: {
        0: 'rgba(226, 232, 240, 0.4)',
        2: 'rgba(37, 99, 235, 0.15)',
        4: 'rgba(37, 99, 235, 0.25)',
        8: 'rgba(124, 58, 237, 0.25)',
        16: 'rgba(124, 58, 237, 0.35)',
        32: 'rgba(234, 88, 12, 0.3)',
        64: 'rgba(234, 88, 12, 0.4)',
        128: 'rgba(220, 38, 38, 0.35)',
        256: 'rgba(220, 38, 38, 0.45)',
        512: 'rgba(220, 38, 38, 0.55)',
        1024: 'rgba(190, 24, 93, 0.5)',
        2048: 'rgba(190, 24, 93, 0.6)',
      },
    },
    text: {
      primary: '#0f172a',
      secondary: '#475569',
      muted: '#64748b',
    },
  },
  gradients: {
    background: 'linear-gradient(135deg, #e0e7ff 0%, #fce7f3 50%, #fef3c7 100%)',
    glass: 'linear-gradient(135deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.1) 100%)',
    tile: 'linear-gradient(135deg, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0.15) 100%)',
  },
};

export const defaultDarkTheme: Theme = {
  id: 'glass-dark',
  name: 'Glass Dark',
  type: 'dark',
  colors: {
    primary: '#60a5fa',
    secondary: '#a78bfa',
    accent: '#fbbf24',
    background: {
      primary: '#0f172a',
      secondary: '#1e293b',
      blur: 'rgba(15, 23, 42, 0.8)',
    },
    glass: {
      background: 'rgba(30, 41, 59, 0.4)',
      border: 'rgba(255, 255, 255, 0.1)',
      shadow: 'rgba(0, 0, 0, 0.25)',
    },
    tile: {
      empty: 'rgba(30, 41, 59, 0.3)',
      text: '#f8fafc',
      background: {
        0: 'rgba(30, 41, 59, 0.2)',
        2: 'rgba(96, 165, 250, 0.2)',
        4: 'rgba(96, 165, 250, 0.3)',
        8: 'rgba(167, 139, 250, 0.3)',
        16: 'rgba(167, 139, 250, 0.4)',
        32: 'rgba(251, 191, 36, 0.4)',
        64: 'rgba(251, 191, 36, 0.5)',
        128: 'rgba(248, 113, 113, 0.4)',
        256: 'rgba(248, 113, 113, 0.5)',
        512: 'rgba(248, 113, 113, 0.6)',
        1024: 'rgba(244, 114, 182, 0.6)',
        2048: 'rgba(244, 114, 182, 0.7)',
      },
    },
    text: {
      primary: '#f8fafc',
      secondary: '#cbd5e1',
      muted: '#94a3b8',
    },
  },
  gradients: {
    background: 'linear-gradient(135deg, #2d1b69 0%, #11998e 100%)',
    glass: 'linear-gradient(135deg, rgba(30, 41, 59, 0.3) 0%, rgba(30, 41, 59, 0.1) 100%)',
    tile: 'linear-gradient(135deg, rgba(30, 41, 59, 0.4) 0%, rgba(30, 41, 59, 0.2) 100%)',
  },
};

export const oceanTheme: Theme = {
  id: 'ocean',
  name: 'Ocean',
  type: 'dark',
  colors: {
    primary: '#06b6d4',
    secondary: '#0891b2',
    accent: '#22d3ee',
    background: {
      primary: '#0c4a6e',
      secondary: '#075985',
      blur: 'rgba(12, 74, 110, 0.8)',
    },
    glass: {
      background: 'rgba(8, 145, 178, 0.3)',
      border: 'rgba(34, 211, 238, 0.2)',
      shadow: 'rgba(6, 182, 212, 0.25)',
    },
    tile: {
      empty: 'rgba(8, 145, 178, 0.2)',
      text: '#f0f9ff',
      background: {
        0: 'rgba(8, 145, 178, 0.1)',
        2: 'rgba(34, 211, 238, 0.2)',
        4: 'rgba(34, 211, 238, 0.3)',
        8: 'rgba(6, 182, 212, 0.3)',
        16: 'rgba(6, 182, 212, 0.4)',
        32: 'rgba(14, 165, 233, 0.4)',
        64: 'rgba(14, 165, 233, 0.5)',
        128: 'rgba(59, 130, 246, 0.4)',
        256: 'rgba(59, 130, 246, 0.5)',
        512: 'rgba(99, 102, 241, 0.6)',
        1024: 'rgba(139, 92, 246, 0.6)',
        2048: 'rgba(167, 139, 250, 0.7)',
      },
    },
    text: {
      primary: '#f0f9ff',
      secondary: '#bae6fd',
      muted: '#7dd3fc',
    },
  },
  gradients: {
    background: 'linear-gradient(135deg, #0c4a6e 0%, #164e63 50%, #155e75 100%)',
    glass: 'linear-gradient(135deg, rgba(8, 145, 178, 0.2) 0%, rgba(8, 145, 178, 0.05) 100%)',
    tile: 'linear-gradient(135deg, rgba(34, 211, 238, 0.3) 0%, rgba(34, 211, 238, 0.1) 100%)',
  },
};

export const forestTheme: Theme = {
  id: 'forest',
  name: 'Forest',
  type: 'dark',
  colors: {
    primary: '#10b981',
    secondary: '#059669',
    accent: '#34d399',
    background: {
      primary: '#064e3b',
      secondary: '#065f46',
      blur: 'rgba(6, 78, 59, 0.8)',
    },
    glass: {
      background: 'rgba(5, 150, 105, 0.3)',
      border: 'rgba(52, 211, 153, 0.2)',
      shadow: 'rgba(16, 185, 129, 0.25)',
    },
    tile: {
      empty: 'rgba(5, 150, 105, 0.2)',
      text: '#f0fdf4',
      background: {
        0: 'rgba(5, 150, 105, 0.1)',
        2: 'rgba(52, 211, 153, 0.2)',
        4: 'rgba(52, 211, 153, 0.3)',
        8: 'rgba(16, 185, 129, 0.3)',
        16: 'rgba(16, 185, 129, 0.4)',
        32: 'rgba(34, 197, 94, 0.4)',
        64: 'rgba(34, 197, 94, 0.5)',
        128: 'rgba(132, 204, 22, 0.4)',
        256: 'rgba(132, 204, 22, 0.5)',
        512: 'rgba(163, 230, 53, 0.6)',
        1024: 'rgba(196, 245, 74, 0.6)',
        2048: 'rgba(217, 249, 157, 0.7)',
      },
    },
    text: {
      primary: '#f0fdf4',
      secondary: '#bbf7d0',
      muted: '#86efac',
    },
  },
  gradients: {
    background: 'linear-gradient(135deg, #064e3b 0%, #065f46 50%, #047857 100%)',
    glass: 'linear-gradient(135deg, rgba(5, 150, 105, 0.2) 0%, rgba(5, 150, 105, 0.05) 100%)',
    tile: 'linear-gradient(135deg, rgba(52, 211, 153, 0.3) 0%, rgba(52, 211, 153, 0.1) 100%)',
  },
};

export const sunsetTheme: Theme = {
  id: 'sunset',
  name: 'Sunset',
  type: 'dark',
  colors: {
    primary: '#f97316',
    secondary: '#ea580c',
    accent: '#fb923c',
    background: {
      primary: '#7c2d12',
      secondary: '#9a3412',
      blur: 'rgba(124, 45, 18, 0.8)',
    },
    glass: {
      background: 'rgba(234, 88, 12, 0.3)',
      border: 'rgba(251, 146, 60, 0.2)',
      shadow: 'rgba(249, 115, 22, 0.25)',
    },
    tile: {
      empty: 'rgba(234, 88, 12, 0.2)',
      text: '#fff7ed',
      background: {
        0: 'rgba(234, 88, 12, 0.1)',
        2: 'rgba(251, 146, 60, 0.2)',
        4: 'rgba(251, 146, 60, 0.3)',
        8: 'rgba(249, 115, 22, 0.3)',
        16: 'rgba(249, 115, 22, 0.4)',
        32: 'rgba(245, 101, 101, 0.4)',
        64: 'rgba(245, 101, 101, 0.5)',
        128: 'rgba(239, 68, 68, 0.4)',
        256: 'rgba(239, 68, 68, 0.5)',
        512: 'rgba(220, 38, 127, 0.6)',
        1024: 'rgba(190, 24, 93, 0.6)',
        2048: 'rgba(157, 23, 77, 0.7)',
      },
    },
    text: {
      primary: '#fff7ed',
      secondary: '#fed7aa',
      muted: '#fdba74',
    },
  },
  gradients: {
    background: 'linear-gradient(135deg, #7c2d12 0%, #9a3412 50%, #c2410c 100%)',
    glass: 'linear-gradient(135deg, rgba(234, 88, 12, 0.2) 0%, rgba(234, 88, 12, 0.05) 100%)',
    tile: 'linear-gradient(135deg, rgba(251, 146, 60, 0.3) 0%, rgba(251, 146, 60, 0.1) 100%)',
  },
};

export const neonTheme: Theme = {
  id: 'neon',
  name: 'Neon',
  type: 'dark',
  colors: {
    primary: '#a855f7',
    secondary: '#9333ea',
    accent: '#c084fc',
    background: {
      primary: '#1a0b2e',
      secondary: '#16213e',
      blur: 'rgba(26, 11, 46, 0.8)',
    },
    glass: {
      background: 'rgba(147, 51, 234, 0.3)',
      border: 'rgba(192, 132, 252, 0.2)',
      shadow: 'rgba(168, 85, 247, 0.25)',
    },
    tile: {
      empty: 'rgba(147, 51, 234, 0.2)',
      text: '#faf5ff',
      background: {
        0: 'rgba(147, 51, 234, 0.1)',
        2: 'rgba(192, 132, 252, 0.2)',
        4: 'rgba(192, 132, 252, 0.3)',
        8: 'rgba(168, 85, 247, 0.3)',
        16: 'rgba(168, 85, 247, 0.4)',
        32: 'rgba(139, 92, 246, 0.4)',
        64: 'rgba(139, 92, 246, 0.5)',
        128: 'rgba(124, 58, 237, 0.4)',
        256: 'rgba(124, 58, 237, 0.5)',
        512: 'rgba(109, 40, 217, 0.6)',
        1024: 'rgba(91, 33, 182, 0.6)',
        2048: 'rgba(76, 29, 149, 0.7)',
      },
    },
    text: {
      primary: '#faf5ff',
      secondary: '#e9d5ff',
      muted: '#d8b4fe',
    },
  },
  gradients: {
    background: 'linear-gradient(135deg, #1a0b2e 0%, #16213e 50%, #0f0f23 100%)',
    glass: 'linear-gradient(135deg, rgba(147, 51, 234, 0.2) 0%, rgba(147, 51, 234, 0.05) 100%)',
    tile: 'linear-gradient(135deg, rgba(192, 132, 252, 0.3) 0%, rgba(192, 132, 252, 0.1) 100%)',
  },
};

export const themes: Theme[] = [
  defaultLightTheme, 
  defaultDarkTheme, 
  oceanTheme, 
  forestTheme, 
  sunsetTheme, 
  neonTheme
];