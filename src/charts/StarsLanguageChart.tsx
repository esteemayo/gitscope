'use client';

import { RechartsDevtools } from '@recharts/devtools';
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

import { TopLanguageChartProps } from '@/types/top.language.chart.type';

const data = [
  { name: 'albumz-api', value: 12 },
  { name: 'ecommerce-store-api', value: 45 },
  { name: 'hotel-booking-app-api', value: 20 },
  { name: 'hotel-booking-app-client', value: 11 },
  { name: 'next-albumz-client', value: 2 },
];

const TopLanguageChart = ({ grid, isAnimationActive = true }: TopLanguageChartProps) => {
  return (
    <LineChart
      style={{
        width: '100%',
        height: '300px',
        maxWidth: '700px',
        maxHeight: '70vh',
        aspectRatio: 1.618,
      }}
      responsive
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
      tabIndex={-1}
    >
      {grid && <CartesianGrid strokeDasharray='3 3' />}
      <XAxis
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
      <Line
        type='monotone'
        dataKey='value'
        name='Languages'
        dot={{ r: 3 }}
        activeDot={{ r: 6 }}
        stroke='#38bdf8'
        isAnimationActive={isAnimationActive}
      />
      <RechartsDevtools />
    </LineChart>
  );
};

export default TopLanguageChart;
