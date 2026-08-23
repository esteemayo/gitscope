'use client';

import AnalyticsMethodologyItem from './AnalyticsMethodologyItem';
import { AnalyticsMethodologyProps } from '@/types/terms/analyticsAccuracy/analytics.methodology.type';

import '../../../styles/components/terms/analyticsAccuracy/AnalyticsMethodology.scss';

const AnalyticsMethodology = ({ methodology }: AnalyticsMethodologyProps) => {
  return (
    <section
      className='analytics-methodology'
      aria-labelledby='analytics-methodology-title'
    >
      <header className='analytics-methodology__header'>
        <div className='analytics-methodology__heading'>
          <span className='analytics-methodology__label'>
            Metric methodology
          </span>

          <h3
            id='analytics-methodology-title'
            className='analytics-methodology__title'
          >
            Where your numbers come from
          </h3>
        </div>

        <p className='analytics-methodology__description'>
          GitScope combines source data with application-level calculations to
          produce the analytics shown in your dashboards
        </p>
      </header>

      <div className='analytics-methodology__table'>
        <div className='analytics-methodology__table-header'>
          <span>Metric</span>

          <span>Classification</span>

          <span>Method</span>
        </div>

        <div className='analytics-methodology__table-rows'>
          {methodology.map((item, index) => (
            <AnalyticsMethodologyItem key={item.id} {...item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AnalyticsMethodology;
