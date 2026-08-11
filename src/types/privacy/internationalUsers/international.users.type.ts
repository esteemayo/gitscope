import {
  InternationalUsersNoticeData,
  InternationalUsersPanelData,
} from './index';

export interface InternationalUsersProps {
  badge: string;
  title: string;
  subtitle: string;
  panel: InternationalUsersPanelData;
  notice: InternationalUsersNoticeData;
  className?: string;
  style?: React.CSSProperties;
}
