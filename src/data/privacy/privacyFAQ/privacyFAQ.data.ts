import {
  Database,
  LockKeyhole,
  MessageCircleQuestion,
  ShieldCheck,
} from 'lucide-react';

import GitHubLogoIcon from '@/components/icons/GitHubLogoIcon';
import {
  PrivacyFAQCategory,
  PrivacyFAQNotice,
} from '@/types/privacy/privacyPolicy';

export const privacyFAQCategories: PrivacyFAQCategory[] = [
  {
    id: 'data-collection',
    label: 'Data & Collection',
    icon: Database,
    questions: [
      {
        id: 'what-data-does-gitscope-collect',
        category: 'Data & Collection',
        question: 'What information does GitScope collect?',
        answer:
          'GitScope collects the information needed to provide its analytics features. This can include account information, GitHub profile information, repository and activity data available through your authorized GitHub access, and technical information required to operate the service.',
      },
      {
        id: 'why-does-gitscope-need-data',
        category: 'Data & Collection',
        question: 'Why does GitScope need this information?',
        answer:
          'The information allows GitScope to authenticate your account, retrieve GitHub data, generate analytics, provide dashboard features, maintain the service, and improve reliability and security.',
      },
      {
        id: 'does-gitscope-sell-data',
        category: 'Data & Collection',
        question: 'Does GitScope sell my personal information?',
        answer:
          'GitScope is not designed around selling  personal information. Information collected through the service is used to provide, secure, maintain, and improve GitScope in accordance with this Privacy Policy.',
      },
    ],
  },
  {
    id: 'github-access',
    label: 'GitHub Access',
    icon: GitHubLogoIcon,
    questions: [
      {
        id: 'what-github-permissions-does-gitscope-use',
        category: 'GitHub Access',
        question: 'What GitHub permissions does GitScope request?',
        answer:
          'GitScope requests only the GitHub access required for the features you use. The permissions requested are presented during the GitHub authorization process.',
      },
      {
        id: 'does-gitscope-get-my-password',
        category: 'GitHub Access',
        question: 'Does GitScope receive my GitHub password?',
        answer:
          'No. GitHub handles your authentication. GitScope does not receive your GitHub account password through the authorization process.',
      },
      {
        id: 'can-i-revoke-github-access',
        category: 'GitHub Access',
        question: "Can I revoke GitScope's GitHub access?",
        answer:
          "Yes. You can revoke GitScope's authorization through your GitHub account settings. Revoking access prevents GitScope from obtaining additional information through that authorization.",
      },
    ],
  },
  {
    id: 'storage-security',
    label: 'Storage & Security',
    icon: LockKeyhole,
    questions: [
      {
        id: 'does-gitscope-store-github-data',
        category: 'Storage & Security',
        question: 'Does GitScope store GitHub data?',
        answer:
          'Some information may be stored when required to provide GitScope features. The type and retention period depend on the purpose for which the information is processed.',
      },
      {
        id: 'how-does-gitscope-protect-data',
        category: 'Storage & Security',
        question: 'How does GitScope protect my information?',
        answer:
          'GitScope uses security measures designed to reduce the risk of unauthorized access, alteration, disclosure, or loss of information. Security practices are reviewed as the platform evolves.',
      },
      {
        id: 'does-gitscope-use-cookies',
        category: 'Storage & Security',
        question: 'Does GitScope use cookies or local storage?',
        answer:
          'GitScope may use browser storage technologies such as cookies or local storage when required for authentication, preferences, functionality, or other documented purposes.',
      },
    ],
  },
  {
    id: 'privacy-rights',
    label: 'Your Privacy Rights',
    icon: ShieldCheck,
    questions: [
      {
        id: 'can-i-access-my-data',
        category: 'Privacy Rights',
        question: 'Can I request access to my information',
        answer:
          'Depending on your location and applicable privacy laws, you may have rights to access, correct, delete, restrict, or otherwise control certain personal information associated with your use of GitScope.',
      },
      {
        id: 'can-i-delete-my-data',
        category: 'Privacy Rights',
        question: 'Can I request deletion of my information?',
        answer:
          'Depending on applicable requirements, you may request deletion of personal information associated with your account. Some information may need to be retained where required for legitimate operational, security, or legal purposes.',
      },
      {
        id: 'how-do-i-contact-gitscope',
        category: 'Privacy Rights',
        question: 'How do I contact GitScope about privacy?',
        answer:
          'Use the privacy contact information provided in this Privacy Policy to ask questions, submit a privacy request, or raise a concern about how your information is handled.',
      },
    ],
  },
];

export const privacyFAQNotice: PrivacyFAQNotice = {
  badge: 'Need More Help',
  title: 'Still Have Privacy Questions?',
  description:
    "If your question isn't answered here, review the relevant section of this Privacy Policy or contact GitScope using the privacy contact information provided below.",
  icon: MessageCircleQuestion,
  accentColor: '#8B5CF6',
};
