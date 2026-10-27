import AnalyticsMetric from './AnalyticsMetric';
import { AnalyticsMetricsProps } from '@/types/dashboard/analytics/analytics.metrics.type';

import '../../../styles/components/dashboard/analytics/AnalyticsMetrics.scss';

const AnalyticsMetrics = ({ metrics }: AnalyticsMetricsProps) => {
  return (
    <div className='analytics-metrics'>
      {metrics.map((metric) => (
        <AnalyticsMetric key={metric.id} {...metric} />
      ))}
    </div>
  );
};

export default AnalyticsMetrics;
