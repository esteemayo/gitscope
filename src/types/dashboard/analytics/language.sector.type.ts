import { type PieSectorShapeProps } from 'recharts';
import { LanguageDistributionItem } from '@/types/dashboard/analytics';

export interface LanguageSectorProps extends PieSectorShapeProps {
  languages: LanguageDistributionItem[];
}
