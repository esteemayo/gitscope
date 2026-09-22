'use client';

import clsx from 'clsx';
import { MetricRowProps } from '@/types/docs/compare/metric.row.type';

import '../../styles/components/docs/MetricRow.scss';

const MetricRow = ({
  label,
  firstValue,
  secondValue,
  difference,
  accentColor,
  className,
  style,
}: MetricRowProps) => {
  return (
    <div
      className={clsx('metric-row', className)}
      style={
        {
          '--accent-color': accentColor,
          ...style,
        } as React.CSSProperties
      }
    >
      <div className='metric-row__label'>
        <span>{label}</span>

        <strong>{difference}</strong>
      </div>

      <div className='metric-row__values'>
        <span>{firstValue}</span>

        <span>{secondValue}</span>
      </div>
    </div>
  );
};

export default MetricRow;
