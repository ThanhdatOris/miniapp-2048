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
        className="flex-1 glass-button font-semibold py-3 px-4 rounded-lg shadow-lg transition-all duration-200 active:scale-95 flex items-center justify-center gap-2"
      >
        <i className="fas fa-redo-alt theme-primary-color"></i>
        <span className="theme-text-primary">Chơi lại</span>
      </button>

      {/* Undo Button */}
      <button
        onClick={onUndo}
        disabled={!canUndo}
        className={`flex-1 glass-button font-semibold py-3 px-4 rounded-lg shadow-lg transition-all duration-200 active:scale-95 flex items-center justify-center gap-2 ${
          canUndo
            ? 'opacity-100 cursor-pointer'
            : 'opacity-50 cursor-not-allowed'
        }`}
        aria-label="Hoàn tác nước đi"
      >
        <i className={`fas fa-undo-alt ${canUndo ? 'theme-primary-color' : 'theme-text-muted'}`}></i>
        <span className={canUndo ? 'theme-text-primary' : 'theme-text-muted'}>Hoàn tác</span>
      </button>
    </div>
  );
}