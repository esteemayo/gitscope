import Achievement from './Achievement';
import '../../styles/components/profile/Achievements.scss';

const Achievements = () => {
  return (
    <section className='achievements' aria-labelledby='achievements-title'>
      <div className='achievements__container'>
        <h2 id='achievements-title' className='achievements__title'>
          Achievements
        </h2>

        <div className='achievements__list'>
          {[...Array(4)].map((_, index) => (
            <Achievement key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
