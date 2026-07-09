import MissionTimelineItem from './MissionTimelineItem';
import { MissionTimelineProps } from '@/types/about/mission/mission.timeline.type';

import '../../../styles/components/about/mission/MissionTimeline.scss';

const MissionTimeline = ({ timeline, itemVariants }: MissionTimelineProps) => {
  return (
    <div className='mission-timeline'>
      {timeline.map((step, index) => (
        <MissionTimelineItem
          key={step.id}
          step={step}
          index={index}
          lastIndex={timeline.length - 1}
          itemVariants={itemVariants}
        />
      ))}
    </div>
  );
};

export default MissionTimeline;
