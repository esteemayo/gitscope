'use client';

import clsx from 'clsx';
import { AnalyticsStepProps } from '@/types/docs/analytics/overview/analytics.step.type';

import '../../../../styles/components/docs/analytics/overview/AnalyticsStep.scss';

const AnalyticsStep = ({
  title,
  description,
  accentColor,
  index,
  className,
  style,
}: AnalyticsStepProps) => {
  return (
    <article
      className={clsx('analytics-step', className)}
      style={
        {
          '--accent-color': accentColor,
          ...style,
        } as React.CSSProperties
      }
    >
      <span className='analytics-step__number'>
        {String(index + 1).padStart(2, '0')}
      </span>

      <div className='analytics-step__body'>
        <h3 className='analytics-step__body--title'>{title}</h3>

        <p className='analytics-step__body--description'>{description}</p>
      </div>
    </article>
  );
};

export default AnalyticsStep;
