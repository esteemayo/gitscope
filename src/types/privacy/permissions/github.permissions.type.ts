import { PermissionItem, PermissionOverviewItem } from './index';

export interface GitHubPermissionsProps {
  badge: string;
  title: string;
  subtitle: string;
  overview: PermissionOverviewItem[];
  permissions: PermissionItem[];
}
