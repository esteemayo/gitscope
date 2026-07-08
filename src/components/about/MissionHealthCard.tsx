import { healthProgress } from '@/data/about/healthProgress';
import '../../styles/components/about/MissionHealthCard.scss';

const MissionHealthCard = () => {
  return (
    <div className='mission-health-card'>
      <div className='mission-health-card__header'>
        <h4>Repository health</h4>

        <span>Excellent</span>
      </div>

      <div className='mission-health-card__progress-group'>
        {healthProgress.map((progress) => {
          const { id, label, percentage } = progress;

          return (
            <div key={id} className='mission-health-card__progress-item'>
              <small>{label}</small>

              <div className='mission-health-card__progress'>
                <span style={{ width: `${percentage}%` }} />
              </div>
            </div>
          );
        })}
      </div>

      <div className='mission-health-card__live-chip'>
        <span className='mission-health-card__dot' />
        Live GitHub Data
      </div>

      <div className='mission-health-card__health-chip'>Repository health</div>
    </div>
  );
};

export default MissionHealthCard;
