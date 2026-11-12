import Skeleton from 'react-loading-skeleton';

import 'react-loading-skeleton/dist/skeleton.css';
import '../../../styles/components/skeletons/dashboard/DeveloperSummarySkeleton.scss';

const DeveloperSummarySkeleton = () => {
  return (
    <section
      className='developer-summary-skeleton'
      aria-busy='true'
      aria-label='Loading developer summary'
    >
      <div className='developer-summary-skeleton__container'>
        <header className='developer-summary-skeleton__header'>
          <div className='developer-summary-skeleton__heading'>
            <Skeleton width={150} height={12} />

            <Skeleton width={220} height={32} />

            <Skeleton width={400} height={14} />
          </div>
        </header>

        <div className='developer-summary-skeleton__wrapper'>
          <div className='developer-summary-skeleton__card'>
            <div className='developer-summary-skeleton__card-heading'>
              <Skeleton width={42} height={42} borderRadius={12} />

              <div className='developer-summary-skeleton__card-content'>
                <Skeleton width={110} height={15} />

                <Skeleton width={150} height={11} />
              </div>
            </div>

            <Skeleton count={3} height={12} />
          </div>

          <div className='developer-summary-skeleton__observations'>
            <div className='developer-summary-skeleton__observations-header'>
              <div className='developer-summary-skeleton__observations-heading'>
                <Skeleton width={110} height={15} />

                <Skeleton width={150} height={11} />
              </div>

              <Skeleton width={100} height={30} borderRadius={999} />
            </div>

            <div className='developer-summary-skeleton__observations-grid'>
              {Array.from({ length: 4 }, (_, index) => (
                <article key={index} className='observation'>
                  <Skeleton width={38} height={38} borderRadius={11} />

                  <div className='observation__content'>
                    <Skeleton width='45%' height={13} />

                    <Skeleton count={2} height={11} />
                  </div>
                </article>
              ))}
            </div>
          </div>

          <Skeleton height={42} borderRadius={10} />
        </div>
      </div>
    </section>
  );
};

export default DeveloperSummarySkeleton;
