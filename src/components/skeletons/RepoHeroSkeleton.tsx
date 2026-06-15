import Skeleton from 'react-loading-skeleton';
import '../../styles/components/skeletons/RepoHeroSkeleton.scss';

const RepoHeroSkeleton = () => {
  return (
    <section className='repo-hero-skeleton'>
      <Skeleton width={72} height={72} borderRadius={20} />

      <div className='repo-hero-skeleton__content'>
        <Skeleton width={120} height={20} />

        <Skeleton width='45%' height={36} />

        <Skeleton count={2} width='80%' />
      </div>

      <div className='repo-hero-skeleton__actions'>
        <Skeleton width={160} height={44} borderRadius={5} />
      </div>
    </section>
  );
};

export default RepoHeroSkeleton;
