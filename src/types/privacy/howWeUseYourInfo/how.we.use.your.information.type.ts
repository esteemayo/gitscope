import { UsageStepItem } from './index';

export interface HowWeUseYourInformationProps {
  badge: string;
  title: string;
  subtitle: string;
  steps: UsageStepItem[];
  defaultActiveStep?: string;
}
