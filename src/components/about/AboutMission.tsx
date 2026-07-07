'use client';

import { motion, Variants } from 'framer-motion';

import MissionContent from './MissionContent';
import MissionDashboard from './MissionDashboard';

import { AboutMissionProps } from '@/types/about/about.mission.type';
import '../../styles/components/about/AboutMission.scss';

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: 'easeOut',
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
    <section className='about-mission' aria-labelledby='about-mission-title'>
      <div className='about-mission__container'>
        <motion.div
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.2 }}
          className='about-mission__wrapper'
        >
          <motion.div
            variants={itemVariants}
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
            itemVariants={itemVariants}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMission;
