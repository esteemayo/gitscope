import StatsCard from './StatsCard';
import ForkIcon from '../icons/ForkIcon';
import ChartBarIcon from '../icons/ChartBarIcon';
import StarIcon from '../icons/StarIcon';

import { StatsCardsProps } from '@/types/stats.cards.type';
import '../../styles/components/StatsCards.scss';

const StatsCards = ({ sort, onSort }: StatsCardsProps) => {
  return (
    <section className='stats-cards'>
      <div className='stats-cards__container'>
        <div className='stats-cards__wrapper'>
          <StatsCard
            label='Total stars'
            value={210}
            delta={12}
            hint='Across all repositories'
            icon={<StarIcon />}
            filter='stars'
            sort={sort}
            onSort={onSort}
          />

          <StatsCard
            label='Total forks'
            value={0}
            delta={0}
            hint='Community usage'
            icon={<ForkIcon />}
            filter='forks'
            sort={sort}
            onSort={onSort}
          />

          <StatsCard
            label='Avg Stars / Repo'
            value={100}
            delta={15}
            hint='Quality signal'
            icon={<ChartBarIcon />}
            filter='quality'
            sort={sort}
            onSort={onSort}
          />
        </div>
      </div>
    </section>
  );
};

export default StatsCards;
