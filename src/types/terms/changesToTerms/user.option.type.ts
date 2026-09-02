import { UserOptionType } from './index';

export interface UserOptionProps extends UserOptionType {
  index: number;
  className?: string;
  style?: React.CSSProperties;
}
