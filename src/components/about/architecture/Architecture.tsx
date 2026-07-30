'use client';

import { motion } from 'framer-motion';

import ArchitectureCard from './ArchitectureCard';
import Pipeline from './Pipeline';
import AboutSectionHeader from '../AboutSectionHeader';

import { containerVariants } from '@/animations/page';
import { ArchitectureProps } from '@/types/about/architecture/architecture.type';

import '../../../styles/components/about/architecture/Architecture.scss';

const Architecture = ({
  badge,
  title,
  description,
  features,
  stages,
}: ArchitectureProps) => {
  return (
    <motion.section
      variants={containerVariants}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}
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
              variants={containerVariants}
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

          <Pipeline stages={stages} variants={containerVariants} />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Architecture;
