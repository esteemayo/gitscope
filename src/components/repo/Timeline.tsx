import TimelineItem from './TimelineItem';
import { TimelineEvent } from '@/types/repo/index';

import '../../styles/components/repo/Timeline.scss';

interface TimelineProps {
  events: TimelineEvent[];
}

const Timeline = ({ events }: TimelineProps) => {
  return (
    <div className='timeline'>
      {events.map((event) => (
        <TimelineItem key={event.id} {...event} />
      ))}
    </div>
  );
};

export default Timeline;
