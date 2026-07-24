'use client';

import { motion, Variants } from 'framer-motion';

import AboutStatCard from './AboutStatCard';
import AboutSectionHeader from '../AboutSectionHeader';

import { AboutStatsProps } from '@/types/about/stats/about.stats.type';
import '../../../styles/components/about/stats/AboutStats.scss';

const containerVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 10,
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

const AboutStats = ({ badge, title, description, stats }: AboutStatsProps) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      viewport={{ once: true, amount: 0.25, margin: '-50px' }}
      className='about-stats'
    >
      <div className='about-stats__container'>
        <AboutSectionHeader
          id='about-stats-title'
          badge={badge}
          title={title}
          description={description}
          variants={containerVariants}
        />

        <motion.div
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.25, margin: '-50px' }}
          className='about-stats__grid'
        >
          {stats.map((stat, index) => (
            <AboutStatCard key={stat.id} {...stat} index={index} />
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default AboutStats;
