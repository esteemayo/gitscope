'use client';

import { motion } from 'framer-motion';

import MissionTimeline from './MissionTimeline';
import { MissionTimelineSectionProps } from '@/types/about/mission/mission.timeline.section.type';

import '../../../styles/components/about/mission/MissionTimelineSection.scss';

const MissionTimelineSection = ({
  timeline,
  variants,
}: MissionTimelineSectionProps) => {
  return (
    <motion.div variants={variants} className='mission-timeline-section'>
      <motion.header
        variants={variants}
        className='mission-timeline-section__header'
      >
        <motion.span
          variants={variants}
          className='mission-timeline-section__header--label'
        >
          How GitScope Works
        </motion.span>

        <motion.h3
          variants={variants}
          className='mission-timeline-section__header--title'
        >
          From GitHub repositories to meaningful insights.
        </motion.h3>

        <motion.p
          variants={variants}
          className='mission-timeline-section__header--description'
        >
          GitScope follows a streamlined workflow that transforms raw repository
          information into visual analytics, helping developers understand
          projects faster.
        </motion.p>
      </motion.header>

      <MissionTimeline timeline={timeline} variants={variants} />
    </motion.div>
  );
};

export default MissionTimelineSection;
