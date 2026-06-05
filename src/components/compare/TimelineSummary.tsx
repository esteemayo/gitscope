import TimelineMetricCard from './TimelineMetricCard';

import { TrophyIcon } from '../icons/TrophyIcon';
import FlameIcon from '../icons/FlameIcon';
import { ActivityIcon } from '../icons/ActivityIcon';

import { TimelineSummaryProps } from '@/types/compare/timeline.summary.type';
import '../../styles/components/TimelineSummary.scss';

const TimelineSummary = ({
  totalUpdatesA,
  totalUpdatesB,
  leaderName,
  leaderDiff,
  peakMonthA,
  peakMonthB,
}: TimelineSummaryProps) => {
  return (
    <div className='timeline-summary'>
      <div className='timeline-summary__container'>
        <TimelineMetricCard
          icon={<ActivityIcon />}
          label='Total Updates'
          value={`${totalUpdatesA} vs ${totalUpdatesB}`}
        />

        <TimelineMetricCard
          icon={<TrophyIcon />}
          label='Activity Leader'
          value={`${leaderName} +${leaderDiff}%`}
        />

        <TimelineMetricCard
          icon={<FlameIcon />}
          label='Peak Activity'
          value={`${peakMonthA} vs ${peakMonthB}`}
        />
      </div>
    </div>
  );
};

export default TimelineSummary;
