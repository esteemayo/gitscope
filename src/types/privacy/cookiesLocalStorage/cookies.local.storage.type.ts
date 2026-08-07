import { BrowserStorageItem, StorageNotice, StorageSummary } from './index';

export interface CookieLocalStorageProps {
  badge: string;
  title: string;
  subtitle: string;
  summary: StorageSummary;
  items: BrowserStorageItem[];
  notice: StorageNotice;
}
