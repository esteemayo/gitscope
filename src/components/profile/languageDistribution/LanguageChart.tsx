'use client';

import { Pie, PieChart, Tooltip } from 'recharts';
import { useState } from 'react';
import { RechartsDevtools } from '@recharts/devtools';

import LanguageTooltip from './LanguageTooltip';

import { getChartTheme } from '@/utils/chartTheme';
import { useTheme } from '@/context/ThemeContext';
import { LanguageChartProps } from '@/types/profile/language/language.chart.type';

import '../../../styles/components/profile/languageDistribution/LanguageChart.scss';

const LanguageChart = ({
  languages,
  isAnimationActive,
  defaultIndex,
}: LanguageChartProps) => {
  const { theme } = useTheme();
  const chartTheme = getChartTheme(theme);

  const [isTooltipActive, setIsTooltipActive] = useState(false);

  const totalBytes = languages?.reduce(
    (acc, language) => acc + language.bytes,
    0,
  );

  return (
    <div className='language-chart'>
      <div className='language-chart__container' aria-hidden='true'>
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
            data={languages}
            dataKey='percentage'
            nameKey='name'
            cx='50%'
            cy='50%'
            fill={chartTheme.fill}
            isAnimationActive={isAnimationActive}
            innerRadius={72}
            outerRadius={82}
            paddingAngle={3}
            cornerRadius={8}
            stroke='transparent'
            animationBegin={150}
            animationDuration={900}
            onMouseEnter={() => setIsTooltipActive(true)}
            onMouseLeave={() => setIsTooltipActive(false)}
            tabIndex={-1}
          />

          <Tooltip
            defaultIndex={defaultIndex}
            cursor={false}
            content={<LanguageTooltip />}
            offset={20}
          />
          <RechartsDevtools />
        </PieChart>

        <div
          className={
            isTooltipActive
              ? 'language-chart__center hidden'
              : 'language-chart__center visible'
          }
        >
          <strong className='language-chart__center--count'>
            {languages?.length}
          </strong>

          <span className='language-chart__center--label'>
            {languages?.length > 1 ? 'Languages' : 'Language'}
          </span>

          <small className='language-chart__center--size'>
            {Math.round(totalBytes / 1024).toFixed(0)} kb
          </small>
        </div>
      </div>
    </div>
  );
};

export default LanguageChart;
