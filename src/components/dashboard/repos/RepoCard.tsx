import Link from 'next/link';

import BookIcon from '@/components/icons/BookIcon';
import ForkIcon from '@/components/icons/ForkIcon';
import StarIcon from '@/components/icons/StarIcon';

import { truncText } from '@/utils';
import { RepoCardProps } from '@/types/repo.card.type';

import '../../../styles/components/RepoCard.scss';

const RepoCard = ({
  view,
  title,
  desc,
  language,
  stars,
  fork,
  status,
  size,
}: RepoCardProps) => {
  return (
    <article className='repo-card' tabIndex={0}>
      <Link
        href={`/repo/esteemayo/albumz-api`}
        className='repo-card__link'
        tabIndex={-1}
      >
        <header className='repo-card__top'>
          <div className='repo-card__heading'>
            <BookIcon />

            <h3 className='repo-card__heading--title' title='albumz-api'>
              {title}
            </h3>

            <span className='repo-card__heading--label'>{status}</span>
          </div>

          {view === 'list' && <p className='repo-card__desc'>{desc}</p>}

          {view === 'grid' && desc && (
            <p className='repo-card__desc'>{truncText(desc, 50)}</p>
          )}

          {view === 'grid' && !desc && <p className='repo-card__desc' />}
        </header>

        <footer className='repo-card__stats'>
          <div className='repo-card__stats--left'>
            <span>
              <div className='language' />
              {language}
            </span>

            <span>
              <StarIcon /> {stars}
            </span>

            <span>
              <ForkIcon /> {fork}
            </span>
          </div>

          <div className='repo-card__stats--right'>
            <span>{size}</span>
          </div>
        </footer>
      </Link>
    </article>
  );
};

export default RepoCard;
