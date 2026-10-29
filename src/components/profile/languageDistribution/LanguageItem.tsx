import clsx from 'clsx';

import { getLanguageColor } from '@/utils/getLanguageColor';
import { formatBytes } from '@/utils/formatBytes';
import { LanguageItemProps } from '@/types/profile/language/language.item.type';

import '../../../styles/components/profile/languageDistribution/LanguageItem.scss';

type CustomCSSProperties = React.CSSProperties & {
  '--language-color': string;
};

const LanguageItem = ({
  name,
  percentage,
  bytes,
  color,
  className,
  style,
}: LanguageItemProps) => {
  const languageColor = getLanguageColor(name);

  return (
    <li
      className={clsx('language-item', className)}
      style={
        {
          '--language-color': languageColor ?? color,
          ...style,
        } as CustomCSSProperties
      }
    >
      <div className='language-item__top'>
        <div className='language-item__info'>
          <span className='language-item__dot' aria-hidden='true' />

          <span className='language-item__name'>{name}</span>
        </div>

        <div className='language-item__meta'>
          <span className='language-item__meta--percentage'>
            {percentage.toFixed(1)}%
          </span>

          <small className='language-item__meta--size'>
            {formatBytes(bytes)}
          </small>
        </div>
      </div>

      <div className='language-item__progress' aria-hidden='true'>
        <div
          className='language-item__progress--fill'
          style={{ width: `${percentage}%` }}
        />
      </div>
    </li>
  );
};

export default LanguageItem;
