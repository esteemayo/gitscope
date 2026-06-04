import TimelineMetricCard from './TimelineMetricCard';
import '../../styles/components/TimelineSummary.scss';

interface TimelineSummaryProps {
  userAName: string;
  userBName: string;
  totalUpdatesA: number;
  totalUpdatesB: number;
  leader: string;
  leaderDiff: number;
}

const TimelineSummary = ({
  userAName,
  userBName,
  totalUpdatesA,
  totalUpdatesB,
  leader,
  leaderDiff,
}: TimelineSummaryProps) => {
  return (
    <div className='timeline-summary'>
      <div className='timeline-summary__container'>
        <TimelineMetricCard
          label={userAName}
          value={`${totalUpdatesA} updates`}
        />

        <TimelineMetricCard
          label={userBName}
          value={`${totalUpdatesB} updates`}
        />

        <TimelineMetricCard
          label='Leader'
          value={`${leader} +${leaderDiff}%`}
        />
      </div>
    </div>
  );
};

export default TimelineSummary;
