'use client';

import clsx from 'clsx';
import { Clock3, ExternalLink, GitFork } from 'lucide-react';

import { StaleRepositoryCardProps } from '@/types/dashboard/health/stale.repository.card.type';
import '../../../styles/components/dashboard/health/StaleRepositoryCard.scss';

const DAYS_IN_MS = 24 * 60 * 60 * 1000;

const getRelativeTime = (updatedAt: string): string => {
  const currentTime = Date.now();
  const timestamp = new Date(updatedAt).getTime();

  if (Number.isNaN(timestamp)) {
    return 'Unknown update date';
  }

  const days = Math.floor((currentTime - timestamp) / DAYS_IN_MS);

  if (days < 0) return 'Updated recently';
  if (days === 0) return 'Updated today';
  if (days === 1) return 'Updated yesterday';
  if (days < 30) return `Updated ${days} days ago`;

  const months = Math.floor(days / 30);

  if (months < 12) {
    return `Updated ${months} ${months === 1 ? 'month' : 'months'} ago`;
  }

  const years = Math.floor(months / 12);

  return `Updated ${years} ${years === 1 ? 'year' : 'years'} ago`;
};

const StaleRepositoryCard = ({
  name,
  html_url,
  description,
  updated_at,
  className,
  style,
}: StaleRepositoryCardProps) => {
  return (
    <article className={clsx('stale-repository-card', className)} style={style}>
      <div className='stale-repository-card__icon'>
        <GitFork
          size={18}
          strokeWidth={1.8}
          role='img'
          aria-hidden='true'
          focusable='false'
        />
      </div>

      <div className='stale-repository-card__info'>
        <a
          href={html_url}
          target='_blank'
          rel='noopener noreferrer'
          className='stale-repository-card__info--name'
        >
          <span>{name}</span>

          <ExternalLink
            size={13}
            strokeWidth={1.8}
            role='img'
            aria-hidden='true'
            focusable='false'
          />
        </a>

        <span className='stale-repository-card__info--description'>
          {description || 'No description provided'}
        </span>

        <time
          dateTime={updated_at}
          className='stale-repository-card__info--updated'
        >
          {getRelativeTime(updated_at)}
        </time>
      </div>

      <div className='stale-repository-card__badge'>
        <Clock3
          size={13}
          strokeWidth={1.8}
          role='img'
          aria-hidden='true'
          focusable='false'
        />

        <span>Stale</span>
      </div>
    </article>
  );
};

export default StaleRepositoryCard;
