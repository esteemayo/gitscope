import {
  SecurityOverviewItem,
  SecurityFeature,
  SecurityLayerItem,
  TrustBanner,
  SecurityTrustItem,
  SecurityOutcome,
} from './index';

export interface DataStorageSecurityProps {
  badge: string;
  title: string;
  subtitle: string;
  overview: SecurityOverviewItem[];
  trustItems: SecurityTrustItem[];
  features: SecurityFeature[];
  securityLayersBadge: string;
  securityLayersTitle: string;
  securityLayersSubtitle: string;
  layers: SecurityLayerItem[];
  securityOutcome: SecurityOutcome;
  trustBanner: TrustBanner;
}
