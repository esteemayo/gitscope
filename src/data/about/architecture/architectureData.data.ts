import { architectureContent } from './architectureContent.data';
import { architectureFeatures, pipelineStages } from './architecture.data';

export const architectureData = {
  ...architectureContent,
  features: architectureFeatures,
  stages: pipelineStages,
};
