import { SecurityLayerItem, SecurityOutcome } from './index';

export interface SecurityLayersProps {
  badge: string;
  title: string;
  subtitle: string;
  items: SecurityLayerItem[];
  outcome: SecurityOutcome;
}
