'use client';

import clsx from 'clsx';
import { AnalyticsCardProps } from '@/types/docs/analytics/overview/analytics.card.type';

import '../../../../styles/components/docs/analytics/overview/AnalyticsCard.scss';

const AnalyticsCard = ({
  title,
  description,
  accentColor,
  items,
  className,
  style,
}: AnalyticsCardProps) => {
  return (
    <article
      className={clsx('analytics-card', className)}
      style={
        {
          '--accent-color': accentColor,
          ...style,
        } as React.CSSProperties
      }
    >
      <span className='analytics-card__indicator' aria-hidden='true' />

      <div className='analytics-card__content'>
        <h3 className='analytics-card__content--title'>{title}</h3>

        <p className='analytics-card__content--description'>{description}</p>

        <ul>
          {items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </article>
  );
};

export default AnalyticsCard;
