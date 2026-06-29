import LanguageItem from './LanguageItem';
import { LanguageLegendProps } from '@/types/profile/language/language.legend.type';

import '../../../styles/components/profile/languageDistribution/LanguageLegend.scss';

const LanguageLegend = ({ languages }: LanguageLegendProps) => {
  return (
    <ul className='language-legend'>
      {languages?.slice(0, 5).map((language) => (
        <LanguageItem key={language.name} language={language} />
      ))}

      {languages?.length > 5 && (
        <button type='button' className='language-legend__btn'>
          View all languages
        </button>
      )}
    </ul>
  );
};

export default LanguageLegend;
