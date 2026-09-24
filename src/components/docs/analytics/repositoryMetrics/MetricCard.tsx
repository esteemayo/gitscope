'use client';

import clsx from 'clsx';
import { MetricCardProps } from '@/types/docs/analytics/repositoryMetrics/metric.card.type';

import '../../../../styles/components/docs/analytics/repositoryMetric/MetricCard.scss';

export const MetricCard = ({
  icon: Icon,
  title,
  description,
  accentColor,
  className,
  style,
}: MetricCardProps) => {
  return (
    <article
      className={clsx('metric-card', className)}
      style={
        {
          '--accent-color': accentColor,
          ...style,
        } as React.CSSProperties
      }
    >
      <div className='metric-card__icon'>
        <Icon
          size={20}
          strokeWidth={1.8}
          role='img'
          aria-hidden='true'
          focusable='false'
        />
      </div>

      <div className='metric-card__content'>
        <h3 className='metric-card__content--title'>{title}</h3>

        <p className='metric-card__content--description'>{description}</p>
      </div>
    </article>
  );
};

export default MetricCard;
