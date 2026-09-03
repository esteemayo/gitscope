import {
  AtSign,
  Clock3,
  FileQuestion,
  Mail,
  Scale,
  Send,
  ShieldCheck,
} from 'lucide-react';

import {
  ContactChannelType,
  ContactTopicType,
  ResponseExpectationType,
} from '@/types/terms/contact';

export const contactChannels: ContactChannelType[] = [
  {
    id: 'terms',
    label: 'Terms and legal enquiries',
    value: 'legal@gitscope.dev',
    description:
      'For questions about these Terms, legal provisions, or rights and responsibilities related to your use of GitScope.',
    href: 'mailto:legal@gitscope.dev',
    icon: Scale,
    accentColor: '#A78BFA',
  },
  {
    id: 'privacy',
    label: 'Privacy and data enquiries',
    value: 'privacy@gitscope.dev',
    description:
      'For questions relating to privacy, data handling, account information, or applicable data rights.',
    href: 'mailto:privacy@gitscope.dev',
    icon: ShieldCheck,
    accentColor: '#34D399',
  },
];

export const contactTopics: ContactTopicType[] = [
  {
    id: 'terms-question',
    title: 'Question about the Terms',

    description:
      'Ask for clarification about a specific provision or responsibility described in this agreement.',
    icon: FileQuestion,
    accentColor: '#60A5FA',
  },
  {
    id: 'service-issue',
    title: 'Issue with the service',
    description:
      'Report a problem related to your GitScope account, access, or the operation of the platform.',
    icon: AtSign,
    accentColor: '#F59E0B',
  },
  {
    id: 'privacy-request',
    title: 'Privacy or data request',
    description:
      'Contact us about the handling of your information or a request relating to applicable data rights.',
    icon: ShieldCheck,
    accentColor: '#F472B6',
  },
];

export const contactExpectations: ResponseExpectationType[] = [
  {
    id: 'clear-information',
    label: 'Step 01',
    title: 'Send relevant information',
    description:
      'Include enough detail for us to understand the Terms section, account area, or issue involved in your request.',
    icon: Send,
    accentColor: '#60A5FA',
  },
  {
    id: 'review-request',
    label: 'Step 02',
    title: 'We review your enquiry',
    description:
      'We review the information provided and determine the appropriate response or next step.',
    icon: Mail,
    accentColor: '#A78BFA',
  },
  {
    id: 'follow-up',
    label: 'Step 03',
    title: 'We respond when appropriate',
    description:
      'Where a response is required, we reply using the available contact details or communication channel.',
    icon: Clock3,
    accentColor: '#34D399',
  },
];
