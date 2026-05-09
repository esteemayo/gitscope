'use client';

import { useEffect, useRef } from 'react';

type EscapeKeyType = {
  isEnabled?: boolean;
  onEscape(): void;
};

export const useEscapeKey = ({ isEnabled, onEscape }: EscapeKeyType): void => {
  const handlerRef = useRef(onEscape);

  useEffect(() => {
    handlerRef.current = onEscape;
  }, [onEscape]);

  useEffect(() => {
    const handleEscKey = (e: KeyboardEvent) => {
      if (!isEnabled) return;

      if (e.key === 'Escape' || e.code === 'Escape') {
        handlerRef.current();
      }
    };

    document.addEventListener('keydown', handleEscKey);
    return () => document.removeEventListener('keydown', handleEscKey);
  }, [isEnabled, onEscape]);
};
