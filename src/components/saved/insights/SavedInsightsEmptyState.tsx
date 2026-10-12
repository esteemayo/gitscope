'use client';

import clsx from 'clsx';
import { Bookmark } from 'lucide-react';

import { SavedInsightsEmptyStateProps } from '@/types/saved/insights/saved.insights.empty.state.type';
import '../../../styles/components/saved/insights/SavedInsightsEmptyState.scss';

const SavedInsightsEmptyState = ({
  title,
  description,
  className,
  style,
}: SavedInsightsEmptyStateProps) => {
  return (
    <div
      className={clsx('saved-insights-empty-state', className)}
      style={style}
    >
      <div className='saved-insights-empty-state__icon'>
        <Bookmark
          size={24}
          strokeWidth={1.8}
          role='img'
          aria-hidden='true'
          focusable='false'
        />
      </div>

      <h3 className='saved-insights-empty-state__title'>{title}</h3>

      <p className='saved-insights-empty-state__description'>{description}</p>
    </div>
  );
};

export default SavedInsightsEmptyState;
