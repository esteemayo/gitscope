import Skeleton from 'react-loading-skeleton';
import '../../styles/components/skeletons/RepoActionsSkeleton.scss';

const RepoActionsSkeleton = () => {
  return (
    <section className='repo-actions-skeleton'>
      <Skeleton width={110} height={20} />

      <Skeleton height={44} borderRadius={8} />

      <Skeleton height={44} borderRadius={8} />

      <Skeleton height={44} borderRadius={8} />
    </section>
  );
};

export default RepoActionsSkeleton;
