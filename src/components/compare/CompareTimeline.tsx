'use client';

import { lazy, Suspense } from 'react';

import SectionHeader from '../ui/SectionHeader';
import TimelineSummary from './TimelineSummary';
import TimelineIcon from '../icons/TimelineIcon';

import { useMediaQuery } from '@/hooks/useMediaQuery';
import { CompareTimelineProps } from '@/types/compare/compare.timeline.type';

import '../../styles/components/CompareTimeline.scss';

const CompareTimelineChart = lazy(
  () => import('@/charts/CompareTimelineChart'),
);

const CompareTimeline = ({
  totalUpdatesA,
  totalUpdatesB,
  leaderName,
  leaderDiff,
  peakMonthA,
  peakMonthB,
}: CompareTimelineProps) => {
  const isMobile = useMediaQuery('(max-width: 48em)');

  return (
    <section className='compare-timeline'>
      <SectionHeader
        icon={<TimelineIcon />}
        title='Activity timeline'
        description='Repository updates across months'
      />

      <TimelineSummary
        totalUpdatesA={totalUpdatesA}
        totalUpdatesB={totalUpdatesB}
        leaderName={leaderName}
        leaderDiff={leaderDiff}
        peakMonthA={peakMonthA}
        peakMonthB={peakMonthB}
      />

      {!isMobile && (
        <div className='compare-timeline__chart'>
          <div className='compare-timeline__chart--inner'>
            <Suspense fallback='Loading activity chart...'>
              <CompareTimelineChart grid />
            </Suspense>
          </div>
        </div>
      )}
    </section>
  );
};

export default CompareTimeline;
