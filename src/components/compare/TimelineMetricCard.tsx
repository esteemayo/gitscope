import { TimelineMetricCardProps } from '@/types/compare/timeline.metric.card.type';
import '../../styles/components/TimelineMetricCard.scss';

const TimelineMetricCard = ({
  icon,
  label,
  value,
}: TimelineMetricCardProps) => {
  return (
    <article className='timeline-metric-card'>
      <div className='timeline-metric-card__header'>
        <span className='timeline-metric-card__icon'>{icon}</span>

        <span className='timeline-metric-card__label'>{label}</span>
      </div>

      <strong className='timeline-metric-card__value'>{value}</strong>
    </article>
  );
};

export default TimelineMetricCard;
