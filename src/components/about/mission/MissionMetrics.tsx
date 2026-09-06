import millify from 'millify';
import { MissionMetricsProps } from '@/types/about/mission/mission.metrics.type';

import '../../../styles/components/about/mission/MissionMetrics.scss';

const MissionMetrics = ({ metrics }: MissionMetricsProps) => {
  return (
    <div className='mission-metric'>
      {metrics.map((metric) => {
        const { id, label, value, trendLabel } = metric;

        return (
          <article key={id} className='mission-metric__card'>
            <small className='mission-metric__card--label'>{label}</small>

            <strong className='mission-metric__card--value'>
              {millify(value)}
            </strong>

            <span className='mission-metric__card--trend-label'>
              {trendLabel}
            </span>
          </article>
        );
      })}
    </div>
  );
};

export default MissionMetrics;
