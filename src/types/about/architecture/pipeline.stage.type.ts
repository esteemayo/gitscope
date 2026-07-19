import { PipelineStage as PipelineStageData } from '../index';

export interface PipelineStageProps {
  stage: PipelineStageData;
  isActive?: boolean;
}
