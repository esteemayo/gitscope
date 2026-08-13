import { Mail, MessageCircle, ShieldCheck } from 'lucide-react';
import {
  PrivacyContactCardData,
  PrivacyContactNoticeData,
} from '@/types/privacy/privacyContact';

export const privacyContactCards: PrivacyContactCardData[] = [
  {
    id: 'privacy-questions',
    title: 'Privacy Questions',
    description:
      'Ask questions about how GitScope collects, uses, stores, or protects information.',
    icon: ShieldCheck,
    accentColor: '#8B5CF6',
    action: {
      label: 'Contact Privacy Team',
      href: 'mailto:privacy@gitscope.app',
    },
  },
  {
    id: 'data-request',
    title: 'Data Request',
    description:
      'Contact us if you want to ask about access, correction, deletion, or other privacy-related requests.',
    icon: Mail,
    accentColor: '#06B6D4',
    action: {
      label: 'Submit Request',
      href: 'mailto:privacy@gitscope.app',
    },
  },
  {
    id: 'general-support',
    title: 'General Support',
    description:
      'For questions about using GitScope or problems with the application, contact the support team.',
    icon: MessageCircle,
    accentColor: '#22C55E',
    action: {
      label: 'Contact Support',
      href: 'mailto:support@gitscope.app',
    },
  },
];

export const privacyContactNotice: PrivacyContactNoticeData = {
  badge: 'Privacy Requests',
  title: 'Include Enough Detail to Help Us Respond.',
  description:
    'When submitting a privacy request, provide enough information for us to understand your request and identify the relevant account or data. We may ask for additional information to verify the request.',
  icon: ShieldCheck,
  accentColor: '#8B5CF6',
};
