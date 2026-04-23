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

const data = [
  { date: '2023-11', userA: 1, userB: 0 },
  { date: '2023-12', userA: 2, userB: 1 },
  { date: '2024-01', userA: 8, userB: 3 },
  { date: '2024-02', userA: 6, userB: 2 },
  { date: '2024-03', userA: 10, userB: 5 },
  { date: '2024-04', userA: 3, userB: 6 },
  { date: '2024-05', userA: 7, userB: 4 },
];

const CompareTimeline = ({ grid, isAnimationActive }: { grid?: boolean, isAnimationActive?: boolean }) => {
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
        dataKey='date'
        fontFamily='var(--font-mono)'
        fontSize='1.2rem'
        color='var(--gray-lightest)'
        stroke='var(--gray-lightest)'
        strokeWidth={1}
      />

      <YAxis
        width='auto'
        fontFamily='var(--font-mono)'
        fontSize='1.2rem'
        color='var(--gray-lightest)'
        stroke='var(--gray-lightest)'
        strokeWidth={1}
      />
      <Tooltip
        contentStyle={{
          padding: '2rem',
          backgroundColor: '#0d1017',
          border: 'none',
          borderRadius: '4px',
        }}
      />
      <Legend align='right' />
      <Line
        type='monotone'
        dataKey='userA'
        stroke='#38bdf8'
        isAnimationActive={isAnimationActive}
      />
      <Line
        type='monotone'
        dataKey='userB'
        stroke='#1f6fea'
        isAnimationActive={isAnimationActive}
      />
      <RechartsDevtools />
    </LineChart>
  );
};

export default CompareTimeline;
