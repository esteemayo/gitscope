'use client';

import { motion, Variants } from 'framer-motion';

import MissionContent from './MissionContent';
import MissionDashboard from './MissionDashboard';

import { AboutMissionProps } from '@/types/about/mission/about.mission.type';
import '../../../styles/components/about/mission/AboutMission.scss';

const containerVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: 'easeOut',
      staggerChildren: 0.3,
    },
  },
};

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
      viewport={{ once: true, amount: 0.2, margin: '-50px' }}
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
