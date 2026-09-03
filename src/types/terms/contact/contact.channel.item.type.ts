import { ContactChannelType } from './index';

export interface ContactChannelItemProps extends ContactChannelType {
  index: number;
  className?: string;
  style?: React.CSSProperties;
}
