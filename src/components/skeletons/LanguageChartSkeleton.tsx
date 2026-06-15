import Skeleton from 'react-loading-skeleton';
import '../../styles/components/skeletons/LanguageChartSkeleton.scss';

const LanguageChartSkeleton = () => {
  return (
    <section className='language-chart-skeleton'>
      <div className='language-chart-skeleton__chart'>
        <Skeleton circle width={180} height={180} />
      </div>

      {[...Array(5)].map((_, index) => (
        <div key={index} className='language-chart-skeleton__row'>
          <Skeleton width='35%' />

          <Skeleton width='15%' />
        </div>
      ))}
    </section>
  );
};

export default LanguageChartSkeleton;
