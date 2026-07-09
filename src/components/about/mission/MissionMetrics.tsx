import millify from 'millify';
import { missionMetrics } from '@/data/about/missionMetrics';

import '../../../styles/components/about/mission/MissionMetrics.scss';

const MissionMetrics = () => {
  return (
    <div className='mission-metric'>
      {missionMetrics.map((metric) => {
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
