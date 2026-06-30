'use client';

import { ChevronDownIcon } from 'lucide-react';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import LanguageItem from './LanguageItem';
import { LanguageLegendProps } from '@/types/profile/language/language.legend.type';

import '../../../styles/components/profile/languageDistribution/LanguageLegend.scss';

const LanguageLegend = ({ languages }: LanguageLegendProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const INITIAL_VISIBLE_LANGUAGES = 5;

  const visibleLanguages = languages.slice(0, INITIAL_VISIBLE_LANGUAGES);
  const hiddenLanguages = languages.slice(INITIAL_VISIBLE_LANGUAGES);

  const remainingCount = hiddenLanguages.length;
  const hasHiddenLanguages = hiddenLanguages.length > 0;

  return (
    <ul className='language-legend'>
      {visibleLanguages.map((language) => (
        <LanguageItem key={language.name} language={language} />
      ))}

      <AnimatePresence initial={false}>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className='language-legend__hidden'
          >
            {hiddenLanguages?.map((language) => (
              <LanguageItem key={language.name} language={language} />
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {hasHiddenLanguages && (
        <div className='language-legend__action'>
          <button
            type='button'
            onClick={() => setIsExpanded((prev) => !prev)}
            className='language-legend__action--btn'
            aria-expanded={isExpanded}
          >
            <span>
              {!isExpanded ? `+${remainingCount} more languages` : 'Show less'}
            </span>

            <motion.span animate={{ rotate: isExpanded ? 180 : 0 }}>
              <ChevronDownIcon size={16} />
            </motion.span>
          </button>
        </div>
      )}
    </ul>
  );
};

export default LanguageLegend;
