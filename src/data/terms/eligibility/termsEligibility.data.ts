import {
  BriefcaseBusiness,
  CalendarCheck2,
  CheckCircle2,
  UserCheck,
} from 'lucide-react';
import { TermsEligibilityItemData } from '@/types/terms/eligibility';

export const termsEligibilityItems: TermsEligibilityItemData[] = [
  {
    id: 'age',
    title: 'Age Requirement',
    description:
      'You must meet the minimum age required to enter into a binding agreement under the laws applicable to you.',
    icon: CalendarCheck2,
    accentColor: '#60A5FA',
  },
  {
    id: 'legal-capacity',
    title: 'Legal Capacity',
    description:
      'You must have the legal capacity to enter into these Terms and use GitScope in accordance with applicable laws.',
    icon: BriefcaseBusiness,
    accentColor: '#A78BFA',
  },

  {
    id: 'accurate-information',
    title: 'Accurate Information',
    description:
      'Information you provide when creating or maintaining your GitScope account should be accurate, complete, and kept up to date.',
    icon: CheckCircle2,
    accentColor: '#34D399',
  },

  {
    id: 'authorized-use',
    title: 'Authorized Use',
    description:
      'You must have the necessary authorization to connect and use any GitHub account or repository information accessed through GitScope.',
    icon: UserCheck,
    accentColor: '#F59E0B',
  },
];
