'use client';

import '../../styles/components/docs/MetricRow.scss';

type MetricRowProps = {
  label: string;
  firstValue: string;
  secondValue: string;
  difference: string;
  accentColor: string;
};

const MetricRow = ({
  label,
  firstValue,
  secondValue,
  difference,
  accentColor,
}: MetricRowProps) => {
  return (
    <div
      className='metric-row'
      style={
        {
          '--accent-color': accentColor,
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
