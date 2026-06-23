import '../../styles/components/profile/CurrentTimeCard.scss';

const CurrentTimeCard = () => {
  return (
    <aside className='current-time-card'>
      <div className='current-time-card__container'>
        <span className='current-time-card__label'>Current time</span>

        <strong className='current-time-card__time'>time</strong>

        <small className='current-time-card__timezone'>timezone</small>
      </div>
    </aside>
  );
};

export default CurrentTimeCard;
