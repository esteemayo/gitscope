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
    >
      {grid && <CartesianGrid strokeDasharray='3 3' />}
      <XAxis dataKey='name' />
      <YAxis width='auto' />
      <Tooltip
        contentStyle={{
          backgroundColor: '#0d1017',
          border: 'none',
          borderRadius: '4px',
        }}
      />
      <Legend align='right' />
      <Bar
        dataKey='value'
        fill='#38bdf8'
        isAnimationActive={isAnimationActive}
      />
      <RechartsDevtools />
    </BarChart>
  );
};

export default TopReposChart;
