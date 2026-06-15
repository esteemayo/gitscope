import Skeleton from 'react-loading-skeleton';
import '../../styles/components/skeletons/TimelineSkeleton.scss';

const TimelineSkeleton = () => {
  return (
    <section className='timeline-skeleton'>
      {[...Array(7)].map((_, index) => (
        <div key={index} className='timeline-skeleton__item'>
          <Skeleton circle width={12} height={12} />

          <Skeleton width='100%' height={16} />
        </div>
      ))}
    </section>
  );
};

export default TimelineSkeleton;
