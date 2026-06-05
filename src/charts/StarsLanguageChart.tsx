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

const TopLanguageChart = ({
  data,
  grid,
  isAnimationActive = true,
}: TopLanguageChartProps) => {
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
      {grid && (
        <CartesianGrid
          stroke={chartTheme.grid}
          strokeDasharray='3 3'
          opacity={0.2}
        />
      )}

      <XAxis
        hide
        dataKey='name'
        fontFamily='var(--font-mono)'
        fontSize='var(--fz-xs'
        color='var(--gray-lightest)'
        stroke={chartTheme.axis}
        strokeWidth={1}
        tick={{ fontSize: 13 }}
      />

      <YAxis
        width='auto'
        fontFamily='var(--font-mono)'
        fontSize='var(--fz-xs'
        color='var(--gray-lightest)'
        stroke={chartTheme.axis}
        strokeWidth={1}
        tick={{ fontSize: 13 }}
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

      <Legend align='right' verticalAlign='top' height={40} />

      <Line
        type='monotone'
        dataKey='value'
        name='Languages'
        dot={{ r: 5 }}
        activeDot={{ r: 8 }}
        stroke={chartTheme.fill}
        strokeWidth={3}
        isAnimationActive={isAnimationActive}
      />

      <RechartsDevtools />
    </LineChart>
  );
};

export default TopLanguageChart;
