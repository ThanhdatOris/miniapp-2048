
'use client';

import ControlButtons from '@/components/game/ControlButtons';
import GameBoard from '@/components/game/GameBoard';
import ScoreBoard from '@/components/game/ScoreBoard';
import { ThemeSelector } from '@/components/ui/ThemeSelector';
import { useTheme } from '@/contexts/ThemeContext';
import { useGame } from '@/hooks/useGame';
import { useState } from 'react';

export default function Home() {
  const { gameState, move, restart, undo } = useGame();
  const { toggleDarkMode, isDarkMode } = useTheme();
  const [showControls, setShowControls] = useState(false);

  return (
    <div className="min-h-screen p-4 flex flex-col items-center justify-center relative bg-gradient">
      {/* Floating Glass Orbs Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 glass-subtle rounded-full animate-pulse opacity-30" />
        <div className="absolute top-1/3 right-20 w-24 h-24 glass-subtle rounded-full animate-pulse opacity-20 delay-1000" />
        <div className="absolute bottom-32 left-1/4 w-40 h-40 glass-subtle rounded-full animate-pulse opacity-25 delay-500" />
        <div className="absolute bottom-20 right-10 w-28 h-28 glass-subtle rounded-full animate-pulse opacity-30 delay-700" />
      </div>

      {/* Top Controls */}
      <div className="w-full max-w-md mb-6 flex justify-between items-center">
        <ThemeSelector />
        
        <div className="flex gap-2">
          <button
            onClick={toggleDarkMode}
            className="glass-button p-3"
            aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
          >
            <i className={`fas ${isDarkMode ? 'fa-sun' : 'fa-moon'} text-lg theme-text-primary`} />
          </button>
          
          <button
            onClick={() => setShowControls(!showControls)}
            className="glass-button p-3 hidden lg:block"
            aria-label="Toggle control hints"
          >
            <i className="fas fa-gamepad text-lg theme-text-primary" />
          </button>
        </div>
      </div>

      {/* Game Container */}
      <div className="glass-card p-4 sm:p-6 space-y-4 sm:space-y-6 w-full max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl mx-auto">
        {/* Title */}
        <div className="text-center">
          <h1 className="text-4xl font-bold theme-text-primary mb-2">2048</h1>
          <p className="theme-text-secondary text-sm">
            Join the tiles, get to 2048!
          </p>
        </div>

        {/* Score Board */}
        <ScoreBoard score={gameState.score} highScore={gameState.highScore} />

        {/* Game Board */}
        <div className="flex justify-center items-center w-full">
          <GameBoard board={gameState.board} onMove={move} />
        </div>

        {/* Game Status */}
        {(gameState.isGameOver || gameState.isWon) && (
          <div className="glass-strong p-4 text-center space-y-3">
            <h2 className="text-2xl font-bold theme-text-primary">
              {gameState.isWon ? '🎉 You Win!' : '💥 Game Over!'}
            </h2>
            <p className="theme-text-secondary text-sm">
              {gameState.isWon ? 'Congratulations! You reached 2048!' : 'No more moves available.'}
            </p>
            <button
              onClick={restart}
              className="glass-button px-6 py-2 text-sm font-medium theme-text-primary"
            >
              Try Again
            </button>
          </div>
        )}

        {/* Controls - Always visible on mobile, toggleable on desktop */}
        <div className="block lg:hidden">
          <ControlButtons onRestart={restart} onUndo={undo} canUndo={gameState.canUndo} />
        </div>
        {showControls && (
          <div className="hidden lg:block">
            <ControlButtons onRestart={restart} onUndo={undo} canUndo={gameState.canUndo} />
          </div>
        )}
      </div>
    </div>
  );
}
