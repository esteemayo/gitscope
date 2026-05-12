import Tooltip from '../ui/Tooltip';
import '../../styles/components/CompareInsight.scss';

const CompareInsight = () => {
  return (
    <section className='compare-insight'>
      <p className='compare-insight__text'>
        User A leads by {' '}
        <strong>getPercentDiff(stats1.stars, stats2.stars)</strong> stars
      </p>

      <p className='compare-insight__text'>
        Consistency
        <Tooltip text='How evenly activity is spread over time' />
        <strong>consistencyA% vs consistencyB%</strong>
      </p>

      <p className='compare-insight__text'>
        Peak Activity
        <Tooltip text='Month with highest repository updates' />
        <strong>mostA?.date</strong> vs <strong>mostB?.date</strong>
      </p>
    </section>
  );
};

export default CompareInsight;
