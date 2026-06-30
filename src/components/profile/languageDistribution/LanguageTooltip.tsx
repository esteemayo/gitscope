'use client';

import { motion } from 'framer-motion';

import { formatRepoSize } from '@/utils/formatRepoSize';
import { LanguageTooltipProps } from '@/types/profile/language/language.tooltip.type';

import '../../../styles/components/profile/languageDistribution/LanguageTooltip.scss';

const LanguageTooltip = ({ active, payload }: LanguageTooltipProps) => {
  if (!active || !payload?.length) {
    return null;
  }

  const language = payload[0].payload;

  return (
    <motion.div
      initial={{ opacity: 0, y: 8, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 8, scale: 0.96 }}
      transition={{ type: 'spring', stiffness: 380, damping: 28 }}
      className='language-tooltip'
    >
      <div className='language-tooltip__header'>
        <span
          className='language-tooltip__header--dot'
          style={{ backgroundColor: language.color }}
        />

        <strong className='language-tooltip__header--label'>
          {language.name}
        </strong>
      </div>

      <div className='language-tooltip__content'>
        <p className='language-tooltip__content--value'>
          {language.percentage.toFixed(1)}%
        </p>

        <span className='language-tooltip__content--size'>
          {formatRepoSize(language.bytes)}
        </span>
      </div>
    </motion.div>
  );
};

export default LanguageTooltip;
