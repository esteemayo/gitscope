'use client';

import { LanguageDistributionItem } from '@/types/dashboard/analytics';
import '../../../styles/components/dashboard/analytics/LanguageTooltip.scss';

interface LanguageTooltipProps {
  active?: boolean;
  payload?: Array<{
    payload: LanguageDistributionItem;
  }>;
}

const LanguageTooltip = ({ active, payload }: LanguageTooltipProps) => {
  if (!active || !payload?.length) {
    return null;
  }

  const language = payload[0].payload;

  return (
    <div className='language-tooltip'>
      <h4 className='language-tooltip__title'>{language.name}</h4>

      <p className='language-tooltip__percentage'>
        {language.percentage}% of reported language bytes
      </p>

      <p className='language-tooltip__bytes'>
        {language.bytes.toLocaleString()} bytes
      </p>
    </div>
  );
};

export default LanguageTooltip;
