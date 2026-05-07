import Link from 'next/link';

import BookIcon from '../icons/BookIcon';
import ForkIcon from '../icons/ForkIcon';
import StarIcon from '../icons/StarIcon';

import { RepoCardProps } from '@/types/repo.card.type';
import '../../styles/components/RepoCard.scss';

const RepoCard = ({ view }: RepoCardProps) => {
  return (
    <article className='repo-card' tabIndex={0}>
      <Link
        href={`/repo/esteemayo/albumz-api`}
        className='repo-card__link'
        tabIndex={-1}
      >
        <div className='repo-card__top'>
          <div className='repo-card__name'>
            <BookIcon />

            <h3 className='repo-card__name--title' title='albumz-api'>albumz-api</h3>
          </div>

          {view === 'list' && <p className='repo-card__desc'>
            User password authentication and email verification using passport and passport-local.
          </p>}

          {view === 'grid' && <p className='repo-card__desc' />}
        </div>

        <div className='repo-card__stats'>
          <div className='repo-card__stats--left'>
            <span>
              <div className='language' />
              JavaScript
            </span>

            <span>
              <StarIcon /> 2
            </span>

            <span>
              <ForkIcon /> 0
            </span>
          </div>

          <div className='repo-card__stats--right'>
            <span>364 KB</span>
          </div>
        </div>
      </Link>
    </article>
  );
};

export default RepoCard;
