import TimelineItem from './TimelineItem';
import EmptyState from '../ui/EmptyState';

import { TimelineEvent } from '@/types/repo/index';
import '../../styles/components/repo/Timeline.scss';

interface TimelineProps {
  events: TimelineEvent[];
}

const Timeline = ({ events }: TimelineProps) => {
  if (!events.length) {
    return (
      <EmptyState
        title='No Activity Recorded'
        description='No repository events or activity history are available to display.'
      />
    );
  }

  return (
    <div className='timeline'>
      {events.map((event) => (
        <TimelineItem key={event.id} {...event} />
      ))}
    </div>
  );
};

export default Timeline;
