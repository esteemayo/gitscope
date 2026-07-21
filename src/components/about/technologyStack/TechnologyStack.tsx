'use client';

import { motion, Variants } from 'framer-motion';

import StackCard from './StackCard';
import AboutSectionHeader from '../AboutSectionHeader';

import { TechnologyStackProps } from '@/types/about/technologyStack/technology.stack.type';
import '../../../styles/components/about/technologyStack/TechnologyStack.scss';

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

const TechnologyStack = ({
  badge,
  title,
  description,
  stacks,
}: TechnologyStackProps) => {
  return (
    <section
      className='technology-stack'
      aria-describedby='technology-stack-title'
    >
      <div className='technology-stack__container'>
        <AboutSectionHeader
          id='technology-stack-title'
          badge={badge}
          title={title}
          description={description}
        />

        <motion.div
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.25 }}
          className='technology-stack__grid'
        >
          {stacks.map((stack) => (
            <StackCard
              key={stack.id}
              stack={stack}
              variants={containerVariants}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TechnologyStack;
