'use client';

import { RechartsDevtools } from '@recharts/devtools';
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

import { TopReposChartProps } from '@/types/top.repos.chart.type';

const data = [
  { name: 'albumz-api', value: 12 },
  { name: 'ecommerce-store-api', value: 45 },
  { name: 'hotel-booking-app-api', value: 20 },
  { name: 'hotel-booking-app-client', value: 11 },
  { name: 'next-albumz-client', value: 2 },
];

const TopReposChart = ({ grid, isAnimationActive }: TopReposChartProps) => {
  return (
    <BarChart
      style={{
        width: '100%',
        height: '300px',
        maxWidth: '700px',
        maxHeight: '70vh',
        aspectRatio: 1.618,
      }}
      responsive
      data={data}
      tabIndex={-1}
    >
      {grid && <CartesianGrid strokeDasharray='3 3' />}
      <XAxis
        hide
        dataKey='name'
        fontFamily='var(--font-mono)'
        fontSize='1.2rem'
        color='var(--gray-lightest)'
        stroke='var(--gray-lightest)'
        strokeWidth={1}
        tick={{ fontSize: 10 }}
      />

      <YAxis
        width='auto'
        fontFamily='var(--font-mono)'
        fontSize='1.2rem'
        color='var(--gray-lightest)'
        stroke='var(--gray-lightest)'
        strokeWidth={1}
        tick={{ fontSize: 10 }}
      />

      <Tooltip
        contentStyle={{
          padding: '2rem',
          backgroundColor: '#0d1017',
          border: 'none',
          borderRadius: '4px',
        }}
        cursor={{ opacity: 0.1 }}
      />
      <Legend align='right' />
      <Bar
        dataKey='value'
        name='Repositories'
        fill='#38bdf8'
        isAnimationActive={isAnimationActive}
      />
      <RechartsDevtools />
    </BarChart>
  );
};

export default TopReposChart;
