'use client';

import { getLanguageColor } from '@/utils/getLanguageColor';
import { formatRepoSize } from '@/utils/formatRepoSize';
import { LanguageDistributionItem } from '@/types/dashboard/analytics';

import '../../../styles/components/dashboard/analytics/LanguageTooltip.scss';

type CustomCSSProperties = React.CSSProperties & {
  '--language-color': string;
};

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

  const languageColor = getLanguageColor(language.name);

  return (
    <div className='language-tooltip'>
      <span
        className='language-tooltip__indicator'
        style={
          {
            '--language-color': languageColor ?? language.color,
          } as CustomCSSProperties
        }
        aria-hidden='true'
      />

      <div className='language-tooltip__content'>
        <h4 className='language-tooltip__content--name'>{language.name}</h4>

        <p className='language-tooltip__content--value'>
          {formatRepoSize(language.bytes)}
        </p>
      </div>
    </div>
  );
};

export default LanguageTooltip;
