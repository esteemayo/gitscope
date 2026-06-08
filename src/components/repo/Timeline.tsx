import { TimelineEvent } from '@/types/repo/index';
import '../../styles/components/repo/Timeline.scss';

const Timeline = ({ events }: { events: TimelineEvent[] }) => {
  return (
    <div className='timeline'>
      {events.map((event) => {
        const { id, title, description, date } = event;

        return (
          <article key={id} className='timeline__item'>
            <div className='timeline__dot' />

            <div className='timeline__body'>
              <h3 className='timeline__body--title'>{title}</h3>

              <p className='timeline__body--description'>{description}</p>

              <time dateTime={date} className='timeline__body--date'>
                {date}
              </time>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Timeline;
