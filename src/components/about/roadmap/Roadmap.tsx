'use client';

import { motion, Variants } from 'framer-motion';

import RoadmapCard from './RoadmapCard';
import AboutSectionHeader from '../AboutSectionHeader';

import { RoadmapProps } from '@/types/about/roadmap/roadmap.type';
import '../../../styles/components/about/roadmap/Roadmap.scss';

const gridVariants: Variants = {
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

const Roadmap = ({ badge, title, description, phases }: RoadmapProps) => {
  return (
    <motion.section
      variants={gridVariants}
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
        />

        <div className='roadmap__grid'>
          {phases.map((phase) => (
            <RoadmapCard key={phase.id} phase={phase} variants={gridVariants} />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Roadmap;
