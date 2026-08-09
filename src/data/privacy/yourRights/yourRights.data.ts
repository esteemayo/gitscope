import {
  Eye,
  FileEdit,
  LockKeyhole,
  MessageSquare,
  ShieldCheck,
  Trash2,
} from 'lucide-react';
import { UserRight } from '@/types/privacy/yourRights';

export const userRights: UserRight[] = [
  {
    id: 'access',
    title: 'Right to Access',
    description:
      'You can request information about the personal data GitScope processes about you and how it is used.',
    icon: Eye,
    accentColor: '#4F46E5',
  },
  {
    id: 'correction',
    title: 'Right to Correction',
    description:
      'You can request correction of inaccurate or incomplete personal information associated with your GitScope account.',
    icon: FileEdit,
    accentColor: '#0EA5E9',
  },
  {
    id: 'deletion',
    title: 'Right to Deletion',
    description:
      'You can request deletion of personal information associated with your account, subject to applicable requirements.',
    icon: Trash2,
    accentColor: '#EF4444',
  },
  {
    id: 'privacy',
    title: 'Right to Privacy',
    description:
      'You have control over whether you authenticate with GitHub and which GitScope features you choose to use.',
    icon: LockKeyhole,
    accentColor: '#8B5CF6',
  },
  {
    id: 'withdraw',
    title: 'Right to Withdraw Consent',
    description:
      'You can revoke GitHub authorization through your GitHub account settings when you no longer want GitScope to access authorized resources.',
    icon: ShieldCheck,
    accentColor: '#22C55E',
  },
  {
    id: 'contact',
    title: 'Right to Ask Questions',
    description:
      'You can contact GitScope with questions or concerns about how your information is collected, used, or protected.',
    icon: MessageSquare,
    accentColor: '#F59E0B',
  },
];
