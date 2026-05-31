import InsightCard from '../ui/InsightCard';
import SectionHeader from '../ui/SectionHeader';

import { TrophyIcon } from '../icons/TrophyIcon';
import { FireIcon } from '../icons/FireIcon';
import { ActivityIcon } from '../icons/ActivityIcon';

import '../../styles/components/CompareInsight.scss';

const CompareInsight = () => {
  return (
    <section className='compare-insight'>
      <SectionHeader
        title='Key insights'
        description='Quick comparison summary'
      />

      <div className='compare-insight__grid'>
        <InsightCard
          icon={<TrophyIcon />}
          title='Stars Leader'
          tooltip='Percentage difference in total repository stars'
          value={`leader leads by ${90}%`} // getPercentDiff(stats1.stars, stats2.stars)
        />

        <InsightCard
          icon={<ActivityIcon />}
          title='Activity consistency'
          tooltip='How evenly activity is spread over time'
          value={`30% vs 20%`} // consistencyA% vs consistencyB%
        />

        <InsightCard
          icon={<FireIcon />}
          title='Peak Activity'
          tooltip='Month with highest repository updates'
          value={`Jan 24, 2026 vs Feb 14, 2026`} // mostA?.date vs mostB?.date
        />
      </div>
    </section>
  );
};

export default CompareInsight;
