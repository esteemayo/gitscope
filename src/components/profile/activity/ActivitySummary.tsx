import ActivityCard from './ActivityCard';
import ProfileHeading from '../ProfileHeading';

import { ActivitySummaryProps } from '@/types/profile/activity/activity.summary.type';
import '../../../styles/components/profile/activity/ActivitySummary.scss';

const ActivitySummary = ({ metrics }: ActivitySummaryProps) => {
  return (
    <section className='activity-summary' aria-label='activity-summary-heading'>
      <div className='activity-summary__container'>
        <header className='activity-summary__header'>
          <div className='activity-summary__group'>
            <ProfileHeading
              id='activity-summary-heading'
              title='Activity Summary'
              description='A snapshot of your development activity over the last year.'
            />
          </div>

          <span className='activity-summary__total'>Last 12 Months</span>
        </header>

        <div className='activity-summary__grid'>
          {metrics.map((metric) => (
            <ActivityCard key={metric.id} metric={metric} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ActivitySummary;
