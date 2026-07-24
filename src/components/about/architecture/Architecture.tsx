'use client';

import { motion, Variants } from 'framer-motion';

import ArchitectureCard from './ArchitectureCard';
import Pipeline from './Pipeline';
import AboutSectionHeader from '../AboutSectionHeader';

import { ArchitectureProps } from '@/types/about/architecture/architecture.type';
import '../../../styles/components/about/architecture/Architecture.scss';

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

const Architecture = ({
  badge,
  title,
  description,
  features,
  stages,
}: ArchitectureProps) => {
  return (
    <motion.section
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.25, margin: '-50px' }}
      className='architecture'
      aria-labelledby='architecture-title'
    >
      <div className='architecture__container'>
        <AboutSectionHeader
          id='architecture-title'
          badge={badge}
          title={title}
          description={description}
          variants={containerVariants}
        />

        <div className='architecture__grid'>
          {features.map((feature) => (
            <ArchitectureCard
              key={feature.id}
              feature={feature}
              itemVariants={containerVariants}
            />
          ))}
        </div>

        <motion.div
          variants={containerVariants}
          className='architecture__pipeline-section'
        >
          <motion.div
            variants={containerVariants}
            className='architecture__pipeline-header'
          >
            <motion.span
              variants={containerVariants}
              className='architecture__pipeline-badge'
            >
              System pipeline
            </motion.span>

            <motion.h3
              variants={containerVariants}
              className='architecture__pipeline-title'
            >
              How GitScope transforms GitHub data.
            </motion.h3>

            <motion.p
              variants={containerVariants}
              className='architecture__pipeline-description'
            >
              Every request follows a streamlined pipeline, from data collection
              to interactive visualizations, ensuring fast, reliable and
              meaningful insights.
            </motion.p>
          </motion.div>

          <Pipeline stages={stages} />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Architecture;
