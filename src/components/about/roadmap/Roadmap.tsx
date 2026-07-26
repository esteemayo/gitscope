'use client';

import { motion } from 'framer-motion';

import RoadmapCard from './RoadmapCard';
import AboutSectionHeader from '../AboutSectionHeader';

import { containerVariants } from '@/animations/about';
import { RoadmapProps } from '@/types/about/roadmap/roadmap.type';

import '../../../styles/components/about/roadmap/Roadmap.scss';

const Roadmap = ({ badge, title, description, phases }: RoadmapProps) => {
  return (
    <motion.section
      variants={containerVariants}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.25, margin: '-50px' }}
      className='roadmap'
      aria-describedby='roadmap-title'
    >
      <div className='roadmap__container'>
        <AboutSectionHeader
          id='roadmap-title'
          badge={badge}
          title={title}
          description={description}
          variants={containerVariants}
        />

        <div className='roadmap__grid'>
          {phases.map((phase) => (
            <RoadmapCard
              key={phase.id}
              phase={phase}
              variants={containerVariants}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Roadmap;
