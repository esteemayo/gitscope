'use client';

import clsx from 'clsx';
import { motion } from 'framer-motion';

import { MissionTimelineItemProps } from '@/types/about/mission/mission.timeline.item.type';
import '../../../styles/components/about/mission/MissionTimelineItem.scss';

const MissionTimelineItem = ({
  icon: Icon,
  title,
  description,
  accentColor,
  index,
  lastIndex,
  className,
  style,
}: MissionTimelineItemProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.4,
        delay: index * 0.06,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={clsx('mission-timeline-item', className)}
      style={
        {
          '--accent-color': accentColor,
          ...style,
        } as React.CSSProperties
      }
    >
      <div className='mission-timeline-item__node'>
        <div className='mission-timeline-item__node--icon'>
          <Icon
            size={22}
            strokeWidth={1.8}
            role='img'
            aria-hidden='true'
            focusable='false'
          />
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
