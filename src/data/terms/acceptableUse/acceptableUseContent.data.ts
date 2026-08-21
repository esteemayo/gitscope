import { ShieldCheck } from 'lucide-react';
import { AcceptableUseContent } from '@/types/terms/acceptableUse';

export const acceptableUseContent: AcceptableUseContent = {
  badge: '05 - Acceptable Use',
  title: 'Acceptable Use.',
  description:
    'GitScope is designed for legitimate GitHub analytics and developer workflows. You must use the platform responsibly and avoid activities that compromise security, availability, or the rights of others.',
  headerIcon: ShieldCheck,
  intro:
    'You agree to use GitScope only for lawful purposes and in accordance with these Terms. The following guildelines explain the types of activity permitted on the platform and the conduct that is not allowed.',
  accentColor: '#4F46E5',
};
