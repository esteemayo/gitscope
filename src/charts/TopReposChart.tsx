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

import { getChartTheme } from '@/utils/chartTheme';
import { useTheme } from '@/context/ThemeContext';
import { TopReposChartProps } from '@/types/top.repos.chart.type';

const TopReposChart = ({ data, grid, isAnimationActive }: TopReposChartProps) => {
  const { theme } = useTheme();
  const chartTheme = getChartTheme(theme);

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
      {grid && <CartesianGrid stroke={chartTheme.grid} strokeDasharray='3 3' />}

      <XAxis
        hide
        dataKey='name'
        fontFamily='var(--font-mono)'
        fontSize='1.2rem'
        color='var(--gray-lightest)'
        stroke={chartTheme.axis}
        strokeWidth={1}
        tick={{ fontSize: 10 }}
      />

      <YAxis
        width='auto'
        fontFamily='var(--font-mono)'
        fontSize='1.2rem'
        color='var(--gray-lightest)'
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
      <Bar
        dataKey='value'
        name='Repositories'
        fill={chartTheme.fill}
        isAnimationActive={isAnimationActive}
      />
      <RechartsDevtools />
    </BarChart>
  );
};

export default TopReposChart;
