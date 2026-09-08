'use client';

import clsx from 'clsx';
import { motion } from 'framer-motion';

import ArchitectureCard from './ArchitectureCard';
import Pipeline from './Pipeline';
import SectionIntro from '@/components/ui/SectionIntro';

import { containerVariants } from '@/animations/page';
import { ArchitectureProps } from '@/types/about/architecture/architecture.type';

import '../../../styles/components/about/architecture/Architecture.scss';

const Architecture = ({
  badge,
  title,
  description,
  features,
  stages,
  accentColor,
  className,
  style,
}: ArchitectureProps) => {
  return (
    <motion.section
      variants={containerVariants}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}
      className={clsx('architecture', className)}
      style={
        {
          '--accent-color': accentColor,
          ...style,
        } as React.CSSProperties
      }
      aria-labelledby='architecture-title'
    >
      <div className='architecture__container'>
        <SectionIntro
          id='architecture-title'
          badge={badge}
          title={title}
          description={description}
          accentColor={accentColor}
          variants={containerVariants}
        />

        <div className='architecture__grid'>
          {features.map((feature, index) => (
            <ArchitectureCard key={feature.id} {...feature} index={index} />
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
