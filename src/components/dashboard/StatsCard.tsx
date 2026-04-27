import ArrowUpRight from '../icons/ArrowUpRight';
import ArrowDownRight from '../icons/ArrowDownRight';

import { StatsCardProps } from '@/types/stats.card.type';
import '../../styles/components/StatsCard.scss';

const StatsCard = ({
  label,
  value,
  delta,
  icon,
  hint,
  filter,
  sort,
  onSort,
}: StatsCardProps) => {
  const active = sort === filter;

  return (
    <button
      type='button'
      onClick={() => onSort(filter)}
      className={active ? 'stats-card active' : 'stats-card'}
    >
      <article className='stats-card__wrapper'>
        <header className='stats-card__header'>
          <span className='stats-card__header--icon'>{icon}</span>
          <h3 className='stats-card__header--label'>{label}</h3>
        </header>

        <div className='stats-card__body'>{value}</div>

        <footer className='stats-card__footer'>
          {typeof delta !== 'undefined' && (
            <span className={`stats-card__footer--delta ${delta > 0 ? 'green' : 'red'}`}>
              {delta > 0 ? <ArrowUpRight /> : <ArrowDownRight />}
              {delta > 0 ? '+' : '-'}{delta}%
            </span>
          )}

          {hint && <span className='stats-card__footer--hint'>{hint}</span>}
        </footer>
      </article>
    </button>
  );
};

export default StatsCard;
