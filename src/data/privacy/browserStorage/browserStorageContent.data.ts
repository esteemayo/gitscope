import { browserStorageContent } from './browserStorageData.data';
import * as data from './browserStorage.data';
import { browserStorageOverview } from './broserStorageOverview.data';

import { CookieLocalStorageProps } from '@/types/privacy/cookiesLocalStorage/cookies.local.storage.type';

export const browserStorageData: CookieLocalStorageProps = {
  ...browserStorageContent,
  summary: data.storageSummary,
  overview: browserStorageOverview,
  notice: data.storageNotice,
};
