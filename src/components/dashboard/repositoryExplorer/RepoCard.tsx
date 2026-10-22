import clsx from 'clsx';
import { Archive, ExternalLink, GitFork, Star } from 'lucide-react';

import { RepoCardProps } from '@/types/repository.type';
import { getLanguageColor } from '@/utils/getLanguageColor';

import '../../../styles/components/dashboard/repositoryExplorer/RepoCard.scss';

type CustomCSSProperties = React.CSSProperties & {
  '--accent-color': string;
};

const RepoCard = ({ repository, view }: RepoCardProps) => {
  const accentColor = getLanguageColor(repository.language);

  return (
    <article
      className={clsx('repo-card')}
      style={
        {
          '--accent-color': accentColor,
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

            <span className='repo-card__visibility'>
              {repository.private ? 'Private' : 'Public'} repository
            </span>
          </div>

          <a
            href={repository.html_url}
            target='_blank'
            rel='noreferrer'
            className='repo-card__external-link'
            aria-label={`Open ${repository.full_name} on GitHub`}
          >
            <ExternalLink size={16} />
          </a>
        </div>

        <p className='repo-card__description'>
          {repository.description || 'No description provided.'}
        </p>

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
              {repository.language ?? 'Unknown'}
            </span>

            <span className='repo-card__stars'>
              <Star size={14} />
              {repository.stargazers_count}
            </span>

            <span className='repo-card__forks'>
              <GitFork size={14} />
              {repository.forks_count}
            </span>
          </div>

          <time
            dateTime={repository.updated_at}
            className='repo-card__updated-at'
          >
            Updated {new Date(repository.updated_at).toLocaleDateString()}
          </time>
        </div>
      </div>
    </article>
  );
};

export default RepoCard;
