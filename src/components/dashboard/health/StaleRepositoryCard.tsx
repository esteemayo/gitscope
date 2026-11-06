import clsx from 'clsx';
import { Clock3, ExternalLink, GitFork } from 'lucide-react';

import { StaleRepositoryCardProps } from '@/types/dashboard/health/stale.repository.card.type';
import '../../../styles/components/dashboard/health/StaleRepositoryCard.scss';

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
          {updated_at}
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
