'use client';

import type { LucideIcon } from 'lucide-react';
import '../../../styles/components/saved/insights/SavedInsightsStatCard.scss';

interface SavedInsightsStatCardProps {
  label: string;
  value: string;
  description: string;
  icon: LucideIcon | React.ComponentType;
}

const SavedInsightsStatCard = ({
  label,
  value,
  description,
  icon: Icon,
}: SavedInsightsStatCardProps) => {
  return (
    <article className='saved-insights-card'>
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
