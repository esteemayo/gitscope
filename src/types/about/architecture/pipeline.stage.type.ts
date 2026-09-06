import { PipelineStage as PipelineStageData } from './index';

export interface PipelineStageProps extends PipelineStageData {
  index: number;
  isActive?: boolean;
  className?: string;
  style?: React.CSSProperties;
}
