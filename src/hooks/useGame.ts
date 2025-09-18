"use client";

import { Board, Direction, GameState } from '@/types/game';
import {
    addRandomTile,
    checkGameOver,
    checkWin,
    cloneBoard,
    createInitialBoard,
    moveBoard
} from '@/utils/gameLogic';
import { useCallback, useEffect, useState } from 'react';

interface GameHistory {
  board: Board;
  score: number;
}

const STORAGE_KEY = 'miniapp-2048-save';
const HIGH_SCORE_KEY = 'miniapp-2048-high-score';

export const useGame = () => {
  const [gameState, setGameState] = useState<GameState>(() => ({
    board: createInitialBoard(),
    tiles: [],
    score: 0,
    highScore: 0,
    isGameOver: false,
    isWon: false,
    canUndo: false,
  }));

  const [history, setHistory] = useState<GameHistory[]>([]);

  // Load game data từ localStorage
  useEffect(() => {
    const savedHighScore = localStorage.getItem(HIGH_SCORE_KEY);
    if (savedHighScore) {
      setGameState(prev => ({ ...prev, highScore: parseInt(savedHighScore, 10) }));
    }

    const savedGame = localStorage.getItem(STORAGE_KEY);
    if (savedGame) {
      try {
        const parsed = JSON.parse(savedGame);
        setGameState(prev => ({ 
          ...prev, 
          ...parsed, 
          highScore: Math.max(prev.highScore, parsed.score) 
        }));
      } catch (error) {
        console.warn('Could not load saved game:', error);
      }
    }
  }, []);

  // Auto save game
  useEffect(() => {
    if (gameState.score > 0) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({
        board: gameState.board,
        score: gameState.score,
        isGameOver: gameState.isGameOver,
        isWon: gameState.isWon,
      }));
    }

    if (gameState.score > gameState.highScore) {
      localStorage.setItem(HIGH_SCORE_KEY, gameState.score.toString());
      setGameState(prev => ({ ...prev, highScore: gameState.score }));
    }
  }, [gameState.board, gameState.score, gameState.isGameOver, gameState.isWon, gameState.highScore]);

  const move = useCallback((direction: Direction) => {
    if (gameState.isGameOver || gameState.isWon) return;

    setGameState(prevState => {
      const { newBoard, score: moveScore, moved } = moveBoard(prevState.board, direction);
      
      if (!moved) return prevState; // Không di chuyển được

      // Lưu vào history để undo
      setHistory(prev => [...prev, { board: cloneBoard(prevState.board), score: prevState.score }]);

      // Thêm tile mới
      const finalBoard = cloneBoard(newBoard);
      addRandomTile(finalBoard);

      const newScore = prevState.score + moveScore;
      const isWon = checkWin(finalBoard);
      const isGameOver = checkGameOver(finalBoard);

      return {
        ...prevState,
        board: finalBoard,
        score: newScore,
        isWon,
        isGameOver,
        canUndo: true,
      };
    });
  }, [gameState.isGameOver, gameState.isWon]);

  const restart = useCallback(() => {
    setGameState(prev => ({
      ...prev,
      board: createInitialBoard(),
      score: 0,
      isGameOver: false,
      isWon: false,
      canUndo: false,
    }));
    setHistory([]);
    localStorage.removeItem(STORAGE_KEY);
  }, []);

  const undo = useCallback(() => {
    if (history.length === 0 || gameState.isWon) return;

    const previousState = history[history.length - 1];
    setHistory(prev => prev.slice(0, -1));
    
    setGameState(prev => ({
      ...prev,
      board: cloneBoard(previousState.board),
      score: previousState.score,
      isGameOver: false,
      canUndo: history.length > 1,
    }));
  }, [history, gameState.isWon]);

  return {
    gameState,
    move,
    restart,
    undo,
  };
};