import { TooltipIndex } from 'recharts';
import { Language } from './index';

export interface LanguageChartProps {
  languages: Language[];
  isAnimationActive?: boolean;
  defaultIndex?: TooltipIndex;
}
