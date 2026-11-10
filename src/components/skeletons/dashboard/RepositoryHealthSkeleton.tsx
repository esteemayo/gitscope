import Skeleton from 'react-loading-skeleton';

import 'react-loading-skeleton/dist/skeleton.css';
import '../../../styles/components/skeletons/dashboard/RepositoryHealthSkeleton.scss';

const RepositoryHealthSkeleton = () => {
  return (
    <section
      className='repository-health-skeleton'
      aria-busy='true'
      aria-label='Loading repository health'
    >
      <div className='repository-health-skeleton__container'>
        <header className='repository-health-skeleton__header'>
          <div className='repository-health-skeleton__heading'>
            <Skeleton width={150} height={12} />

            <Skeleton width={220} height={32} />

            <Skeleton width={400} height={14} />
          </div>

          <Skeleton width={100} height={30} borderRadius={999} />
        </header>

        <div className='repository-health-skeleton__wrapper'>
          <div className='repository-health-skeleton__grid'>
            {[...Array(3)].map((_, index) => (
              <article
                key={index}
                className='repository-health-skeleton__metric-card'
              >
                <Skeleton width={42} height={42} borderRadius={12} />

                <Skeleton width='45%' height={13} />

                <Skeleton width='35%' height={30} />

                <Skeleton width='70%' height={12} />
              </article>
            ))}
          </div>

          <div className='repository-health-skeleton__content'>
            <div className='repository-health-skeleton__content-header'>
              <div>
                <Skeleton width={220} height={20} />

                <Skeleton
                  width={280}
                  height={13}
                  style={{ marginTop: '10px' }}
                />
              </div>

              <Skeleton width={32} height={32} borderRadius={8} />
            </div>

            {[...Array(3)].map((_, index) => (
              <article
                key={index}
                className='repository-health-skeleton__stale-repository'
              >
                <Skeleton width={38} height={38} borderRadius={10} />

                <div className='repository-health-skeleton__stale-content'>
                  <Skeleton width='45%' height={14} />

                  <Skeleton width='70%' height={11} />

                  <Skeleton width='10%' height={11} />
                </div>

                <Skeleton width={65} height={28} borderRadius={8} />
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RepositoryHealthSkeleton;
