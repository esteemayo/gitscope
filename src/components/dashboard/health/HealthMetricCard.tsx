import clsx from 'clsx';
import { Activity } from 'lucide-react';

import '../../../styles/components/dashboard/health/HealthMetricCard.scss';

const HealthMetricCard = () => {
  return (
    <article className={clsx('health-metric-card')}>
      <div className='health-metric-card__header'>
        <div className='health-metric-card__icon'>Icon</div>

        <span className='health-metric-card__indicator'>
          <Activity
            size={15}
            strokeWidth={1.8}
            role='img'
            aria-hidden='true'
            focusable='false'
          />
        </span>
      </div>

      <div className='health-metric-card__content'>
        <span className='health-metric-card__content--label'>label</span>

        <strong className='health-metric-card__content--value'>value</strong>

        <span className='health-metric-card__content--description'>
          description
        </span>
      </div>
    </article>
  );
};

export default HealthMetricCard;
