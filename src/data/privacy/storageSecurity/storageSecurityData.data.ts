import * as data from './storageSecurity.data';
import { storageSecurityContent } from './storageSecurityContent.data';

import { DataStorageSecurityProps } from '@/types/privacy/dataStorageSecurity/data.storage.security.type';

export const storageSecurityData: DataStorageSecurityProps = {
  ...storageSecurityContent,
  overview: data.securityOverview,
  trustItems: data.securityTrustItems,
  features: data.securityFeatures,
  layers: data.securityLayers,
  securityOutcome: data.securityOutcome,
  trustBanner: data.securityBanner,
};
