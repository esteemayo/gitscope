'use client';

import clsx from 'clsx';
import { SavedInsightsStatCardProps } from '@/types/saved/insights/saved.insights.stat.card.type';

import '../../../styles/components/saved/insights/SavedInsightsStatCard.scss';

const SavedInsightsStatCard = ({
  label,
  value,
  description,
  icon: Icon,
  accentColor,
  className,
  style,
}: SavedInsightsStatCardProps) => {
  return (
    <article
      className={clsx('saved-insights-card', className)}
      style={
        {
          '--accent-color': accentColor,
          ...style,
        } as React.CSSProperties
      }
    >
      <div className='saved-insights-card__icon'>
        <Icon
          size={19}
          strokeWidth={1.8}
          role='img'
          aria-hidden='true'
          focusable='false'
        />
      </div>

      <div className='saved-insights-card__content'>
        <span className='saved-insights-card__content--label'>{label}</span>

        <strong className='saved-insights-card__content--value'>{value}</strong>

        <p className='saved-insights-card__content--description'>
          {description}
        </p>
      </div>
    </article>
  );
};

export default SavedInsightsStatCard;
