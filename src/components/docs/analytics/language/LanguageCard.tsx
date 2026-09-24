'use client';

import clsx from 'clsx';
import { LanguageCardProps } from '@/types/docs/analytics/language/language.card.type';

import '../../../../styles/components/docs/analytics/language/LanguageCard.scss';

const LanguageCard = ({
  icon: Icon,
  title,
  description,
  accentColor,
  className,
  style,
}: LanguageCardProps) => {
  return (
    <article
      className={clsx('language-card', className)}
      style={
        {
          '--accent-color': accentColor,
          ...style,
        } as React.CSSProperties
      }
    >
      <div className='language-card__icon'>
        <Icon
          size={20}
          strokeWidth={1.8}
          role='img'
          aria-hidden='true'
          focusable='false'
        />
      </div>

      <div className='language-card__content'>
        <h3 className='language-card__content--title'>{title}</h3>

        <p className='language-card__content--description'>{description}</p>
      </div>
    </article>
  );
};

export default LanguageCard;
