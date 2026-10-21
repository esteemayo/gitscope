import clsx from 'clsx';
import { Archive, ExternalLink, GitFork, Star } from 'lucide-react';

import { RepositoryItem, RepositoryView } from '@/types/repository.type';
import '../../../styles/components/dashboard/repositoryExplorer/RepositoryCard.scss';

interface RepoCardProps {
  repository: RepositoryItem;
  view: RepositoryView;
}

type CustomCSSProperties = React.CSSProperties & {
  '--accent-color': string;
};

const RepoCard = ({ repository, view }: RepoCardProps) => {
  return (
    <article
      className={clsx('repo-card')}
      style={
        {
          '--accent-color': repository.accentColor,
        } as CustomCSSProperties
      }
    >
      <div className='repo-card__accent' aria-hidden='true' />

      <div className='repo-card__content'>
        <div className='repo-card__top'>
          <div className='repo-card__repo-icon'>
            <span>{repository.name.slice(0, 1).toLowerCase()}</span>
          </div>

          <div className='repo-card__identity'>
            <div className='repo-card__title'>
              <h3>{repository.name}</h3>

              {repository.archived && (
                <span className='repo-card__archive-badge'>
                  <Archive size={12} />
                  Archived
                </span>
              )}
            </div>

            <span className='repo-card__visibility'>Public repository</span>
          </div>

          <button
            type='button'
            className='repo-card__external-btn'
            aria-label={`Open ${repository.name} repository`}
          >
            <ExternalLink size={16} />
          </button>
        </div>

        <p className='repo-card__description'>{repository.description}</p>

        <div className='repo-card__topics'>
          {repository.topics.map((topic) => (
            <span key={topic} className='repo-card__topic'>
              {topic}
            </span>
          ))}
        </div>

        <div className='repo-card__footer'>
          <div className='repo-card__metrics'>
            <span className='repo-card__language'>
              <span className='repo-card__language--dot' aria-hidden='true' />
              {repository.language}
            </span>

            <span className='repo-card__stars'>
              <Star size={14} />
              {repository.stars}
            </span>

            <span className='repo-card__forks'>
              <GitFork size={14} />
              {repository.forks}
            </span>
          </div>

          <time
            dateTime={repository.updatedAt}
            className='repo-card__updated-at'
          >
            Updated {repository.updatedAt}
          </time>
        </div>
      </div>
    </article>
  );
};

export default RepoCard;
