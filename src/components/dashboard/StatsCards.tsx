import StatsCard from './StatsCard';
import Fork from '../icons/Fork';
import ChartBar from '../icons/ChartBar';
import Star from '../icons/Star';

import '../../styles/components/StatsCards.scss';

const StatsCards = () => {
  return (
    <section className='stats-cards'>
      <div className='stats-cards__container'>
        <div className='stats-cards__wrapper'>
          <StatsCard
            label='Total stars'
            value={210}
            delta={12}
            hint='Across all repositories'
            icon={<Star />}
          />

          <StatsCard
            label='Total forks'
            value={0}
            delta={0}
            hint='Community usage'
            icon={<Fork />}
          />

          <StatsCard
            label='Avg Stars / Repo'
            value={100}
            delta={15}
            hint='Quality signal'
            icon={<ChartBar />}
          />
        </div>
      </div>
    </section>
  );
};

export default StatsCards;
