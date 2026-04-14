import '../../styles/components/StatsCards.scss';

const StatsCards = () => {
  return (
    <section className='stats-cards'>
      <div className='stats-cards__container'>
        <div className='stats-cards__wrapper'>
          <article className='stats-cards__item'>
            <h4 className='stats-cards__item--heading'>Total stars</h4>
            <span className='stats-cards__item--count'>200</span>
          </article>

          <article className='stats-cards__item'>
            <h4 className='stats-cards__item--heading'>Total forks</h4>
            <span className='stats-cards__item--count'>0</span>
          </article>
        </div>
      </div>
    </section>
  );
};

export default StatsCards;
