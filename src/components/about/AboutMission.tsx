'use client';

import { motion, Variants } from 'framer-motion';
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
            <div className='about-mission__dashboard'>
              <div className='about-mission__window-controls'>
                <span />
                <span />
                <span />
              </div>

              <div className='about-mission__dashboard-title'>
                GitScope Analytics
              </div>
              <div className='about-mission__status'>Live</div>
            </div>

            <div className='about-mission__body'>
              <div className='about-mission__chart-card'>
                <div className='about-mission__'>
                  <small>Repository activity</small>

                  <h4>Contribution trend</h4>
                </div>

                <span className='about-mission__success-badge'>+24%</span>
              </div>

              <div className='about-mission__chart'>
                <span className='about-mission__bar' />
                <span className='about-mission__bar' />
                <span className='about-mission__bar' />
                <span className='about-mission__bar' />
                <span className='about-mission__bar' />
                <span className='about-mission__bar' />
                <span className='about-mission__bar' />
                <span className='about-mission__bar' />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMission;
