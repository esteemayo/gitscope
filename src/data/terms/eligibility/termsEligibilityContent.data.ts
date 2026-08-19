import { UserCheck } from 'lucide-react';
import { TermsEligibilityContent } from '@/types/terms/eligibility';

export const termsEligibilityContent: TermsEligibilityContent = {
  badge: '02 · Eligibility',
  title: 'Who can use GitScope?',
  description:
    'GitScope is intended for users who meet the requirements described below and have the legal capacity to agree to these Terms.',
  headerIcon: UserCheck,
  intro:
    'You must meet the applicable eligibility requirements before creating an account or using GitScope. By using the platform, you confirm that the information you provide is accurate and that you have the authority to enter into these Terms.',
  accentColor: '#22C55E',
};
