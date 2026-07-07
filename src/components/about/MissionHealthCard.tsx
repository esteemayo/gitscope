import '../../styles/components/about/MissionHealthCard.scss';

const MissionHealthCard = () => {
  return (
    <div className='mission-health-card'>
      <div className='mission-health-card__header'>
        <h4>Repository health</h4>

        <span>Excellent</span>
      </div>

      <div className='mission-health-card__progress-group'>
        <div className='mission-health-card__progress-item'>
          <small>Code quality</small>

          <div className='mission-health-card__progress'>
            <span style={{ width: '92%' }} />
          </div>
        </div>

        <div className='mission-health-card__progress-item'>
          <small>Documentation</small>

          <div className='mission-health-card__progress'>
            <span style={{ width: '84%' }} />
          </div>
        </div>

        <div className='mission-health-card__progress-item'>
          <small>Activity</small>

          <div className='mission-health-card__progress'>
            <span style={{ width: '97%' }} />
          </div>
        </div>
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
