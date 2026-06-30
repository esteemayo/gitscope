import LanguageLegend from './LanguageLegend';
import LanguageChart from './LanguageChart';
import ProfileHeading from '../ProfileHeading';

import { LanguageDistributionProps } from '@/types/profile/language/language.distribution.type';
import '../../../styles/components/profile/languageDistribution/LanguageDistribution.scss';

const LanguageDistribution = ({ languages }: LanguageDistributionProps) => {
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
            aria-label={`${languages?.length} languages`}
          >
            {languages?.length}{' '}
            {languages?.length > 1 ? 'Languages' : 'Language'}
          </span>
        </header>

        <div className='language-distribution__content'>
          <LanguageChart languages={languages} />

          <LanguageLegend languages={languages} />
        </div>
      </div>
    </section>
  );
};

export default LanguageDistribution;
