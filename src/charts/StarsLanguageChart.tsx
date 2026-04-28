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
import { TopLanguageChartProps } from '@/types/top.language.chart.type';

const TopLanguageChart = ({ data, grid, isAnimationActive = true }: TopLanguageChartProps) => {
  const { theme } = useTheme();
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
      <Line
        type='monotone'
        dataKey='value'
        name='Languages'
        dot={{ r: 3 }}
        activeDot={{ r: 6 }}
        stroke={chartTheme.fill}
        isAnimationActive={isAnimationActive}
      />
      <RechartsDevtools />
    </LineChart>
  );
};

export default TopLanguageChart;
