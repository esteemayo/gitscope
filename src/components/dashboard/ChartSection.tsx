'use client';

import { lazy } from 'react';

import Chart from '@/charts/Chart';

const LanguageChart = lazy(() => import('@/charts/LanguageChart'));
const TopReposChart = lazy(() => import('@/charts/TopReposChart'));
const TopLanguageChart = lazy(() => import('@/charts/TopLanguageChart'));

import '../../styles/components/ChartSection.scss';

const ChartSection = () => {
  return (
    <section className='chart-section'>
      <div className='chart-section__container'>
        <div className='chart-section__wrapper'>
          <Chart title='Top Languages'>
            <LanguageChart />
          </Chart>

          <Chart title='Most Starred'>
            <TopReposChart />
          </Chart>

          <Chart title='Stars per Language'>
            <TopLanguageChart />
          </Chart>
        </div>
      </div>
    </section>
  )
}

export default ChartSection