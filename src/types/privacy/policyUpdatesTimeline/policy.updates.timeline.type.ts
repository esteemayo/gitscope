import { PolicyUpdate, PolicyUpdatesNoticeData } from './index';

export interface PolicyUpdatesTimelineProps {
  badge: string;
  title: string;
  subtitle: string;
  updates: PolicyUpdate[];
  notice: PolicyUpdatesNoticeData;
  className?: string;
  style?: React.CSSProperties;
}
