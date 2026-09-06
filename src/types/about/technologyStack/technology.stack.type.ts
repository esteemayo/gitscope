import { StackCategory, StackContent } from './index';

export interface TechnologyStackProps extends StackContent {
  stacks: StackCategory[];
  className?: string;
  style?: React.CSSProperties;
}
