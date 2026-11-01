import Skeleton from 'react-loading-skeleton';

import 'react-loading-skeleton/dist/skeleton.css';
import '../../../styles/components/skeletons/dashboard/IntelligenceSkeleton.scss';

const IntelligenceSkeleton = () => {
  return (
    <div
      className='intelligence-skeleton'
      aria-label='Loading profile intelligence'
      aria-busy='true'
    >
      <div className='intelligence-skeleton__grid'>
        {[...Array(4)].map((_, index) => (
          <article key={index} className='intelligence-skeleton__card'>
            <div className='intelligence-skeleton__header'>
              <Skeleton width={38} height={38} borderRadius={11} />

              <Skeleton width='48%' height={13} />
            </div>

            <div className='intelligence-skeleton__content'>
              <Skeleton width='42%' height={30} />

              <Skeleton
                count={2}
                height={11}
                containerClassName='intelligence-skeleton__content--description'
              />
            </div>

            <div className='intelligence-skeleton__footer'>
              <Skeleton width={10} height={10} circle />

              <Skeleton width='85%' height={10} />
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default IntelligenceSkeleton;
