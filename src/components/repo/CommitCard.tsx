import Link from 'next/link';
import { ExternalLink, GitCommit } from 'lucide-react';

import { Commit } from '@/types/repo';
import UserAvatar from '../ui/UserAvatar';

import '../../styles/components/repo/CommitCard.scss';

interface CommitCardProps {
  commit: Commit;
}

const CommitCard = ({ commit }: CommitCardProps) => {
  return (
    <article className='commit-card'>
      <header className='commit-card__header'>
        <div className='commit-card__author'>
          <UserAvatar
            src={commit.authorAvatar}
            name={commit.author}
            alt={commit.author}
            size={40}
          />

          <div className='commit-card__wrapper'>
            <span className='commit-card__wrapper--name'>{commit.author}</span>

            <time dateTime={commit.date} className='commit-card__wrapper--date'>
              {commit.date}
            </time>
          </div>
        </div>

        <span
          className={`commit-card__badge commit-card__badge--${commit.type}`}
        >
          {commit.type}
        </span>
      </header>

      <div className='commit-card__content'>
        <GitCommit size={16} />

        <p className='commit-card__content--message'>{commit.message}</p>
      </div>

      <footer className='commit-card__footer'>
        <code className='commit-card__footer--code'>
          {commit.sha.slice(0, 7)}
        </code>

        <Link
          href={commit.htmlUrl}
          target='_blank'
          rel='noopener noreferrer'
          className='commit-card__footer--link'
        >
          <span>View commit</span>

          <ExternalLink size={14} />
        </Link>
      </footer>
    </article>
  );
};

export default CommitCard;
