import { ChangeReasonType } from "./index";

export interface ChangeReasonItemProps extends ChangeReasonType {
  index: number;
  className?: string;
  style?: React.CSSProperties;
}