import { storageSummary } from './storageSummary.data';
import { storageNotice } from './storageNotice.data';
import { broserStorageOverview } from './broserStorageOverview.data';

export const cookiesLocalStorageData = {
  badge: 'Cookies & Local Storage',
  title: 'How GitScope Uses Browser Storage.',
  subtitle:
    'GitScope uses browser storage responsibly to remember your preferences, maintain secure authentication, and improve performance while keeping you in control.',
  summary: storageSummary,
  overview: broserStorageOverview,
  notice: storageNotice,
};
