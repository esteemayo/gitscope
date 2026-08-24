'use client';

import AnalyticsLimitation from './AnalyticsLimitation';
import { AnalyticsLimitationsProps } from '@/types/terms/analyticsAccuracy/analytics.limitations.type';

import '../../../styles/components/terms/analyticsAccuracy/AnalyticsLimitations.scss';

const AnalyticsLimitations = ({ items }: AnalyticsLimitationsProps) => {
  return (
    <div className='analytics-limitations'>
      <div className='analytics-limitations__heading'>
        <span className='analytics-limitations__heading--label'>
          Known variables
        </span>

        <h3 className='analytics-limitations__heading--title'>
          What can affect accuracy?
        </h3>
      </div>

      <div className='analytics-limitations__list'>
        {items.map((item, index) => (
          <AnalyticsLimitation key={item.id} {...item} index={index} />
        ))}
      </div>
    </div>
  );
};

export default AnalyticsLimitations;
