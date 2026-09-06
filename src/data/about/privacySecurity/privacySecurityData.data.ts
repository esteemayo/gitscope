import { securityFeatures } from './privacySecurity.data';
import { privacySecurityContent } from './privacySecurityContent.data';

import { PrivacySecurityProps } from '@/types/about/privacySecurity/privacy.security.type';

export const privacySecurityData: PrivacySecurityProps = {
  ...privacySecurityContent,
  features: securityFeatures,
};
