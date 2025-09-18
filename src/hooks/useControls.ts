"use client";

import { Direction } from '@/types/game';
import { useCallback, useEffect, useRef } from 'react';

interface UseControlsProps {
  onMove: (direction: Direction) => void;
  enabled?: boolean;
}

export const useControls = ({ onMove, enabled = true }: UseControlsProps) => {
  const touchStartRef = useRef<{ x: number; y: number } | null>(null);
  const boardRef = useRef<HTMLDivElement>(null);

  // Keyboard controls (WASD + Arrow keys)
  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    if (!enabled) return;

    const { key } = event;
    let direction: Direction | null = null;

    // WASD controls
    if (key === 'w' || key === 'W' || key === 'ArrowUp') {
      direction = 'up';
    } else if (key === 's' || key === 'S' || key === 'ArrowDown') {
      direction = 'down';
    } else if (key === 'a' || key === 'A' || key === 'ArrowLeft') {
      direction = 'left';
    } else if (key === 'd' || key === 'D' || key === 'ArrowRight') {
      direction = 'right';
    }

    if (direction) {
      event.preventDefault();
      onMove(direction);
    }
  }, [onMove, enabled]);

  // Touch/Swipe controls
  const handleTouchStart = useCallback((event: TouchEvent) => {
    if (!enabled || event.touches.length !== 1) return;
    
    const touch = event.touches[0];
    touchStartRef.current = { x: touch.clientX, y: touch.clientY };
  }, [enabled]);

  const handleTouchEnd = useCallback((event: TouchEvent) => {
    if (!enabled || !touchStartRef.current || event.changedTouches.length !== 1) return;

    const touch = event.changedTouches[0];
    const deltaX = touch.clientX - touchStartRef.current.x;
    const deltaY = touch.clientY - touchStartRef.current.y;
    
    // Minimum swipe distance (30px)
    const minSwipeDistance = 30;
    const absDeltaX = Math.abs(deltaX);
    const absDeltaY = Math.abs(deltaY);

    if (Math.max(absDeltaX, absDeltaY) < minSwipeDistance) {
      touchStartRef.current = null;
      return;
    }

    let direction: Direction;
    
    // Determine direction based on larger delta
    if (absDeltaX > absDeltaY) {
      direction = deltaX > 0 ? 'right' : 'left';
    } else {
      direction = deltaY > 0 ? 'down' : 'up';
    }

    event.preventDefault();
    onMove(direction);
    touchStartRef.current = null;
  }, [onMove, enabled]);

  // Mouse/pointer controls (for desktop)
  const handlePointerDown = useCallback((event: PointerEvent) => {
    if (!enabled || event.pointerType !== 'mouse') return;
    
    touchStartRef.current = { x: event.clientX, y: event.clientY };
  }, [enabled]);

  const handlePointerUp = useCallback((event: PointerEvent) => {
    if (!enabled || !touchStartRef.current || event.pointerType !== 'mouse') return;

    const deltaX = event.clientX - touchStartRef.current.x;
    const deltaY = event.clientY - touchStartRef.current.y;
    
    const minSwipeDistance = 50; // Larger distance for mouse
    const absDeltaX = Math.abs(deltaX);
    const absDeltaY = Math.abs(deltaY);

    if (Math.max(absDeltaX, absDeltaY) < minSwipeDistance) {
      touchStartRef.current = null;
      return;
    }

    let direction: Direction;
    
    if (absDeltaX > absDeltaY) {
      direction = deltaX > 0 ? 'right' : 'left';
    } else {
      direction = deltaY > 0 ? 'down' : 'up';
    }

    onMove(direction);
    touchStartRef.current = null;
  }, [onMove, enabled]);

  // Setup event listeners
  useEffect(() => {
    const boardElement = boardRef.current;
    
    // Keyboard events (global)
    document.addEventListener('keydown', handleKeyDown);
    
    // Touch events (on board)
    if (boardElement) {
      boardElement.addEventListener('touchstart', handleTouchStart, { passive: false });
      boardElement.addEventListener('touchend', handleTouchEnd, { passive: false });
      boardElement.addEventListener('pointerdown', handlePointerDown);
      boardElement.addEventListener('pointerup', handlePointerUp);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      
      if (boardElement) {
        boardElement.removeEventListener('touchstart', handleTouchStart);
        boardElement.removeEventListener('touchend', handleTouchEnd);
        boardElement.removeEventListener('pointerdown', handlePointerDown);
        boardElement.removeEventListener('pointerup', handlePointerUp);
      }
    };
  }, [handleKeyDown, handleTouchStart, handleTouchEnd, handlePointerDown, handlePointerUp]);

  return { boardRef };
};