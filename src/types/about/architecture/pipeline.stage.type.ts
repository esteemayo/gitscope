import { PipelineStage as PipelineStageData } from '../index';

export interface PipelineStageProps {
  stage: PipelineStageData;
  index: number;
  isActive?: boolean;
}
