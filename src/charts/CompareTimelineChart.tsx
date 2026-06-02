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

import { getChartTheme } from '@/utils/chartTheme';
import { useTheme } from '@/context/ThemeContext';
import { CompareTimelineChartProps } from '@/types/compare/compare.timeline.chart.type';

const data = [
  { month: 'Jan', userA: 10, userB: 5 },
  { month: 'Feb', userA: 20, userB: 15 },
  { month: 'Mar', userA: 5, userB: 25 },
  { month: 'Apr', userA: 30, userB: 10 },
  { month: 'May', userA: 15, userB: 20 },
  { month: 'Jun', userA: 40, userB: 30 },
  { month: 'Jul', userA: 25, userB: 40 },
  { month: 'Aug', userA: 25, userB: 40 },
  { month: 'Sep', userA: 35, userB: 60 },
  { month: 'Oct', userA: 27, userB: 15 },
  { month: 'Nov', userA: 50, userB: 30 },
  { month: 'Dec', userA: 90, userB: 50 },
];

const CompareTimelineChart = ({
  grid,
  isAnimationActive,
}: CompareTimelineChartProps) => {
  const { theme } = useTheme();

  const isDark = theme === 'dark';
  const chartTheme = getChartTheme(theme);

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
      {grid && <CartesianGrid stroke={chartTheme.grid} strokeDasharray='3 3' />}

      <XAxis
        dataKey='month'
        fontFamily='var(--font-mono)'
        fontSize='1.2rem'
        color={chartTheme.axis}
        stroke={chartTheme.axis}
        strokeWidth={1}
        tick={{ fontSize: 10 }}
      />

      <YAxis
        width='auto'
        fontFamily='var(--font-mono)'
        fontSize='1.2rem'
        color={chartTheme.axis}
        stroke={chartTheme.axis}
        strokeWidth={1}
        tick={{ fontSize: 10 }}
      />

      <Tooltip
        contentStyle={{
          padding: '2rem',
          backgroundColor: chartTheme.tooltipBg,
          color: chartTheme.tooltipText,
          border: 'none',
          borderRadius: '4px',
        }}
        cursor={{ opacity: 0.1 }}
      />

      <Legend align='right' />

      <Line
        type='monotone'
        dataKey='userA'
        name='User A'
        dot={{ r: 3 }}
        activeDot={{ r: 6 }}
        stroke={isDark ? '#38bdf8' : '#1f6fea'}
        isAnimationActive={isAnimationActive}
      />

      <Line
        type='monotone'
        dataKey='userB'
        name='User B'
        dot={{ r: 3 }}
        activeDot={{ r: 6 }}
        stroke='#10b981'
        isAnimationActive={isAnimationActive}
      />

      <RechartsDevtools />
    </LineChart>
  );
};

export default CompareTimelineChart;
