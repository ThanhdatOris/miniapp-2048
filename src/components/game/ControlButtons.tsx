"use client";

interface ControlButtonsProps {
  onRestart?: () => void;
  onUndo?: () => void;
  canUndo?: boolean;
}

export default function ControlButtons({ 
  onRestart, 
  onUndo, 
  canUndo = false 
}: ControlButtonsProps) {
  return (
    <div className="flex gap-3">
      {/* Restart Button */}
      <button
        onClick={onRestart}
        className="flex-1 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-4 rounded-lg shadow-md transition-colors duration-200 active:scale-95 flex items-center justify-center gap-2"
      >
        <i className="fas fa-redo-alt"></i>
        Chơi lại
      </button>

      {/* Undo Button */}
      <button
        onClick={onUndo}
        disabled={!canUndo}
        className={`flex-1 font-semibold py-3 px-4 rounded-lg shadow-md transition-all duration-200 active:scale-95 flex items-center justify-center gap-2 ${
          canUndo
            ? 'bg-blue-500 hover:bg-blue-600 text-white'
            : 'bg-gray-300 dark:bg-gray-600 text-gray-500 dark:text-gray-400 cursor-not-allowed'
        }`}
      >
        <i className="fas fa-undo-alt"></i>
        Hoàn tác
      </button>
    </div>
  );
}