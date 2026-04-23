'use client';

import { Pie, PieChart, Tooltip } from 'recharts';
import { RechartsDevtools } from '@recharts/devtools';

import { LanguageChartProps } from '@/types/language.chart.type';

const data = [
  { name: 'JavaScript', value: 12 },
  { name: 'TypeScript', value: 45 },
  { name: 'SCSS', value: 20 },
  { name: 'CSS', value: 11 },
];

const LanguageChart = ({ isAnimationActive, defaultIndex }: LanguageChartProps) => {
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
        // outerRadius='50%'
        fill='#38bdf8'
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
          backgroundColor: '#0d1017',
          border: 'none',
          borderRadius: '4px',
        }}
      />
      <RechartsDevtools />
    </PieChart>
  );
};

export default LanguageChart;
