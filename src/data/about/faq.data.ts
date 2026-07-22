import { FAQItemData } from '@/types/about';

export const faqItems: FAQItemData[] = [
  {
    id: 'free',
    question: 'Is GitScope free to use?',
    answer:
      'Yes. GitScope is free to explore and analyze public GitHub profiles and repositories.',
  },
  {
    id: 'private',
    question: 'Can GitScope access private repositories?',
    answer:
      'No. GitScope only analyzes public GitHub data and does not access private repoitories.',
  },
  {
    id: 'security',
    question: 'How does GitScope handle authentication?',
    answer:
      'GitScope uses GitHub OAuth for secure authentication and never stores your GitHub password.',
  },
  {
    id: 'comparison',
    question: 'Can I compare multiple GitHub profiles?',
    answer:
      'Yes. GitScope provides side-by-side profile comparison to help evaluate repository activity, languages and overall development trends.',
  },
  {
    id: 'updates',
    question: 'How often is repository data refreshed?',
    answer:
      'Repository information is retrieved directly from GitHub whenever analytics are requested, ensuring up-to-date insights.',
  },
  {
    id: 'opensource',
    question: 'Is GitScope open source?',
    answer:
      'Not yet. It is actively being developed, with additional features and improvements planned on the public roadmap.',
  },
];
