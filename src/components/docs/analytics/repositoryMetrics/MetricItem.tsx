'use client';

import clsx from 'clsx';
import { MetricItemProps } from '@/types/docs/analytics/repositoryMetrics/metric.item.type';

import '../../../../styles/components/docs/analytics/repositoryMetric/MetricItem.scss';

const MetricItem = ({
  label,
  description,
  accentColor,
  className,
  style,
}: MetricItemProps) => {
  return (
    <div
      className={clsx('metric-item', className)}
      style={
        {
          '--accent-color': accentColor,
          ...style,
        } as React.CSSProperties
      }
    >
      <span className='metric-item__marker' aria-hidden='true' />

      <div className='metric-item__content'>
        <h3 className='metric-item__content--label'>{label}</h3>

        <p className='metric-item__content--description'>{description}</p>
      </div>
    </div>
  );
};

export default MetricItem;
