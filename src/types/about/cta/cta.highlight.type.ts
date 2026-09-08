import { CTAHighlightType } from './index';

export interface CTAHighlightProps extends CTAHighlightType {
  index: number;
  className?: string;
  style?: React.CSSProperties;
}
