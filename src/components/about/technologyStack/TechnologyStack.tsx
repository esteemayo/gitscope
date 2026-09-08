'use client';

import clsx from 'clsx';
import { motion } from 'framer-motion';

import StackCard from './StackCard';
import SectionIntro from '@/components/ui/SectionIntro';

import { containerVariants } from '@/animations/page';
import { TechnologyStackProps } from '@/types/about/technologyStack/technology.stack.type';

import '../../../styles/components/about/technologyStack/TechnologyStack.scss';

const TechnologyStack = ({
  badge,
  title,
  description,
  stacks,
  accentColor,
  className,
  style,
}: TechnologyStackProps) => {
  return (
    <motion.section
      variants={containerVariants}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}
      className={clsx('technology-stack', className)}
      style={
        {
          '--accent-color': accentColor,
          ...style,
        } as React.CSSProperties
      }
      aria-describedby='technology-stack-title'
    >
      <div className='technology-stack__container'>
        <SectionIntro
          id='technology-stack-title'
          badge={badge}
          title={title}
          description={description}
          accentColor={accentColor}
          variants={containerVariants}
        />

        <div className='technology-stack__grid'>
          {stacks.map((stack, index) => (
            <StackCard key={stack.id} {...stack} index={index} />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default TechnologyStack;
