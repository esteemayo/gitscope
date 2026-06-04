import '../../styles/components/TimelineMetricCard.scss';

interface TimelineMetricCardProps {
  label: string;
  value: string | number;
}

const TimelineMetricCard = ({ label, value }: TimelineMetricCardProps) => {
  return (
    <article className='timeline-metric-card'>
      <span className='timeline-metric-card__label'>{label}</span>

      <strong className='timeline-metric-card__value'>{value}</strong>
    </article>
  );
};

export default TimelineMetricCard;
