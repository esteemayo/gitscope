'use client';

import { motion } from 'framer-motion';

import PipelineStage from './PipelineStage';
import Connector from './Connector';
import PipelineSummary from './PipelineSummary';

import { PipelineProps } from '@/types/about/architecture/pipeline.type';
import '../../../styles/components/about/architecture/Pipeline.scss';

const Pipeline = ({ stages, variants }: PipelineProps) => {
  return (
    <motion.div variants={variants} className='pipeline'>
      {stages.map((stage, index) => (
        <motion.div
          key={stage.id}
          variants={variants}
          className='pipeline__item'
        >
          <PipelineStage
            key={stage.id}
            stage={stage}
            index={index}
            isActive={stage.id === 'engine'}
          />

          <Connector isAnimated={true} />
        </motion.div>
      ))}

      <PipelineSummary variants={variants} />
    </motion.div>
  );
};

export default Pipeline;
