'use client';

import { lazy, Suspense } from 'react';

import SectionHeader from '../ui/SectionHeader';
import TimelineSummary from './TimelineSummary';
import TimelineIcon from '../icons/TimelineIcon';

import '../../styles/components/CompareTimeline.scss';

const CompareTimelineChart = lazy(
  () => import('@/charts/CompareTimelineChart'),
);

interface CompareTimelineProps {
  userAName: string;
  userBName: string;
  totalUpdatesA: number;
  totalUpdatesB: number;
  leader: string;
  leaderDiff: number;
  peakMonthA: string;
  peakMonthB: string;
}

const CompareTimeline = ({
  userAName,
  userBName,
  totalUpdatesA,
  totalUpdatesB,
  leader,
  leaderDiff,
  peakMonthA,
  peakMonthB,
}: CompareTimelineProps) => {
  return (
    <section className='compare-timeline'>
      <SectionHeader
        icon={<TimelineIcon />}
        title='Activity timeline'
        description='Repository updates across months'
      />

      <TimelineSummary
        userAName={userAName}
        userBName={userBName}
        totalUpdatesA={totalUpdatesA}
        totalUpdatesB={totalUpdatesB}
        leader={leader}
        leaderDiff={leaderDiff}
      />

      <div className='compare-timeline__chart'>
        <Suspense fallback='Loading activity chart...'>
          <CompareTimelineChart />
        </Suspense>
      </div>

      <div className='compare-timeline__footer'>
        <div className='timeline-peak'>
          <span>Peak Month</span>

          <strong>
            {userAName}: {peakMonthA}
          </strong>
        </div>

        <div className='timeline-peak'>
          <span>Peak Month</span>

          <strong>
            {userBName}: {peakMonthB}
          </strong>
        </div>
      </div>
    </section>
  );
};

export default CompareTimeline;
