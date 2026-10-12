'use client';

import clsx from 'clsx';
import { Sparkles } from 'lucide-react';

import { SavedInsightsSummaryProps } from '@/types/saved/insights/saved.insights.summary.type';
import '../../../styles/components/saved/insights/SavedInsightsSummary.scss';

const SavedInsightsSummary = ({
  summary,
  className,
  style,
}: SavedInsightsSummaryProps) => {
  return (
    <div className={clsx('saved-insights-summary', className)} style={style}>
      <div className='saved-insights-summary__header'>
        <span className='saved-insights-summary__icon'>
          <Sparkles
            size={18}
            strokeWidth={1.8}
            role='img'
            aria-hidden='true'
            focusable='false'
          />
        </span>

        <div className='saved-insights-summary__content'>
          <h3 className='saved-insights-summary__content--title'>
            Your collection at a glance
          </h3>

          <p className='saved-insights-summary__content--description'>
            A summary of your saved developers.
          </p>
        </div>
      </div>

      <p className='saved-insights-summary__text'>{summary}</p>
    </div>
  );
};

export default SavedInsightsSummary;
