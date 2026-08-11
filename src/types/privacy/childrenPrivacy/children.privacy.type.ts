import { ChildrenPrivacyNoticeData, ChildrenPrivacyPanelData } from './index';

export interface ChildrenPrivacyProps {
  badge: string;
  title: string;
  subtitle: string;
  panel: ChildrenPrivacyPanelData;
  notice: ChildrenPrivacyNoticeData;
  className?: string;
  style?: React.CSSProperties;
}
