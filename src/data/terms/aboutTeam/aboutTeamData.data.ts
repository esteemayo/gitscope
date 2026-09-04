import * as data from './aboutTeam.data';
import { aboutTeamContent } from './aboutTeamContent.data';

import { AboutTeamProps } from '@/types/terms/aboutTeam/about.team.type';

export const aboutTeamData: AboutTeamProps = {
  ...aboutTeamContent,
  teamVisual: data.aboutTeamVisual,
  focusItems: data.aboutTeamFocusItems,
  members: data.aboutTeamMembers,
};
