import { TileValue } from "@/types/game";

// Enhanced Glassmorphism tile styles
export const getTileClass = (value: TileValue, isNew?: boolean, isMerged?: boolean) => {
  let baseClass = '';
  let animationClass = '';
  
  // Base tile class
  if (value === 0) {
    baseClass = 'tile-empty';
  } else {
    baseClass = `tile-${value}`;
  }
  
  // Animation classes
  if (isNew) {
    animationClass += ' tile-pop';
  }
  if (isMerged) {
    animationClass += ' tile-merge';
  }
  
  return `${baseClass}${animationClass}`.trim();
};

export const getTileTextClass = (value: TileValue) => {
  if (value >= 1024) return 'text-xs';
  if (value >= 128) return 'text-sm';
  if (value >= 16) return 'text-lg';
  return 'text-xl';
};

export const shouldShowGlow = (value: TileValue) => {
  return value === 2048;
};

// Legacy glassmorphism function for backward compatibility
export const getGlassTileStyle = (value: TileValue, isDarkMode: boolean = false) => {
  if (value === 0) {
    return "bg-white/10 backdrop-blur-sm border border-white/20 text-transparent";
  }

  const baseClasses = "backdrop-blur-md border text-white font-bold shadow-lg";
  
  const tileStyles: Record<TileValue, string> = {
    0: "",
    2: `${baseClasses} bg-blue-400/30 border-blue-300/40`,
    4: `${baseClasses} bg-blue-500/40 border-blue-400/50`,
    8: `${baseClasses} bg-purple-400/40 border-purple-300/50`,
    16: `${baseClasses} bg-purple-500/50 border-purple-400/60`,
    32: `${baseClasses} bg-amber-400/50 border-amber-300/60`,
    64: `${baseClasses} bg-amber-500/60 border-amber-400/70`,
    128: `${baseClasses} bg-red-400/50 border-red-300/60 text-sm`,
    256: `${baseClasses} bg-red-500/60 border-red-400/70 text-sm`,
    512: `${baseClasses} bg-red-600/70 border-red-500/80 text-sm`,
    1024: `${baseClasses} bg-pink-500/70 border-pink-400/80 text-xs`,
    2048: `${baseClasses} bg-pink-600/80 border-pink-500/90 text-xs animate-pulse`,
  };

  return tileStyles[value] || `${baseClasses} bg-purple-700/80 border-purple-600/90 text-xs`;
};