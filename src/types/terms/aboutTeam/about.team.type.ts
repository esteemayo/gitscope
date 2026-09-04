import {
  AboutTeamContent,
  TeamFocusType,
  TeamMemberType,
  TeamVisualData,
} from './index';

export interface AboutTeamProps extends AboutTeamContent {
  teamVisual: TeamVisualData;
  focusItems: TeamFocusType[];
  members: TeamMemberType[];
  className?: string;
  style?: React.CSSProperties;
}
