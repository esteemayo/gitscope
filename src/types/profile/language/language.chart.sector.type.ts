import { type PieSectorShapeProps } from 'recharts';
import { Language } from './index';

export interface LanguageChartSectorProps extends PieSectorShapeProps {
  languages: Language[];
}
