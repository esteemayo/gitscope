import { ArchitectureFeature, PipelineStage } from '../index';

export interface ArchitectureProps {
  badge: string;
  title: string;
  description: string;
  features: ArchitectureFeature[];
  stages: PipelineStage[];
}
