'use client';

import { motion } from 'framer-motion';

import MissionTimeline from './MissionTimeline';
import { MissionTimelineSectionProps } from '@/types/about/mission/mission.timeline.section.type';

import '../../../styles/components/about/mission/MissionTimelineSection.scss';

const MissionTimelineSection = ({
  timeline,
  itemVariants,
}: MissionTimelineSectionProps) => {
  return (
    <motion.div variants={itemVariants} className='mission-timeline-section'>
      <header className='mission-timeline-section__header'>
        <span className='mission-timeline-section__header--label'>
          How GitScope Works
        </span>

        <h3 className='mission-timeline-section__header--title'>
          From GitHub repositories to meaningful insights.
        </h3>

        <p className='mission-timeline-section__header--description'>
          GitScope follows a streamlined workflow that transforms raw repository
          information into visual analytics, helping developers understand
          projects faster.
        </p>
      </header>

      <MissionTimeline timeline={timeline} itemVariants={itemVariants} />
    </motion.div>
  );
};

export default MissionTimelineSection;
