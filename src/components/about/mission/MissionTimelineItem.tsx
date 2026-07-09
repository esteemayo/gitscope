'use client';

import { motion } from 'framer-motion';
import { MissionTimeItemProps } from '@/types/about/mission/mission.timeline.item.type';

import '../../../styles/components/about/mission/MissionTimelineItem.scss';

const MissionTimelineItem = ({
  step: { icon: Icon, title, description, accentColor },
  index,
  lastIndex,
  itemVariants,
}: MissionTimeItemProps) => {
  return (
    <motion.div
      variants={itemVariants}
      className='mission-timeline-item'
      style={
        {
          '--accent-color': accentColor,
        } as React.CSSProperties
      }
    >
      <div className='mission-timeline-item__node'>
        <div className='mission-timeline-item__node--icon'>
          <Icon size={22} />
        </div>

        {index < lastIndex && (
          <span className='mission-timeline-item__node--connector'>
            <span className='mission-timeline-item__node--connector-pulse' />
          </span>
        )}
      </div>

      <div className='mission-timeline-item__content'>
        <h4 className='mission-timeline-item__content--title'>{title}</h4>

        <p className='mission-timeline-item__content--description'>
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export default MissionTimelineItem;
