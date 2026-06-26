'use client';

import { useMemo, useState } from 'react';

interface UsePaginationSliceOptions {
  step?: number;
  initialCount?: number;
}

export const usePaginationSlice = <T>(
  items: T[] | undefined,
  options: UsePaginationSliceOptions,
) => {
  const [isVisibleCount, setIsVisibleCount] = useState(4);

  const INITIAL_COUNT = options.initialCount ?? 4;
  const STEPS = options.step ?? 4;

  const total = items?.length ?? 0;

  const showMore = () => {
    setIsVisibleCount((prev) => Math.min(total, prev + STEPS));
  };

  const showLess = () => {
    setIsVisibleCount(INITIAL_COUNT);
  };

  const visibleItems = useMemo(() => {
    if (!items) return [];
    return items.slice(0, isVisibleCount);
  }, [isVisibleCount, items]);

  const isExpanded = isVisibleCount >= total;
  const canExpand = total > INITIAL_COUNT;

  return {
    canExpand,
    isExpanded,
    isVisibleCount,
    showLess,
    showMore,
    visibleItems,
  };
};
