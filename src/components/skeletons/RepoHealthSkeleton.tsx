import Skeleton from 'react-loading-skeleton';
import '../../styles/components/skeletons/RepoHealthSkeleton.scss';

const RepoHealthSkeleton = () => {
  return (
    <section className='repo-health-skeleton'>
      {[...Array(4)].map((_, index) => (
        <div key={index} className='repo-health-skeleton__item'>
          <Skeleton width='50%' />

          <Skeleton width='25%' />
        </div>
      ))}
    </section>
  );
};

export default RepoHealthSkeleton;
