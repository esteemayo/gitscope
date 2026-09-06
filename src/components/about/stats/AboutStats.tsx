'use client';

import clsx from 'clsx';
import { motion } from 'framer-motion';

import AboutStatCard from './AboutStatCard';
import SectionIntro from '@/components/ui/SectionIntro';

import { containerVariants } from '@/animations/page';
import { AboutStatsProps } from '@/types/about/stats/about.stats.type';

import '../../../styles/components/about/stats/AboutStats.scss';

const AboutStats = ({
  badge,
  title,
  description,
  stats,
  accentColor,
  className,
  style,
}: AboutStatsProps) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      viewport={{ once: true }}
      className={clsx('about-stats', className)}
      style={
        {
          '--accent-color': accentColor,
          ...style,
        } as React.CSSProperties
      }
    >
      <div className='about-stats__container'>
        <SectionIntro
          id='about-stats-title'
          badge={badge}
          title={title}
          description={description}
          accentColor={accentColor}
          variants={containerVariants}
        />

        <motion.div
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
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
