'use client';

import { motion } from 'framer-motion';

import SectionIntro from '@/components/ui/SectionIntro';
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
  accentColor,
  variants,
}: MissionContentProps) => {
  return (
    <motion.div
      variants={variants}
      className='mission-content'
      aria-labelledby='mission-content-title'
    >
      <SectionIntro
        id='mission-content-title'
        badge={badge}
        title={title}
        description={description}
        accentColor={accentColor}
        align='left'
        variants={variants}
      />

      <MissionHighlight />

      <MissionPrinciples principles={principles} />

      <MissionTimelineSection timeline={timeline} variants={variants} />
    </motion.div>
  );
};

export default MissionContent;
