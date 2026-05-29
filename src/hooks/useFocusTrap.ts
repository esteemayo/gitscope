'use client';

import { RefObject, useLayoutEffect } from 'react';

export const useFocusTrap = <T extends HTMLElement>(
  containerRef: RefObject<T | null>,
  isActive: boolean,
): void => {
  useLayoutEffect(() => {
    if (!isActive) return;

    const container = containerRef.current as HTMLElement;
    if (!container) return;

    const getFocusable = (): HTMLElement[] => {
      return Array.from(
        container.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), input, textarea, select, [tabindex]:not([tabindex="-1"])',
        ),
      ).filter((el) => !el.hasAttribute('disabled'));
    }

    const focusedElements = getFocusable();
    if (focusedElements.length === 0) return;

    const first = focusedElements[0];
    const last = focusedElements[focusedElements.length - 1];

    if (!first || !last) return;

    first.focus();

    const trapFocus = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;

      const currentFocus = document.activeElement as HTMLElement;

      if (e.shiftKey) {
        if (currentFocus === first || !container.contains(currentFocus)) {
          e.preventDefault();
          last.focus();
        }
      } else {
        if (currentFocus === last || !container.contains(currentFocus)) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener('keydown', trapFocus);
    return () => document.removeEventListener('keydown', trapFocus);
  }, [containerRef, isActive]);
};
