'use client';

import clsx from 'clsx';
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
  metrics,
  healthProgress,
  accentColor,
  className,
  style,
}: AboutMissionProps) => {
  return (
    <motion.section
      variants={containerVariants}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}
      className={clsx('about-mission', className)}
      style={
        {
          '--accent-color': accentColor,
          ...style,
        } as React.CSSProperties
      }
      aria-labelledby='about-mission-title'
    >
      <div className='about-mission__container'>
        <div className='about-mission__wrapper'>
          <div className='about-mission__illustration'>
            <MissionDashboard
              metrics={metrics}
              healthProgress={healthProgress}
            />
          </div>

          <MissionContent
            badge={badge}
            title={title}
            description={description}
            principles={principles}
            timeline={timeline}
            accentColor={accentColor}
            variants={containerVariants}
          />
        </div>
      </div>
    </motion.section>
  );
};

export default AboutMission;
