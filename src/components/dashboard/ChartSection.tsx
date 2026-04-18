'use client';

import { lazy } from 'react';

import Chart from '@/charts/Chart';

const LanguageChart = lazy(() => import('@/charts/LanguageChart'));
const TopReposChart = lazy(() => import('@/charts/TopReposChart'));
const StarsLanguageChart = lazy(() => import('@/charts/StarsLanguageChart'));

import '../../styles/components/ChartSection.scss';

const ChartSection = () => {
  return (
    <section className='chart-section'>
      <div className='chart-section__container'>
        <div className='chart-section__wrapper'>
          <Chart
            title='Language Distribution'
            subtitle='Breakdown of repositories by language'
          >
            <LanguageChart />
          </Chart>

          <Chart
            title='Top Repositories'
            subtitle='Ranked by stars'
          >
            <TopReposChart />
          </Chart>

          <Chart
            title='Top Language by Stars'
            subtitle='Total stars grouped by language'
          >
            <StarsLanguageChart />
          </Chart>
        </div>
      </div>
    </section>
  );
};

export default ChartSection;
