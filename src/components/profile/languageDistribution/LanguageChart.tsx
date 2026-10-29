'use client';

import { Pie, PieChart, Tooltip } from 'recharts';
import { useMemo, useState } from 'react';
import { RechartsDevtools } from '@recharts/devtools';

import LanguageTooltip from './LanguageTooltip';
import LanguageChartSector from './LanguageChartSector';

import { formatBytes } from '@/utils/formatBytes';
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

  const totalBytes = useMemo(
    () => languages?.reduce((acc, language) => acc + language.bytes, 0),
    [languages],
  );

  const chartData = useMemo(
    () =>
      languages.map((language) => ({
        ...language,
        percentage: totalBytes > 0 ? (language.bytes / totalBytes) * 100 : 0,
      })),
    [totalBytes, languages],
  );

  return (
    <div className='language-chart'>
      <div className='language-chart__container' aria-hidden='true'>
        <PieChart
          style={{ width: '100%', height: '100%' }}
          responsive
          tabIndex={-1}
        >
          <Pie
            data={chartData}
            dataKey='percentage'
            nameKey='name'
            cx='50%'
            cy='50%'
            fill={chartTheme.fill}
            innerRadius='63%'
            outerRadius='84%'
            paddingAngle={3}
            cornerRadius={8}
            stroke='none'
            shape={(props) => (
              <LanguageChartSector {...props} languages={languages} />
            )}
            isAnimationActive={isAnimationActive}
            animationBegin={150}
            animationDuration={700}
            onMouseEnter={() => setIsTooltipActive(true)}
            onMouseLeave={() => setIsTooltipActive(false)}
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
            {(languages ?? []).length}
          </strong>

          <span className='language-chart__center--label'>
            {(languages ?? []).length > 1 ? 'Languages' : 'Language'}
          </span>

          <small className='language-chart__center--size'>
            {formatBytes(totalBytes)}
          </small>
        </div>
      </div>
    </div>
  );
};

export default LanguageChart;
