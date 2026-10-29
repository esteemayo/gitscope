'use client';

import { Pie, PieChart, Tooltip } from 'recharts';
import { useMemo } from 'react';
import { RechartsDevtools } from '@recharts/devtools';

import LanguageSector from './LanguageSector';
import LanguageTooltip from './LanguageTooltip';

import { getLanguageColor } from '@/utils/getLanguageColor';
import { formatBytes } from '@/utils/formatBytes';
import { LanguageDistributionProps } from '@/types/dashboard/analytics/language.distribution.type';

import '../../../styles/components/dashboard/analytics/LanguageDistribution.scss';

type CustomCSSProperties = React.CSSProperties & {
  '--language-color': string;
};

const LanguageDistribution = ({ languages }: LanguageDistributionProps) => {
  const validLanguages = useMemo(
    () =>
      languages.filter(
        (language) => Number.isFinite(language.bytes) && language.bytes > 0,
      ),
    [languages],
  );

  const totalBytes = useMemo(
    () => validLanguages.reduce((acc, language) => acc + language.bytes, 0),
    [validLanguages],
  );

  const chartData = useMemo(
    () =>
      validLanguages.map((language) => ({
        ...language,
        percentage: totalBytes > 0 ? (language.bytes / totalBytes) * 100 : 0,
      })),
    [totalBytes, validLanguages],
  );

  if ((chartData ?? []).length === 0) {
    return (
      <section className='language-distribution'>
        <div className='language-distribution__header'>
          <div className='language-distribution__heading'>
            <h3
              id='language-distribution-title'
              className='language-distribution__heading--title'
            >
              Language distribution
            </h3>

            <p className='language-distribution__heading--description'>
              Breakdown of code across repositories.
            </p>
          </div>
        </div>

        <div className='language-distribution__empty-chart'>
          <h4 className='language-distribution__empty-chart--title'>
            No language data available yet.
          </h4>

          <span className='language-distribution__empty-chart--description'>
            Language statistics will appear when repository data is available.
          </span>
        </div>
      </section>
    );
  }

  return (
    <section
      className='language-distribution'
      aria-labelledby='language-distribution-title'
    >
      <div className='language-distribution__header'>
        <div className='language-distribution__heading'>
          <h3
            id='language-distribution-title'
            className='language-distribution__heading--title'
          >
            Language distribution
          </h3>

          <p className='language-distribution__heading--description'>
            Breakdown of code across repositories.
          </p>
        </div>

        <span className='language-distribution__count'>
          {chartData.length} {chartData.length === 1 ? 'language' : 'languages'}
        </span>
      </div>

      <div className='language-distribution__content'>
        <div className='language-distribution__chart'>
          <PieChart
            style={{ width: '100%', height: '100%' }}
            responsive
            tabIndex={-1}
          >
            <Pie
              data={chartData}
              dataKey='bytes'
              nameKey='name'
              cx='50%'
              cy='50%'
              innerRadius='63%'
              outerRadius='84%'
              paddingAngle={3}
              stroke='none'
              shape={(props) => (
                <LanguageSector {...props} languages={validLanguages} />
              )}
              isAnimationActive
              animationDuration={700}
            />

            <Tooltip content={<LanguageTooltip />} />

            <RechartsDevtools />
          </PieChart>

          <div className='language-distribution__center' aria-hidden='true'>
            <span className='language-distribution__center--label'>
              Total code
            </span>

            <strong className='language-distribution__center--value'>
              {formatBytes(totalBytes)}
            </strong>
          </div>
        </div>

        <ul
          className='language-distribution__legend'
          aria-label='Language breakdown'
        >
          {chartData.map((language) => {
            const { name, bytes, color, percentage } = language;
            const languageColor = getLanguageColor(name);

            return (
              <li key={name} className='language-distribution__item'>
                <div className='language-distribution__language'>
                  <span
                    className='language-distribution__language--dot'
                    style={
                      {
                        '--language-color': languageColor ?? color,
                      } as CustomCSSProperties
                    }
                    aria-hidden='true'
                  />

                  <span className='language-distribution__language--name'>
                    {name}
                  </span>
                </div>

                <div className='language-distribution__stats'>
                  <strong className='language-distribution__stats--percentage'>
                    {percentage.toFixed(1)}%
                  </strong>

                  <span className='language-distribution__stats--bytes'>
                    {formatBytes(bytes)}
                  </span>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default LanguageDistribution;
