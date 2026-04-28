'use client';

import { Pie, PieChart, Tooltip } from 'recharts';
import { RechartsDevtools } from '@recharts/devtools';

import { getChartTheme } from '@/utils/chartTheme';
import { useTheme } from '@/context/ThemeContext';
import { LanguageChartProps } from '@/types/language.chart.type';

const LanguageChart = ({ data, isAnimationActive, defaultIndex }: LanguageChartProps) => {
  const { theme } = useTheme();
  const chartTheme = getChartTheme(theme);

  return (
    <PieChart
      style={{
        width: '100%',
        height: '100%',
        maxWidth: '500px',
        maxHeight: '80vh',
        aspectRatio: 1,
      }}
      responsive
      tabIndex={-1}
    >
      <Pie
        data={data}
        dataKey='value'
        nameKey='name'
        cx='50%'
        cy='50%'
        fill={chartTheme.fill}
        label
        isAnimationActive={isAnimationActive}
        fontFamily='var(--font-mono)'
        fontSize='1.2rem'
        strokeWidth={1}
      />
      <Tooltip
        defaultIndex={defaultIndex}
        contentStyle={{
          padding: '2rem',
          backgroundColor: chartTheme.tooltipBg,
          color: chartTheme.tooltipText,
          border: 'none',
          borderRadius: '4px',
        }}
        cursor={{ opacity: 0.1 }}
      />
      <RechartsDevtools />
    </PieChart>
  );
};

export default LanguageChart;
