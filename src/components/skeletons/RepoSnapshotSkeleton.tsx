import Skeleton from 'react-loading-skeleton';
import '../../styles/components/skeletons/RepoSnapshotSkeleton.scss';

const RepoSnapshotSkeleton = () => {
  return (
    <section className='repo-snapshot-skeleton'>
      <Skeleton width={160} height={20} />

      <div className='repo-snapshot-skeleton__list'>
        {[...Array(4)].map((_, index) => (
          <div key={index} className='repo-snapshot-skeleton__item'>
            <Skeleton circle width={27.5} height={27.5} />

            <Skeleton width={60} />

            <Skeleton width={40} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default RepoSnapshotSkeleton;
