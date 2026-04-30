'use client';

import { lazy, Suspense } from 'react';

import Chart from '@/charts/Chart';

import { languageChartData } from '@/data/charts/languageChartData';
import { topReposData } from '@/data/charts/topReposData';
import { starsLanguageChartData } from '@/data/charts/starsLanguageChartData';

import '../../styles/components/ChartSection.scss';

const LanguageChart = lazy(() => import('@/charts/LanguageChart'));
const TopReposChart = lazy(() => import('@/charts/TopReposChart'));
const StarsLanguageChart = lazy(() => import('@/charts/StarsLanguageChart'));

const ChartSection = () => {
  return (
    <section className='chart-section'>
      <div className='chart-section__container'>
        <div className='chart-section__wrapper'>
          <Chart
            title='Language Distribution'
            subtitle='Breakdown of repositories by language'
          >
            <Suspense fallback='loading...'>
              <LanguageChart data={languageChartData} />
            </Suspense>
          </Chart>

          <Chart
            title='Top Repositories'
            subtitle='Ranked by stars'
          >
            <Suspense fallback='loading...'>
              <TopReposChart data={topReposData} />
            </Suspense>
          </Chart>

          <Chart
            title='Top Language by Stars'
            subtitle='Total stars grouped by language'
          >
            <Suspense fallback='loading...'>
              <StarsLanguageChart data={starsLanguageChartData} />
            </Suspense>
          </Chart>
        </div>

        <div className='chart-section__insights'>
          <div className='chart-section__group'>
            <p className='chart-section__group--paragraph'>
              Most starred language is <strong>JavaScript</strong>
            </p>

            <p className='chart-section__group--paragraph'>
              <strong>overlay-lab</strong> drives the highest engagement
            </p>

            <p className='chart-section__group--paragraph'>
              Total stars across repositories: <strong>20</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChartSection;
