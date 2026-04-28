'use client';

import { useRef } from 'react';

import ArrowUpRight from '../icons/ArrowUpRight';
import ArrowDownRight from '../icons/ArrowDownRight';

import { StatsCardProps } from '@/types/stats.card.type';
import '../../styles/components/StatsCard.scss';

const StatsCard = ({
  label,
  value,
  delta,
  icon,
  hint,
  filter,
  sort,
  onSort,
}: StatsCardProps) => {
  const refs = useRef<HTMLButtonElement | null>(null);

  const active = sort === filter;

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === 'ArrowRight') {
      e.preventDefault()
      onSort((prev) => {
        if (prev === 'stars') return 'forks';
        if (prev === 'forks') return 'quality';
        if (prev === 'quality') return 'stars';

        return prev;
      });
    }

    if (e.key === 'ArrowLeft') {
      e.preventDefault()
      onSort((prev) => {
        if (prev === 'stars') return 'quality';
        if (prev === 'quality') return 'forks';
        if (prev === 'forks') return 'stars';

        return prev;
      });
    }
  };

  return (
    <button
      ref={refs}
      type='button'
      onClick={() => onSort(filter)}
      onKeyDown={handleKeyDown}
      className={active ? 'stats-card active' : 'stats-card'}
    >
      <article className='stats-card__wrapper'>
        <header className='stats-card__header'>
          <span className='stats-card__header--icon'>{icon}</span>
          <h3 className='stats-card__header--label'>{label}</h3>
        </header>

        <div className='stats-card__body'>{value}</div>

        <footer className='stats-card__footer'>
          {typeof delta !== 'undefined' && (
            <span className={`stats-card__footer--delta ${delta > 0 ? 'green' : 'red'}`}>
              {delta > 0 ? <ArrowUpRight /> : <ArrowDownRight />}
              {delta > 0 ? '+' : '-'}{delta}%
            </span>
          )}

          {hint && <span className='stats-card__footer--hint'>{hint}</span>}
        </footer>
      </article>
    </button>
  );
};

export default StatsCard;
