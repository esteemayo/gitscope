import MissionChartCard from './MissionChartCard';
import MissionMetrics from './MissionMetrics';
import MissionHealthCard from './MissionHealthCard';

import '../../styles/components/about/MissionDashboard.scss';

const MissionDashboard = () => {
  return (
    <div className='mission-dashboard'>
      <div className='mission-dashboard__header'>
        <div className='mission-dashboard__window-controls'>
          {[...Array(3)].map((_, index) => (
            <span key={index} />
          ))}
        </div>

        <div className='mission-dashboard__title'>GitScope Analytics</div>

        <div className='mission-dashboard__status'>Live</div>
      </div>

      <div className='mission-dashboard__body'>
        <MissionChartCard />

        <MissionMetrics />

        <MissionHealthCard />
      </div>
    </div>
  );
};

export default MissionDashboard;
