'use client';

import { SavedInsightsStatCardProps } from '@/types/saved/insights/saved.insights.stat.card.type';
import '../../../styles/components/saved/insights/SavedInsightsStatCard.scss';

const SavedInsightsStatCard = ({
  label,
  value,
  description,
  icon: Icon,
  accentColor,
}: SavedInsightsStatCardProps) => {
  return (
    <article
      className='saved-insights-card'
      style={
        {
          '--accent-color': accentColor,
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
