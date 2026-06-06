import { SummaryCardProps } from '@/types/repo/summary.card.type';
import '../../styles/components/repo/SummaryCard.scss';

const SummaryCard = ({ label, value }: SummaryCardProps) => {
  return (
    <article className='summary-card'>
      <span className='summary-card__label'>{label}</span>

      <strong className='summary-card__value'>{value}</strong>
    </article>
  );
};

export default SummaryCard;
