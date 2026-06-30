import type { Payload } from 'recharts/types/component/DefaultTooltipContent';

export interface LanguageTooltipProps {
  active?: boolean;
  payload?: Payload<number, string>[];
}
