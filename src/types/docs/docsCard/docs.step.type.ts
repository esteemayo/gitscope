import { DocsStepType } from './index';

export interface DocsStepProps extends DocsStepType {
  index: number;
  className?: string;
  style?: React.CSSProperties;
}
