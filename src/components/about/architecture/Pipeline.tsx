'use client';

import { motion, Variants } from 'framer-motion';

import Connector from './Connector';
import PipelineStage from './PipelineStage';

import { PipelineProps } from '@/types/about/architecture/pipeline.type';
import '../../../styles/components/about/architecture/Pipeline.scss';

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: 'easeOut',
    },
  },
};

const Pipeline = ({ stages }: PipelineProps) => {
  return (
    <motion.div
      variants={containerVariants}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.25 }}
      className='pipeline'
    >
      {stages.map((stage, index) => (
        <motion.div
          key={stage.id}
          variants={itemVariants}
          className='pipeline__item'
        >
          <PipelineStage
            key={stage.id}
            stage={stage}
            isActive={stage.id === 'engine'}
          />

          {index !== stages.length - 1 && <Connector />}
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Pipeline;
