import { privacyFAQContent } from './privacyFAQContent.data';
import { privacyFAQCategories, privacyFAQNotice } from './privacyFAQ.data';

import { PrivacyFAQProps } from '@/types/privacy/privacyPolicy/privacy.faq.type';

export const privacyFAQData: PrivacyFAQProps = {
  ...privacyFAQContent,
  categories: privacyFAQCategories,
  notice: privacyFAQNotice,
};
