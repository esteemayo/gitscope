import Link from 'next/link';
import clsx from 'clsx';
import { Archive, ExternalLink, GitFork, Star } from 'lucide-react';

import { RepoCardProps } from '@/types/dashboard';
import { getLanguageColor } from '@/utils/getLanguageColor';

import '../../../styles/components/dashboard/repositoryExplorer/RepoCard.scss';

type CustomCSSProperties = React.CSSProperties & {
  '--accent-color': string;
};

const RepoCard = ({ repository, view }: RepoCardProps) => {
  const accentColor = getLanguageColor(repository.language);

  return (
    <article
      className={clsx('repo-card', {
        'list-card': view === 'list',
      })}
      style={
        {
          '--accent-color': accentColor,
        } as CustomCSSProperties
      }
    >
      <div className='repo-card__accent' aria-hidden='true' />

      <div className='repo-card__content'>
        <div className='repo-card__top'>
          <div className='repo-card__icon'>
            <span>{repository.name.slice(0, 1).toUpperCase()}</span>
          </div>

          <div className='repo-card__identity'>
            <div className='repo-card__title'>
              <Link
                href={`/repo/${repository.full_name}`}
                className='repo-card__title--link'
                aria-label={`View ${repository.full_name} details in GitScope`}
              >
                {repository.name}
              </Link>

              {repository.archived && (
                <span className='repo-card__title--archive-badge'>
                  <Archive
                    size={12}
                    strokeWidth={1.8}
                    role='img'
                    aria-hidden='true'
                    focusable='false'
                  />
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
            rel='noopener noreferrer'
            className='repo-card__external-link'
            aria-label={`Open ${repository.full_name} on GitHub`}
          >
            <ExternalLink
              size={16}
              strokeWidth={1.8}
              role='img'
              aria-hidden='true'
              focusable='false'
            />
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
            <span className='repo-card__metrics--language'>
              {repository.language ?? 'Unknown'}
            </span>

            <span className='repo-card__metrics--stars'>
              <Star
                size={14}
                strokeWidth={1.8}
                role='img'
                aria-hidden='true'
                focusable='false'
              />
              {repository.stargazers_count}
            </span>

            <span className='repo-card__metrics--forks'>
              <GitFork
                size={14}
                strokeWidth={1.8}
                role='img'
                aria-hidden='true'
                focusable='false'
              />
              {repository.forks_count}
            </span>
          </div>

          <time
            dateTime={repository.updated_at}
            className='repo-card__metrics--updated-at'
          >
            Updated {new Date(repository.updated_at).toLocaleDateString()}
          </time>
        </div>
      </div>
    </article>
  );
};

export default RepoCard;
