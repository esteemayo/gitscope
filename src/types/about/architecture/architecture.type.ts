import { ArchitectureContent, ArchitectureFeature, PipelineStage } from './index';

export interface ArchitectureProps extends ArchitectureContent {
  features: ArchitectureFeature[];
  stages: PipelineStage[];
  className?: string;
  style?: React.CSSProperties;
}
