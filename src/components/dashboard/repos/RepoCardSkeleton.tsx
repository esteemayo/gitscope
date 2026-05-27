'use client';

import Skeleton from 'react-loading-skeleton';

import { ViewType } from '@/types';
import '../../../styles/components/RepoCardSkeleton.scss';

const RepoCardSkeleton = ({ view }: { view?: ViewType }) => {
  return (
    <article className='repo-card'>
      <div className='repo-card__top'>
        <div className='repo-card__heading'>
          <Skeleton
            circle
            width={16}
            height={16}
            containerClassName='repo-card-skeleton__icon'
          />

          <div className='repo-card-skeleton__title'>
            <Skeleton width='100%' height={20} />
          </div>

          <Skeleton width={52} height={22} borderRadius={999} />
        </div>

        {view === 'list' && (
          <div className='repo-card__desc repo-card-skeleton__desc'>
            <Skeleton count={2} />
          </div>
        )}

        {view === 'grid' && (
          <div className='repo-card__desc repo-card-skeleton__desc'>
            <Skeleton width='100%' />
          </div>
        )}
      </div>

      <footer className='repo-card__stats'>
        <div className='repo-card__stats--left'>
          <span>
            <Skeleton circle width={12} height={12} />
            <Skeleton width={70} />
          </span>

          <span>
            <Skeleton width={40} />
          </span>

          <span>
            <Skeleton width={40} />
          </span>
        </div>

        <div className='repo-card__stats--right'>
          <Skeleton width={55} />
        </div>
      </footer>
    </article>
  );
};

export default RepoCardSkeleton;
