import { ResponseExpectationType } from './index';

export interface ResponseExpectationItemProps extends ResponseExpectationType {
  index: number;
  className?: string;
  style?: React.CSSProperties;
}
