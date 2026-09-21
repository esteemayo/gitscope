'use client';

import clsx from 'clsx';
import { AnalyticsCardProps } from '@/types/docs/githubAnalytics/analytics.card.type';

import '../../styles/components/docs/AnalyticsCard.scss';

const AnalyticsCard = ({
  title,
  description,
  accentColor,
  children,
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

        {children}
      </div>
    </article>
  );
};

export default AnalyticsCard;
