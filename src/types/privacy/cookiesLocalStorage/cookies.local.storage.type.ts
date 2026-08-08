import {
  BrowserStorageOverview,
  StorageNoticeData,
  StorageSummary,
} from './index';

export interface CookieLocalStorageProps {
  badge: string;
  title: string;
  subtitle: string;
  summary: StorageSummary;
  overview: BrowserStorageOverview;
  notice: StorageNoticeData;
}
