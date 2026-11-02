import Skeleton from 'react-loading-skeleton';

import 'react-loading-skeleton/dist/skeleton.css';
import '../../../styles/components/skeletons/dashboard/AwardsSkeleton.scss';

const AwardsSkeleton = () => {
  return (
    <div className='awards-skeleton'>
      <div className='awards-skeleton__grid'>
        {[...Array(5)].map((_, index) => (
          <article key={index} className='awards-skeleton__card'>
            <div className='awards-skeleton__header'>
              <Skeleton width={46} height={46} borderRadius={12} />

              <Skeleton width={65} height={22} borderRadius={20} />
            </div>

            <div className='awards-skeleton__content'>
              <Skeleton width='65%' height={16} />

              <Skeleton count={2} height={11} />
            </div>

            <div className='awards-skeleton__progress'>
              <Skeleton width='100%' height={7} borderRadius={999} />

              <Skeleton width='45%' height={10} />
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default AwardsSkeleton;
