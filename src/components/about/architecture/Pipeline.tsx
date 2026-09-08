'use client';

import PipelineStage from './PipelineStage';
import Connector from './Connector';
import PipelineSummary from './PipelineSummary';

import { PipelineProps } from '@/types/about/architecture/pipeline.type';
import '../../../styles/components/about/architecture/Pipeline.scss';

const Pipeline = ({ stages }: PipelineProps) => {
  return (
    <div className='pipeline'>
      {stages.map((stage, index) => (
        <div
          key={stage.id}
          className='pipeline__item'
        >
          <PipelineStage
            key={stage.id}
            {...stage}
            index={index}
            isActive={stage.id === 'engine'}
          />

          <Connector isAnimated={true} />
        </div>
      ))}

      <PipelineSummary  />
    </div>
  );
};

export default Pipeline;
