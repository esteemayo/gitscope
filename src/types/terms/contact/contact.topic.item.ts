import { ContactTopicType } from './index';

export interface ContactTopicItemProps extends ContactTopicType {
  index: number;
  className?: string;
  style?: React.CSSProperties;
}
