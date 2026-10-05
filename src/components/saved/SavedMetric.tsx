'use client';

import { SavedMetricProps } from '@/types/saved/saved.metric.type';
import '../../styles/components/saved/SavedMetric.scss';

const SavedMetric = ({ value, label, icon: Icon }: SavedMetricProps) => {
  return (
    <div className='saved-metric'>
      <strong className='saved-metric__value'>
        {Icon && (
          <Icon
            size={12}
            strokeWidth={1.8}
            role='img'
            aria-hidden='true'
            focusable='false'
          />
        )}

        {value.toLocaleString()}
      </strong>

      <span className='saved-metric__label'>{label}</span>
    </div>
  );
};

export default SavedMetric;
