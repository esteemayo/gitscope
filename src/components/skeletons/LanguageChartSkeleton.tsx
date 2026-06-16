import Skeleton from 'react-loading-skeleton';
import '../../styles/components/skeletons/LanguageChartSkeleton.scss';

const LanguageChartSkeleton = () => {
  return (
    <section className='language-chart-skeleton'>
      <div className='language-chart-skeleton__bar'>
        <Skeleton width='45%' height={12} inline />
        <Skeleton width='20%' height={12} inline />
        <Skeleton width='15%' height={12} inline />
        <Skeleton width='13%' height={12} inline />
        <Skeleton width='7%' height={12} inline />
      </div>

      <div className='language-chart-skeleton__legend'>
        {[...Array(5)].map((_, index) => (
          <div key={index} className='language-chart-skeleton__item'>
            <div className='language-chart-skeleton__left'>
              <Skeleton circle width={12} height={12} />

              <Skeleton width={100} />
            </div>

            <Skeleton width={40} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default LanguageChartSkeleton;
