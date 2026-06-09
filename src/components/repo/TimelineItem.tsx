import { TimelineEvent } from '@/types/repo';
import '../../styles/components/repo/TimelineItem.scss';

type TimelineItemProps = TimelineEvent;

const TimelineItem = ({ title, description, date }: TimelineItemProps) => {
  return (
    <article className='timeline-item'>
      <div className='timeline-item__dot' />

      <div className='timeline-item__body'>
        <h3 className='timeline-item__body--title'>{title}</h3>

        <p className='timeline-item__body--description'>{description}</p>

        <time dateTime={date} className='timeline-item__body--date'>
          {date}
        </time>
      </div>
    </article>
  );
};

export default TimelineItem;
