import { faqItems } from './faq.data';
import { faqContent } from './faqContent.data';

import { FAQProps } from '@/types/about/faq/faq.type';

export const faqData: FAQProps = {
  ...faqContent,
  items: faqItems,
};
