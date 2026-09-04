import { TeamMemberType } from './index';

export interface TeamMemberItemProps extends TeamMemberType {
  index: number;
  className?: string;
  style?: React.CSSProperties;
}
