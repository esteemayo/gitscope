'use client';

import { motion } from 'framer-motion';

import MissionContent from './MissionContent';
import MissionDashboard from './MissionDashboard';

import { containerVariants } from '@/animations/page';
import { AboutMissionProps } from '@/types/about/mission/about.mission.type';

import '../../../styles/components/about/mission/AboutMission.scss';

const AboutMission = ({
  badge,
  title,
  description,
  principles,
  timeline,
}: AboutMissionProps) => {
  return (
    <motion.section
      variants={containerVariants}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.25, margin: '-50px' }}
      className='about-mission'
      aria-labelledby='about-mission-title'
    >
      <div className='about-mission__container'>
        <motion.div
          variants={containerVariants}
          className='about-mission__wrapper'
        >
          <motion.div
            variants={containerVariants}
            className='about-mission__illustration'
          >
            <MissionDashboard />
          </motion.div>

          <MissionContent
            badge={badge}
            title={title}
            description={description}
            principles={principles}
            timeline={timeline}
            variants={containerVariants}
          />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default AboutMission;
