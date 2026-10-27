'use client';

import { RechartsDevtools } from '@recharts/devtools';
import { Bar, BarChart, CartesianGrid, Tooltip, XAxis, YAxis } from 'recharts';

import RepositoryTooltip from './RepositoryTooltip';

import { formatNumber } from '@/utils/formatNumber';
import { RepositoryComparisonChartProps } from '@/types/dashboard/analytics/repository.comparison.chart.type';

import '../../../styles/components/dashboard/analytics/RepositoryComparisonChart.scss';

const RepositoryComparisonChart = ({
  repositories,
}: RepositoryComparisonChartProps) => {
  return (
    <section
      className='repository-comparison-chart'
      aria-labelledby='repository-comparison-chart-title'
    >
      <div className='repository-comparison-chart__header'>
        <div className='repository-comparison-chart__heading'>
          <h3
            id='repository-comparison-chart-title'
            className='repository-comparison-chart__heading--title'
          >
            Repository performance
          </h3>

          <p className='repository-comparison-chart__heading--description'>
            Compare stars and forks across selected repositories.
          </p>
        </div>

        <span className='repository-comparison-chart__badge'>
          Repository comparison
        </span>
      </div>

      <div
        className='repository-comparison-chart__container'
        role='img'
        aria-label='Bar chart comparing stars and forks for repositories'
      >
        <BarChart
          style={{
            width: '100%',
            height: '100%',
          }}
          margin={{
            top: 12,
            right: 0,
            left: -16,
            bottom: 4,
          }}
          responsive
          data={repositories}
          tabIndex={-1}
        >
          <CartesianGrid
            stroke='var(--border, #E2E8F0)'
            strokeDasharray='3 5'
            vertical={false}
          />

          <XAxis
            dataKey='name'
            axisLine={false}
            tickLine={false}
            tick={{
              fill: '#64748B',
              fontSize: 11,
            }}
            interval={0}
            angle={-12}
            textAnchor='end'
            height={55}
          />

          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{
              fill: '#64748B',
              fontSize: 11,
            }}
            tickFormatter={(value: number) => formatNumber(value)}
          />

          <Tooltip
            content={<RepositoryTooltip />}
            cursor={{
              fill: 'rgba(148, 163, 184, 0.08)',
            }}
          />

          <Bar
            dataKey='stars'
            name='Stars'
            fill='#F59E0B'
            radius={[5, 5, 0, 0]}
            maxBarSize={26}
          />

          <Bar
            dataKey='forks'
            name='Forks'
            fill='#8B5CF6'
            radius={[5, 5, 0, 0]}
            maxBarSize={26}
          />

          <RechartsDevtools />
        </BarChart>
      </div>

      <div className='repository-comparison-chart__legend'>
        <span>
          <i className='repository-comparison-chart__star-dot' />
          Stars
        </span>

        <span>
          <i className='repository-comparison-chart__fork-dot' />
          Forks
        </span>
      </div>
    </section>
  );
};

export default RepositoryComparisonChart;
