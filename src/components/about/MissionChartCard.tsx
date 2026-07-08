import MissionChart from './MissionChart';
import '../../styles/components/about/MissionChartCard.scss';

const MissionChartCard = () => {
  return (
    <div className='mission-chart-card'>
      <div className='mission-chart-card__header'>
        <small>Repository activity</small>

        <h4>Contribution trend</h4>
      </div>

      <span className='mission-chart-card__success-badge'>+24%</span>

      <MissionChart />
    </div>
  );
};

export default MissionChartCard;
