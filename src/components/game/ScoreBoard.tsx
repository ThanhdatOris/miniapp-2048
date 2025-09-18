"use client";

interface ScoreBoardProps {
  score?: number;
  highScore?: number;
}

export default function ScoreBoard({ score = 0, highScore = 0 }: ScoreBoardProps) {
  return (
    <div className="flex gap-3 mb-6">
      {/* Current Score */}
      <div className="flex-1 glass-card p-4 shadow-lg">
        <div className="text-center">
          <p className="text-xs font-semibold theme-text-secondary uppercase tracking-wide mb-1">
            Điểm
          </p>
          <p className="text-2xl font-bold theme-text-primary">
            {score.toLocaleString()}
          </p>
        </div>
      </div>

      {/* High Score */}
      <div className="flex-1 glass-card p-4 shadow-lg">
        <div className="text-center">
          <p className="text-xs font-semibold theme-text-secondary uppercase tracking-wide mb-1">
            Điểm cao
          </p>
          <p className="text-2xl font-bold theme-text-primary">
            {highScore.toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
}