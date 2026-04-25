import { TooltipIndex } from 'recharts';
import { LanguageType } from './index';

export interface LanguageChartProps {
  data: LanguageType[];
  isAnimationActive?: boolean;
  defaultIndex?: TooltipIndex;
}
