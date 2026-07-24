import MissionTimelineItem from './MissionTimelineItem';
import { MissionTimelineProps } from '@/types/about/mission/mission.timeline.type';

import '../../../styles/components/about/mission/MissionTimeline.scss';

const MissionTimeline = ({ timeline, variants }: MissionTimelineProps) => {
  return (
    <div className='mission-timeline'>
      {timeline.map((step, index) => (
        <MissionTimelineItem
          key={step.id}
          step={step}
          index={index}
          lastIndex={timeline.length - 1}
          variants={variants}
        />
      ))}
    </div>
  );
};

export default MissionTimeline;
