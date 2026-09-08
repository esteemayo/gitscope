import { StackCategory } from './index';

export interface StackCardProps extends StackCategory {
  index: number;
  className?: string;
  style?: React.CSSProperties;
}
