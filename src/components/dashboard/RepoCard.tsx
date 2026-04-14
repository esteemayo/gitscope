import Book from '../icons/Book';
import Fork from '../icons/Fork';
import Star from '../icons/Star';

import { RepoCardProps } from '@/types/repo.card.type';
import '../../styles/components/RepoCard.scss';

const RepoCard = ({ view }: RepoCardProps) => {
  return (
    <article className='repo-card' tabIndex={0}>
      <a
        href='#'
        className='repo-card__link'
        target='_blank'
        rel='noopener noreferrer'
        tabIndex={-1}
      >
        <div className='repo-card__top'>
          <div className='repo-card__name'>
            <Book />

            <h3 className='repo-card__name--title'>albumz-api</h3>
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
              <Star /> 2
            </span>

            <span>
              <Fork /> 0
            </span>
          </div>

          <div className='repo-card__stats--right'>
            <span>364 KB</span>
          </div>
        </div>
      </a>
    </article>
  );
};

export default RepoCard;
