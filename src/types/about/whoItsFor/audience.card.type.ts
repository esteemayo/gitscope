import { Audience } from './index';

export interface AudienceCardProps extends Audience {
  index: number;
  className?: string;
  style?: React.CSSProperties;
}
