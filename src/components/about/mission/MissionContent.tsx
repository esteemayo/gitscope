'use client';

import { motion } from 'framer-motion';

import AboutSectionHeader from '../AboutSectionHeader';
import MissionHighlight from './MissionHighlight';
import MissionTimelineSection from './MissionTimelineSection';
import MissionPrinciples from './MissionPrinciples';

import { MissionContentProps } from '@/types/about/mission/mission.content.type';
import '../../../styles/components/about/mission/MissionContent.scss';

const MissionContent = ({
  badge,
  title,
  description,
  principles,
  timeline,
  variants,
}: MissionContentProps) => {
  return (
    <motion.div
      variants={variants}
      className='mission-content'
      aria-labelledby='mission-content-title'
    >
      <AboutSectionHeader
        id='mission-content-title'
        badge={badge}
        title={title}
        description={description}
        centered={false}
        variants={variants}
      />

      <MissionHighlight variants={variants} />

      <MissionPrinciples principles={principles} variants={variants} />

      <MissionTimelineSection timeline={timeline} variants={variants} />
    </motion.div>
  );
};

export default MissionContent;
