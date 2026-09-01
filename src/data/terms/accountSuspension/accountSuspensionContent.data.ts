import { UserRoundX } from 'lucide-react';
import { AccountSuspensionContent } from '@/types/terms/accountSuspension';

export const accountSuspensionContent: AccountSuspensionContent = {
  badge: '14 · Account Enforcement',
  title: 'Account Suspension.',
  description:
    'GitScope may restrict, suspend, or terminate account access where use of the service violates these Terms, creates security risks, or threatens the integrity of the platform.',
  headerIcon: UserRoundX,
  intro:
    'We may take action against an account when we reasonably believe that continued access violates these Terms, creates a security or operational risk, involves misuse of the service, or interferes with GitScope or other users. The level of action taken may depend on the nature, severity, and frequency of the issue.',
  accentColor: '#66778A',
};
