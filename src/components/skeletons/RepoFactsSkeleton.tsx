import Skeleton from 'react-loading-skeleton';
import '../../styles/components/skeletons/RepoFactsSkeleton.scss';

const RepoFactsSkeleton = () => {
  return (
    <section className='repo-facts-skeleton'>
      <Skeleton width={130} height={20} />

      {[...Array(3)].map((_, index) => (
        <div key={index} className='repo-facts-skeleton__row'>
          <Skeleton width={70} />

          <Skeleton width={90} />
        </div>
      ))}
    </section>
  );
};

export default RepoFactsSkeleton;
