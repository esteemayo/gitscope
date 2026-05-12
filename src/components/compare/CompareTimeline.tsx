'use client';

import { lazy, Suspense } from 'react';
import '../../styles/components/CompareTimeline.scss';

const CompareTimelineChart = lazy(() => import('@/charts/CompareTimelineChart'));

const CompareTimeline = () => {
  return (
    <section className='compare-timeline'>
      <h3 className='compare-timeline__heading'>
        Activity over time
      </h3>

      <p className='compare-timeline__desc'>
        Repository updates across months
      </p>

      <Suspense fallback='loading...'>
        <CompareTimelineChart />
      </Suspense>
    </section>
  );
};

export default CompareTimeline;
