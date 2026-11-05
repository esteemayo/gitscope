import { Clock3, ExternalLink, GitFork } from 'lucide-react';

import '../../../styles/components/dashboard/health/StaleRepositoryCard.scss';

const StaleRepositoryCard = () => {
  return (
    <article className='stale-repository-card'>
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
          href='http://'
          target='_blank'
          rel='noopener noreferrer'
          className='stale-repository-card__info--name'
        >
          name
          <ExternalLink
            size={13}
            strokeWidth={1.8}
            role='img'
            aria-hidden='true'
            focusable='false'
          />
        </a>

        <span className='stale-repository-card__info--description'>
          {'No description provided'}
        </span>

        <time dateTime='' className='stale-repository-card__info--updated'>
          updated_at
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
      </div>
    </article>
  );
};

export default StaleRepositoryCard;
