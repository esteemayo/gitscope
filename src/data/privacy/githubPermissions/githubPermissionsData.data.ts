import * as data from './githubPermissions.data';
import { githubPermissionsContent } from './githubPermissionsContent.data';

import { GitHubPermissionsProps } from '@/types/privacy/permissions/github.permissions.type';

export const githubPermissionsData: GitHubPermissionsProps = {
  ...githubPermissionsContent,
  overview: data.permissionOverview,
  permissions: data.githubPermissions,
};
