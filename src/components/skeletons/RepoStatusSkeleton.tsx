import Skeleton from 'react-loading-skeleton';
import '../../styles/components/skeletons/RepoStatusSkeleton.scss';

const RepoStatusSkeleton = () => {
  return (
    <section className='repo-status-skeleton'>
      <Skeleton width={140} height={20} />

      <Skeleton width={100} height={32} borderRadius={100} />

      <div className='repo-status-skeleton__row'>
        <Skeleton width={80} />

        <Skeleton width={70} />
      </div>
    </section>
  );
};

export default RepoStatusSkeleton;
