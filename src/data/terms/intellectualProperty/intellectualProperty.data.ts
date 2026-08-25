import { Copyright, FileCode2, Globe2, Image, LockKeyhole, Package, Palette, ShieldCheck, UserRound } from 'lucide-react';

import GitHubLogoIcon from '@/components/icons/GitHubLogoIcon';
import {
  IntellectualPropertyLayerType,
  IntellectualPropertyNoticeType,
  IntellectualPropertyRuleType,
} from '@/types/terms/intellectualProperty';

export const intellectualPropertyLayers: IntellectualPropertyLayerType[] = [
  {
    id: 'gitscope',
    label: 'Platform',
    title: 'GitScope',
    description: 'The GitScope application, interface, visual system, original code, branding, documentation, and original product materials are owned by or licensed to GitScope, unless otherwise stated.',
    icon: Globe2,
    accentColor: '#60A5FA'
  },
  {
    id: 'user-content',
    label: 'Your content',
    title: 'Content you provide',
    description: 'You retain ownership of content and materials you submit or otherwise control, subject to the rights and permissions required for GitScope to provide its services.',
    icon: UserRound,
    accentColor: '#34D399'
  },
  {
    id: 'github',
    label: 'Third party',
    title: 'Github content',
    description: "GitHub repositories, profiles, trademarks, and related materials remain subject to their respective ownership rights, licenses, and GitHub's applicable terms.",
    icon: GitHubLogoIcon,
    accentColor: '#A78BFA'
  },
  {
    id: 'third-party',
    label: 'External rights',
    title: 'Third-party materials',
    description: 'Libraries, frameworks, icons, fonts, services, and other third-party materials remain subject to their respective licenses and ownership terms.',
    icon: Package,
    accentColor: '#F59E0B'
  },
];

export const intellectualPropertyRules: IntellectualPropertyRuleType[] = [
  {
    id: 'limited-license',
    title: 'Limited access to GitScope',
    description: 'Subject to these Terms, GitScope grants you a limited, non-exclusive, non-transferable right to access and use the service for its intended purposes.',
    icon: ShieldCheck,
    accentColor: '#60A5FA'
  },
  {
    id: 'no-copying',
    title: 'No unauthorized copying',
    description: 'You must not copy, reproduce, redistribute, modify, or create derivative works from protected GitScope materials without appropriate authorization.',
    icon: FileCode2,
    accentColor: '#F472B6'
  },
  {
    id: 'branding',
    title: 'Brand and visual identity',
    description: 'GitScope names, logos, visual elements, product marks, and associated branding must not be used in a way that suggests unauthorized ownership, sponsorship, or endorsement.',
    icon: Palette,
    accentColor: '#A78BFA'
  },
  {
    id: 'source-code',
    title: 'Protected source code',
    description: 'Access to GitScope through the application does not transfer ownership of the underlying source code, architecture, or proprietary implementation.',
    icon: LockKeyhole,
    accentColor: '#34D399'
  },
  {
    id: 'media-assets',
    title: 'Original media and assets',
    description: 'Original illustrations, graphics, interface assets, documentation content, and other protected materials remain subject to their applicable ownership rights.',
    icon: Image,
    accentColor: '#FBBF24'
  },
];

export const intellectualPropertyNotices: IntellectualPropertyNoticeType = {
  title: 'Third-party rights remain separate',
  description:
    'Using GitSCope does not give you ownership of GitHub or other third-party services, content, trademarks, software, or materials displayed through or connected to the application.',
  icon: Copyright,
  accentColor: '#F59E0B',
};
