'use client';

import clsx from 'clsx';
import { LanguageItemProps } from '@/types/docs/analytics/language/language.item.type';

import '../../../../styles/components/docs/analytics/language/LanguageItem.scss';

const LanguageItem = ({
  label,
  description,
  accentColor,
  className,
  style,
}: LanguageItemProps) => {
  return (
    <div
      className={clsx('language-item', className)}
      style={
        {
          '--accent-color': accentColor,
          ...style,
        } as React.CSSProperties
      }
    >
      <span className='language-item__marker' aria-hidden='true' />

      <div className='language-item__content'>
        <h3 className='language-item__content--label'>{label}</h3>

        <p className='language-item__content--description'>{description}</p>
      </div>
    </div>
  );
};

export default LanguageItem;
