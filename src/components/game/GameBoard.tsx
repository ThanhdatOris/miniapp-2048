"use client";

import { useControls } from "@/hooks/useControls";
import { Direction, TileValue } from "@/types/game";
import { getTileClass, getTileTextClass } from "@/utils/tileStyles";

interface GameBoardProps {
  board: TileValue[][];
  onMove: (direction: Direction) => void;
  disabled?: boolean;
}

export default function GameBoard({ board, onMove, disabled = false }: GameBoardProps) {
  const { boardRef } = useControls({ 
    onMove, 
    enabled: !disabled 
  });

  return (
    <div className="relative">
      {/* Game Board Container */}
      <div 
        ref={boardRef}
        className={`
          game-board p-4 touch-none select-none cursor-pointer
          ${disabled ? 'disabled' : ''}
        `}
      >
        <div className="grid grid-cols-4 gap-2 sm:gap-3 lg:gap-4 w-full max-w-none">
          {board.flat().map((value, index) => {
            const row = Math.floor(index / 4);
            const col = index % 4;
            
            return (
              <div
                key={`${row}-${col}`}
                className={`
                  game-tile ${getTileClass(value)} ${getTileTextClass(value)}
                  ${value === 0 ? '' : 'tile-pop'}
                `}
              >
                {value !== 0 && (
                  <span className="tile-text transition-all duration-150">
                    {value}
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Controls Instructions */}
      <div className="mt-4 space-y-2">
        {/* Mobile Instructions */}
        <div className="block sm:hidden text-center">
          <p className="text-xs theme-text-muted flex items-center justify-center gap-1">
            <i className="fas fa-hand-pointer theme-primary-color"></i>
            Vuốt để di chuyển các ô
          </p>
        </div>

        {/* Desktop Instructions */}
        <div className="hidden sm:block">
          <div className="flex items-center justify-center gap-4 text-xs theme-text-muted">
            {/* WASD */}
            <div className="flex items-center gap-1">
              <span>WASD:</span>
              <div className="flex gap-1">
                <kbd className="glass-button px-1.5 py-0.5 text-xs font-mono">W</kbd>
                <kbd className="glass-button px-1.5 py-0.5 text-xs font-mono">A</kbd>
                <kbd className="glass-button px-1.5 py-0.5 text-xs font-mono">S</kbd>
                <kbd className="glass-button px-1.5 py-0.5 text-xs font-mono">D</kbd>
              </div>
            </div>
            
            <span className="theme-text-muted">hoặc</span>
            
            {/* Arrow Keys */}
            <div className="flex items-center gap-1">
              <span>Mũi tên:</span>
              <div className="flex gap-1">
                <kbd className="glass-button px-1.5 py-0.5 text-xs">
                  <i className="fas fa-arrow-up"></i>
                </kbd>
                <kbd className="glass-button px-1.5 py-0.5 text-xs">
                  <i className="fas fa-arrow-left"></i>
                </kbd>
                <kbd className="glass-button px-1.5 py-0.5 text-xs">
                  <i className="fas fa-arrow-down"></i>
                </kbd>
                <kbd className="glass-button px-1.5 py-0.5 text-xs">
                  <i className="fas fa-arrow-right"></i>
                </kbd>
              </div>
            </div>
          </div>
        </div>

        {/* Universal Touch Hint */}
        <div className="text-center">
          <p className="text-xs theme-text-muted flex items-center justify-center gap-1">
            <i className="fas fa-info-circle theme-primary-color"></i>
            Gộp 2 ô giống nhau để tạo 1 ô mới!
          </p>
        </div>
      </div>
    </div>
  );
}