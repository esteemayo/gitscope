import Skeleton from 'react-loading-skeleton';
import '../../styles/components/skeletons/ContributorsSkeleton.scss';

const ContributorsSkeleton = () => {
  return (
    <section className='contributors-skeleton'>
      {[...Array(6)].map((_, index) => (
        <article key={index} className='contributors-skeleton__card'>
          <Skeleton
            width={30}
            borderRadius={10}
            className='contributors-skeleton__rank'
          />

          <Skeleton circle width={44} height={44} />

          <div className='contributors-skeleton__content'>
            <Skeleton width={120} />

            <Skeleton width={80} />
          </div>
        </article>
      ))}
    </section>
  );
};

export default ContributorsSkeleton;
