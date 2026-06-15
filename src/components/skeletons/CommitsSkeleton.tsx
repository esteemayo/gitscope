import Skeleton from 'react-loading-skeleton';
import '../../styles/components/skeletons/CommitsSkeleton.scss';

const CommitsSkeleton = () => {
  return (
    <section className='commits-skeleton'>
      {[...Array(6)].map((_, index) => (
        <article key={index} className='commits-skeleton__card'>
          <div className='commits-skeleton__header'>
            <div className='commits-skeleton__author'>
              <Skeleton circle width={40} height={40} />

              <div className='commits-skeleton__wrapper'>
                <Skeleton width={120} />

                <Skeleton width={80} />
              </div>
            </div>

            <Skeleton width={40} borderRadius={10} />
          </div>

          <Skeleton count={2} height={18} />

          <div className='commits-skeleton__footer'>
            <Skeleton width={60} borderRadius={10} />

            <Skeleton width={100} />
          </div>
        </article>
      ))}
    </section>
  );
};

export default CommitsSkeleton;
