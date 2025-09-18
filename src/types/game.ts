export type TileValue = 0 | 2 | 4 | 8 | 16 | 32 | 64 | 128 | 256 | 512 | 1024 | 2048;

export interface Tile {
  id: string;
  value: TileValue;
  x: number;
  y: number;
  isNew?: boolean;
  isMerged?: boolean;
  previousPosition?: { x: number; y: number };
}

export type Board = TileValue[][];

export interface GameState {
  board: Board;
  tiles: Tile[];
  score: number;
  highScore: number;
  isGameOver: boolean;
  isWon: boolean;
  canUndo: boolean;
}

export type Direction = 'up' | 'down' | 'left' | 'right';

export interface GameAction {
  type: 'MOVE' | 'RESTART' | 'UNDO' | 'SET_HIGH_SCORE';
  direction?: Direction;
  highScore?: number;
}

export interface SwipeGesture {
  startX: number;
  startY: number;
  endX: number;
  endY: number;
  direction?: Direction;
}