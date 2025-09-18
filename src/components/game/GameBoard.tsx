"use client";

import { useControls } from "@/hooks/useControls";
import { Direction, TileValue } from "@/types/game";

interface GameBoardProps {
  board: TileValue[][];
  onMove: (direction: Direction) => void;
  disabled?: boolean;
}

// Hàm lấy màu sắc cho mỗi giá trị tile
const getTileStyle = (value: TileValue) => {
  const styles = {
    0: "bg-gray-200 dark:bg-gray-600 text-transparent",
    2: "bg-gray-100 dark:bg-gray-500 text-gray-800 dark:text-white",
    4: "bg-gray-200 dark:bg-gray-400 text-gray-800 dark:text-white",
    8: "bg-orange-200 text-white",
    16: "bg-orange-300 text-white",
    32: "bg-orange-400 text-white",
    64: "bg-orange-500 text-white",
    128: "bg-yellow-400 text-white text-sm",
    256: "bg-yellow-500 text-white text-sm",
    512: "bg-yellow-600 text-white text-sm",
    1024: "bg-red-400 text-white text-xs",
    2048: "bg-red-500 text-white text-xs"
  };
  return styles[value] || "bg-red-600 text-white text-xs";
};

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
          bg-gray-400 dark:bg-gray-700 p-3 rounded-lg shadow-lg 
          touch-none select-none cursor-pointer
          ${disabled ? 'opacity-60 pointer-events-none' : 'hover:shadow-xl'}
          transition-all duration-200
        `}
      >
        <div className="grid grid-cols-4 gap-2">
          {board.flat().map((value, index) => {
            const row = Math.floor(index / 4);
            const col = index % 4;
            
            return (
              <div
                key={`${row}-${col}`}
                className={`
                  aspect-square rounded-md flex items-center justify-center font-bold text-lg
                  tile-animation
                  ${getTileStyle(value)}
                  ${value === 0 ? '' : 'shadow-md transform hover:scale-105'}
                `}
              >
                {value !== 0 && (
                  <span className="transition-all duration-150">
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
          <p className="text-xs text-gray-500 dark:text-gray-400 flex items-center justify-center gap-1">
            <i className="fas fa-hand-pointer text-blue-500"></i>
            Vuốt để di chuyển các ô
          </p>
        </div>

        {/* Desktop Instructions */}
        <div className="hidden sm:block">
          <div className="flex items-center justify-center gap-4 text-xs text-gray-500 dark:text-gray-400">
            {/* WASD */}
            <div className="flex items-center gap-1">
              <span>WASD:</span>
              <div className="flex gap-1">
                <kbd className="px-1.5 py-0.5 bg-gray-200 dark:bg-gray-700 rounded text-xs font-mono">W</kbd>
                <kbd className="px-1.5 py-0.5 bg-gray-200 dark:bg-gray-700 rounded text-xs font-mono">A</kbd>
                <kbd className="px-1.5 py-0.5 bg-gray-200 dark:bg-gray-700 rounded text-xs font-mono">S</kbd>
                <kbd className="px-1.5 py-0.5 bg-gray-200 dark:bg-gray-700 rounded text-xs font-mono">D</kbd>
              </div>
            </div>
            
            <span className="text-gray-400">hoặc</span>
            
            {/* Arrow Keys */}
            <div className="flex items-center gap-1">
              <span>Mũi tên:</span>
              <div className="flex gap-1">
                <kbd className="px-1.5 py-0.5 bg-gray-200 dark:bg-gray-700 rounded text-xs">
                  <i className="fas fa-arrow-up"></i>
                </kbd>
                <kbd className="px-1.5 py-0.5 bg-gray-200 dark:bg-gray-700 rounded text-xs">
                  <i className="fas fa-arrow-left"></i>
                </kbd>
                <kbd className="px-1.5 py-0.5 bg-gray-200 dark:bg-gray-700 rounded text-xs">
                  <i className="fas fa-arrow-down"></i>
                </kbd>
                <kbd className="px-1.5 py-0.5 bg-gray-200 dark:bg-gray-700 rounded text-xs">
                  <i className="fas fa-arrow-right"></i>
                </kbd>
              </div>
            </div>
          </div>
        </div>

        {/* Universal Touch Hint */}
        <div className="text-center">
          <p className="text-xs text-gray-400 dark:text-gray-500 flex items-center justify-center gap-1">
            <i className="fas fa-info-circle text-blue-400"></i>
            Khi 2 ô có cùng số chạm nhau, chúng sẽ gộp thành một!
          </p>
        </div>
      </div>
    </div>
  );
}