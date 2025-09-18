
    "use client";

import ControlButtons from "@/components/game/ControlButtons";
import GameBoard from "@/components/game/GameBoard";
import ScoreBoard from "@/components/game/ScoreBoard";
import { useGame } from "@/hooks/useGame";
import { Direction } from "@/types/game";

export default function Home() {
  const { gameState, move, restart, undo } = useGame();

  const handleMove = (direction: Direction) => {
    move(direction);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-100 to-orange-200 dark:from-gray-900 dark:to-gray-800 p-4">
      <div className="max-w-md mx-auto">
        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-2">
            2048
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-sm">
            Kết hợp các ô để đạt đến ô 2048!
          </p>
        </div>

        {/* Score Board */}
        <ScoreBoard 
          score={gameState.score} 
          highScore={gameState.highScore} 
        />

        {/* Game Board */}
        <div className="mb-6">
          <GameBoard 
            board={gameState.board} 
            onMove={handleMove}
            disabled={gameState.isGameOver || gameState.isWon}
          />
        </div>

        {/* Control Buttons */}
        <ControlButtons 
          onRestart={restart}
          onUndo={undo}
          canUndo={gameState.canUndo}
        />

        {/* Game Status */}
        {gameState.isWon && (
          <div className="mt-4 p-4 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-lg text-center shadow-lg animate-pulse">
            <div className="text-2xl mb-2">🎉</div>
            <p className="font-bold">Chúc mừng! Bạn đã đạt đến 2048!</p>
            <p className="text-sm mt-1">Bạn có thể tiếp tục chơi để đạt điểm cao hơn!</p>
          </div>
        )}

        {gameState.isGameOver && !gameState.isWon && (
          <div className="mt-4 p-4 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 rounded-lg text-center shadow-lg">
            <div className="text-2xl mb-2">😞</div>
            <p className="font-bold">Game Over!</p>
            <p className="text-sm mt-1">Không còn nước đi nào. Thử lại nhé!</p>
          </div>
        )}

        {/* Instructions */}
        <div className="text-center mt-6">
          <p className="text-xs text-gray-500 dark:text-gray-400">
            Vuốt để di chuyển các ô. Khi 2 ô có cùng số chạm nhau, chúng sẽ gộp thành một!
          </p>
        </div>
      </div>
    </div>
  );
}
