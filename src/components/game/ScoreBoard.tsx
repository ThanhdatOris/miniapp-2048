"use client";

interface ScoreBoardProps {
  score?: number;
  highScore?: number;
}

export default function ScoreBoard({ score = 0, highScore = 0 }: ScoreBoardProps) {
  return (
    <div className="flex gap-3 mb-6">
      {/* Current Score */}
      <div className="flex-1 bg-white dark:bg-gray-700 rounded-lg p-3 shadow-md">
        <div className="text-center">
          <p className="text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wide">
            Điểm
          </p>
          <p className="text-2xl font-bold text-gray-800 dark:text-white">
            {score.toLocaleString()}
          </p>
        </div>
      </div>

      {/* High Score */}
      <div className="flex-1 bg-white dark:bg-gray-700 rounded-lg p-3 shadow-md">
        <div className="text-center">
          <p className="text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wide">
            Điểm cao
          </p>
          <p className="text-2xl font-bold text-gray-800 dark:text-white">
            {highScore.toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
}