import Skeleton from 'react-loading-skeleton';
import '../../styles/components/skeletons/TimelineSkeleton.scss';

const TimelineSkeleton = () => {
  return (
    <section className='timeline-skeleton'>
      {[...Array(5)].map((_, index) => (
        <article key={index} className='timeline-skeleton__item'>
          <div className='timeline-skeleton__dot'>
            <Skeleton circle width={12} height={12} />
          </div>

          <div className='timeline-skeleton__body'>
            <Skeleton width='35%' height={18} />

            <Skeleton count={2} height={14} />

            <Skeleton width='18%' height={12} />
          </div>
        </article>
      ))}
    </section>
  );
};

export default TimelineSkeleton;
