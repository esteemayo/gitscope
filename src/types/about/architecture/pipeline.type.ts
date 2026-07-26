import { Variants } from 'framer-motion';
import { PipelineStage } from '../index';

export interface PipelineProps {
  stages: PipelineStage[];
  variants: Variants;
}
