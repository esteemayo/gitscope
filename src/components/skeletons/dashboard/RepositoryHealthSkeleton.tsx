import Skeleton from 'react-loading-skeleton';

import 'react-loading-skeleton/dist/skeleton.css';
import '../../../styles/components/skeletons/dashboard/RepositoryHealthSkeleton.scss';

const RepositoryHealthSkeleton = () => {
  return (
    <section
      className='repository-health'
      aria-labelledby='repository-health-title'
    >
      <div className='repository-health__container'>
        <header className='repository-health__header'>
          <Skeleton width={150} height={12} />

          <Skeleton width={220} height={32} />

          <Skeleton width={300} height={14} />
        </header>

        <div className='repository-health__grid'>
          {[...Array(3)].map((_, index) => (
            <div key={index} className='health-metric-card'>
              <Skeleton width={42} height={42} borderRadius={12} />

              <Skeleton width='45%' height={13} />

              <Skeleton width='35%' height={30} />

              <Skeleton width='70%' height={12} />
            </div>
          ))}
        </div>

        <div className='repository-health__content'>
          <Skeleton width={220} height={20} />

          <Skeleton width={280} height={13} />

          {[...Array(3)].map((_, index) => (
            <div key={index} className='skeleton-repository'>
              <Skeleton />

              <div className='skeleton-repository__content'>
                <Skeleton width='45%' height={14} />

                <Skeleton width='70%' height={11} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RepositoryHealthSkeleton;
