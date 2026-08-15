import { browserStorageItems } from './browserStorage.data';
import { BrowserStorageOverview } from '@/types/privacy/cookiesLocalStorage';

export const browserStorageOverview: BrowserStorageOverview = {
  badge: 'Browser Inspector',
  title: 'Browser Storage Overview.',
  description:
    'Review how GitScope uses different browser storage technologies and how long each type of information is retained.',
  items: browserStorageItems,
};
