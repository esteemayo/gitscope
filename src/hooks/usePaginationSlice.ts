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
  const [visibleCount, setVisibleCount] = useState(options.initialCount ?? 6);

  const INITIAL_COUNT = options.initialCount ?? 6;
  const STEPS = options.step ?? 6;

  const total = items?.length ?? 0;

  const showMore = () => {
    setVisibleCount((prev) => Math.min(total, prev + STEPS));
  };

  const showLess = () => {
    setVisibleCount(INITIAL_COUNT);
  };

  const visibleItems = useMemo(() => {
    if (!items) return [];
    return items.slice(0, visibleCount);
  }, [visibleCount, items]);

  const isExpanded = visibleCount >= total;
  const canExpand = total > INITIAL_COUNT;

  return {
    canExpand,
    isExpanded,
    visibleCount,
    showLess,
    showMore,
    visibleItems,
  };
};
