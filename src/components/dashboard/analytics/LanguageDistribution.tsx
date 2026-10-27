'use client';

import { RechartsDevtools } from '@recharts/devtools';
import { Cell, Pie, PieChart, Tooltip } from 'recharts';

import LanguageTooltip from './LanguageTooltip';
import { LanguageDistributionProps } from '@/types/profile/language/language.distribution.type';

import '../../../styles/components/dashboard/analytics/LanguageDistribution.scss';

type CustomCSSProperties = React.CSSProperties & {
  '--language-color': string;
};

const LanguageDistribution = ({ languages }: LanguageDistributionProps) => {
  const totalBytes = languages.reduce(
    (acc, language) => acc + language.bytes,
    0,
  );

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
            A breakdown of languages across public repositories.
          </p>
        </div>

        <span className='language-distribution__badge'>
          {languages.length} {languages.length === 1 ? 'language' : 'languages'}
        </span>
      </div>

      {languages.length === 0 ? (
        <div className='language-distribution__empty-chart'>
          <p>No language statistics available yet.</p>
        </div>
      ) : (
        <>
          <div className='language-distribution__chart'>
            <PieChart responsive tabIndex={-1}>
              <Pie
                data={languages}
                dataKey='bytes'
                nameKey='name'
                cx='50%'
                cy='50%'
                innerRadius='63%'
                outerRadius='84%'
                paddingAngle={3}
                stroke='none'
              >
                {languages.map((language) => (
                  <Cell key={language.name} fill={language.color} />
                ))}
              </Pie>

              <Tooltip content={<LanguageTooltip />} />

              <RechartsDevtools />
            </PieChart>

            <div className='language-distribution__donot-center'>
              <span>Languages</span>

              <strong>{languages.length}</strong>

              <span>detected</span>
            </div>
          </div>

          <div className='language-distribution__legend'>
            {languages.map((language) => {
              const { name, bytes, color } = language;
              const percentage = (bytes / totalBytes) * 100;

              return (
                <div key={name} className='language-distribution__item'>
                  <span
                    className='language-distribution__dot'
                    style={
                      {
                        '--language-color': color,
                      } as CustomCSSProperties
                    }
                    aria-hidden='true'
                  />

                  <span className='language-distribution__name'>{name}</span>

                  <span className='language-distribution__percentage'>
                    {percentage.toFixed(1)}%
                  </span>
                </div>
              );
            })}
          </div>
        </>
      )}
    </section>
  );
};

export default LanguageDistribution;
