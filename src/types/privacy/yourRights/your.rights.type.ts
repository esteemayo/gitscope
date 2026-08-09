import { RightsNoticeData, UserRight } from './index';

export interface YourRightsProps {
  badge: string;
  title: string;
  subtitle: string;
  rights: UserRight[];
  notice: RightsNoticeData;
  className?: string;
  style?: React.CSSProperties;
}
