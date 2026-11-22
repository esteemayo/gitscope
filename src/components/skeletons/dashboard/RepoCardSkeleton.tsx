import clsx from 'clsx';
import Skeleton from 'react-loading-skeleton';

import { RepositoryView } from '@/types/dashboard/repository';

import 'react-loading-skeleton/dist/skeleton.css';
import '../../../styles/components/skeletons/dashboard/RepoCardSkeleton.scss';

interface RepoCardSkeletonProps {
  view: RepositoryView;
}

const RepoCardSkeleton = ({ view }: RepoCardSkeletonProps) => {
  return (
    <article
      className={clsx('repo-card-skeleton', {
        'list-card': view === 'list',
      })}
      aria-hidden='true'
    >
      <div className='repo-card-skeleton__accent' aria-hidden='true' />

      <div className='repo-card-skeleton__content'>
        <div className='repo-card-skeleton__top'>
          <Skeleton width={40} height={40} borderRadius={9} />

          <div className='repo-card-skeleton__identity'>
            <div className='repo-card-skeleton__title'>
              <Skeleton width='65%' height={14} />

              <Skeleton width={65} height={20} />
            </div>

            <Skeleton
              width={110}
              height={11}
              className='repo-card-skeleton__visibility'
            />
          </div>

          <Skeleton
            width={32}
            height={32}
            className='repo-card__external-link'
          />
        </div>

        <div className='repo-card-skeleton__description'>
          <Skeleton count={2} height={11} />
        </div>

        <div className='repo-card-skeleton__topics'>
          <Skeleton width={65} height={23} borderRadius={5} />

          <Skeleton width={85} height={23} borderRadius={5} />

          <Skeleton width={72} height={23} borderRadius={5} />
        </div>

        <div className='repo-card-skeleton__footer'>
          <div className='repo-card-skeleton__metrics'>
            <Skeleton width={75} height={12} />

            <Skeleton width={45} height={12} />

            <Skeleton width={45} height={12} />
          </div>

          <Skeleton
            width={110}
            height={11}
            className='repo-card-skeleton__updated-at'
          />
        </div>
      </div>
    </article>
  );
};

export default RepoCardSkeleton;
