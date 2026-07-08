'use client';

import { motion } from 'framer-motion';

import MissionPrinciples from './MissionPrinciples';
import MissionHighlight from './MissionHighlight';
import MissionTimelineSection from './MissionTimelineSection';

import { MissionContentProps } from '@/types/about/mission.content.type';
import '../../styles/components/about/MissionContent.scss';

const MissionContent = ({
  badge,
  title,
  description,
  principles,
  timeline,
  itemVariants,
}: MissionContentProps) => {
  return (
    <motion.div variants={itemVariants} className='mission-content'>
      <span className='mission-content__badge'>{badge}</span>

      <h2 id='mission-content-title' className='mission-content__title'>
        {title}
      </h2>

      <p className='mission-content__description'>{description}</p>

      <MissionHighlight />

      <MissionPrinciples principles={principles} itemVariants={itemVariants} />

      <MissionTimelineSection timeline={timeline} itemVariants={itemVariants} />
    </motion.div>
  );
};

export default MissionContent;
