import Skeleton from 'react-loading-skeleton';
import '../../styles/components/skeletons/RepoOverviewSkeleton.scss';

const RepoOverviewSkeleton = () => {
  return (
    <section className='repo-overview-skeleton'>
      {[...Array(7)].map((_, index) => (
        <div key={index} className='repo-overview-skeleton__card'>
          <Skeleton circle width={27.5} height={27.5} />

          <div className='repo-overview-skeleton__content'>
            <Skeleton width='50%' height={25} />

            <Skeleton width='70%' />
          </div>
        </div>
      ))}
    </section>
  );
};

export default RepoOverviewSkeleton;
