"use client";

interface ScoreBoardProps {
  score?: number;
  highScore?: number;
}

export default function ScoreBoard({ score = 0, highScore = 0 }: ScoreBoardProps) {
  return (
    <div className="flex gap-3 mb-6">
      {/* Current Score */}
      <div className="flex-1 glass rounded-lg p-3 shadow-lg border border-white/10">
        <div className="text-center">
          <p className="text-xs font-semibold text-white/70 uppercase tracking-wide">
            Điểm
          </p>
          <p className="text-2xl font-bold text-white drop-shadow">
            {score.toLocaleString()}
          </p>
        </div>
      </div>

      {/* High Score */}
      <div className="flex-1 glass rounded-lg p-3 shadow-lg border border-white/10">
        <div className="text-center">
          <p className="text-xs font-semibold text-white/70 uppercase tracking-wide">
            Điểm cao
          </p>
          <p className="text-2xl font-bold text-white drop-shadow">
            {highScore.toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
}