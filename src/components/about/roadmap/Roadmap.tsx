'use client';

import clsx from 'clsx';
import { motion } from 'framer-motion';

import RoadmapCard from './RoadmapCard';
import SectionIntro from '@/components/ui/SectionIntro';

import { containerVariants } from '@/animations/page';
import { RoadmapProps } from '@/types/about/roadmap/roadmap.type';

import '../../../styles/components/about/roadmap/Roadmap.scss';

const Roadmap = ({
  badge,
  title,
  description,
  phases,
  accentColor,
  className,
  style,
}: RoadmapProps) => {
  return (
    <motion.section
      variants={containerVariants}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}
      className={clsx('roadmap', className)}
      style={
        {
          '--accent-color': accentColor,
          ...style,
        } as React.CSSProperties
      }
      aria-describedby='roadmap-title'
    >
      <div className='roadmap__container'>
        <SectionIntro
          id='roadmap-title'
          badge={badge}
          title={title}
          description={description}
          accentColor={accentColor}
          variants={containerVariants}
        />

        <div className='roadmap__grid'>
          {phases.map((phase) => (
            <RoadmapCard
              key={phase.id}
              {...phase}
              variants={containerVariants}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Roadmap;
