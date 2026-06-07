import { SummaryCardProps } from '@/types/repo/summary.card.type';
import '../../styles/components/repo/SummaryCard.scss';

const SummaryCard = ({ icon, label, value }: SummaryCardProps) => {
  return (
    <article className='summary-card'>
      <div className='summary-card__container'>
        <div className='summary-card__icon'>{icon}</div>

        <div className='summary-card__content'>
          <span className='summary-card__label'>{label}</span>

          <strong className='summary-card__value'>{value}</strong>
        </div>
      </div>
    </article>
  );
};

export default SummaryCard;
