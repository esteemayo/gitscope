import { TeamFocusType } from './index';

export interface TeamFocusItemProps extends TeamFocusType {
  index: number;
  className?: string;
  style?: React.CSSProperties;
}
