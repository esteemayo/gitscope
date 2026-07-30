'use client';

import { motion } from 'framer-motion';

import StackCard from './StackCard';
import AboutSectionHeader from '../AboutSectionHeader';

import { containerVariants } from '@/animations/page';
import { TechnologyStackProps } from '@/types/about/technologyStack/technology.stack.type';

import '../../../styles/components/about/technologyStack/TechnologyStack.scss';

const TechnologyStack = ({
  badge,
  title,
  description,
  stacks,
}: TechnologyStackProps) => {
  return (
    <motion.section
      variants={containerVariants}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.25, margin: '-50px' }}
      className='technology-stack'
      aria-describedby='technology-stack-title'
    >
      <div className='technology-stack__container'>
        <AboutSectionHeader
          id='technology-stack-title'
          badge={badge}
          title={title}
          description={description}
          variants={containerVariants}
        />

        <div className='technology-stack__grid'>
          {stacks.map((stack) => (
            <StackCard
              key={stack.id}
              stack={stack}
              variants={containerVariants}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default TechnologyStack;
