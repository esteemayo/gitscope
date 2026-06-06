import { MetricCardProps } from '@/types/repo/metric.card.type';
import '../../styles/components/repo/MetricCard.scss';

const MetricCard = ({ icon, value, label }: MetricCardProps) => {
  return (
    <article className='metric-card'>
      <div className='metric-card__container'>
        <div className='metric-card__icon'>{icon}</div>

        <div className='metric-card__content'>
          <strong className='metric-card__content--value'>{value}</strong>

          <span className='metric-card__content--label'>{label}</span>
        </div>
      </div>
    </article>
  );
};

export default MetricCard;
