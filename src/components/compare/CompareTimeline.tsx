'use client';

import { lazy, Suspense } from 'react';
import SectionHeader from '../ui/SectionHeader';

import '../../styles/components/CompareTimeline.scss';

const CompareTimelineChart = lazy(
  () => import('@/charts/CompareTimelineChart'),
);

const CompareTimeline = () => {
  return (
    <section className='compare-timeline'>
      <SectionHeader
        title='Activity over time'
        description='Repository updates across months'
      />

      <div className='compare-timeline__chart'>
        <Suspense fallback='loading...'>
          <CompareTimelineChart />
        </Suspense>
      </div>
    </section>
  );
};

export default CompareTimeline;
