'use client';

import { useMemo } from 'react';

import LanguageLegend from './LanguageLegend';
import LanguageChart from './LanguageChart';
import ProfileHeading from '../ProfileHeading';

import { LanguageDistributionProps } from '@/types/profile/language/language.distribution.type';
import '../../../styles/components/profile/languageDistribution/LanguageDistribution.scss';

const LanguageDistribution = ({ languages }: LanguageDistributionProps) => {
  const validLanguages = useMemo(
    () =>
      languages.filter(
        (language) => Number.isFinite(language.bytes) && language.bytes > 0,
      ),
    [languages],
  );

  return (
    <section
      className='language-distribution'
      aria-labelledby='language-distribution-heading'
    >
      <div className='language-distribution__container'>
        <header className='language-distribution__header'>
          <div className='language-distribution__group'>
            <ProfileHeading
              id='language-distribution-heading'
              title='Language Distribution'
              description='Your technology stack across all public repositories.'
            />
          </div>

          <span
            className='language-distribution__count'
            aria-label={`${(validLanguages ?? []).length} languages`}
          >
            {(validLanguages ?? []).length}{' '}
            {(validLanguages ?? []).length > 1 ? 'Languages' : 'Language'}
          </span>
        </header>

        <div className='language-distribution__content'>
          <LanguageChart languages={validLanguages} />

          <LanguageLegend languages={validLanguages} />
        </div>
      </div>
    </section>
  );
};

export default LanguageDistribution;
