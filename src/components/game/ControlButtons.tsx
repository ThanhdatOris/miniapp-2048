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
        className="flex-1 glass-button text-white font-semibold py-3 px-4 rounded-lg shadow-lg transition-all duration-200 active:scale-95 flex items-center justify-center gap-2 border border-orange-400/30"
      >
        <i className="fas fa-redo-alt"></i>
        Chơi lại
      </button>

      {/* Undo Button */}
      <button
        onClick={onUndo}
        disabled={!canUndo}
        className={`flex-1 glass-button font-semibold py-3 px-4 rounded-lg shadow-lg transition-all duration-200 active:scale-95 flex items-center justify-center gap-2 ${
          canUndo
            ? 'text-white border border-blue-400/30 hover:border-blue-400/50'
            : 'text-white/40 border border-white/10 cursor-not-allowed opacity-50'
        }`}
      >
        <i className="fas fa-undo-alt"></i>
        Hoàn tác
      </button>
    </div>
  );
}