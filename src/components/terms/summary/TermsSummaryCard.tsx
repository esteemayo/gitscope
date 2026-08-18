'use client';

import clsx from 'clsx';
import { TermsSummaryCardProps } from '@/types/terms/summary/terms.summary.card.type';

import '../../../styles/components/terms/summary/TermsSummaryCard.scss';

const TermsSummaryCard = ({
  title,
  description,
  icon: Icon,
  accentColor,
  count,
  className,
  style,
}: TermsSummaryCardProps) => {
  return (
    <article
      className={clsx('terms-summary-card', className)}
      style={
        {
          '--accent-color': accentColor,
          ...style,
        } as React.CSSProperties
      }
    >
      <header className='terms-summary-card__header'>
        <div className='terms-summary-card__header--icon'>
          <Icon
            size={24}
            strokeWidth={1.8}
            role='img'
            aria-hidden='true'
            focusable='false'
          />
        </div>

        <span className='terms-summary-card__header--number'>
          {String(count).padStart(2, '0')}
        </span>
      </header>

      <div className='terms-summary-card__content'>
        <h3 className='terms-summary-card__content--title'>{title}</h3>

        <p className='terms-summary-card__content--description'>
          {description}
        </p>
      </div>

      <div className='terms-summary-card__accent' />
    </article>
  );
};

export default TermsSummaryCard;
