import ActivityCardSkeleton from './ActivityCardSkeleton';
import Skeleton from 'react-loading-skeleton';

const ActivitySummarySkeleton = () => {
  return (
    <section className='activity-summary' aria-label='activity-summary-heading'>
      <div className='activity-summary__container'>
        <header className='activity-summary__header'>
          <div className='activity-summary__group'>
            <Skeleton width={200} height={28} />
            <Skeleton width={300} />
          </div>

          <Skeleton width={120} height={36} borderRadius={100} />
        </header>

        <div className='activity-summary__grid' style={{ marginTop: '2.4rem' }}>
          {[...Array(8)].map((_, index) => (
            <ActivityCardSkeleton key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ActivitySummarySkeleton;
