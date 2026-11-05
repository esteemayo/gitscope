import { GitHubProfile, ProfileStat } from '../index';

export interface DashboardHeroProps {
  profile: GitHubProfile;
  isSaved?: boolean;
  onSave(profile: GitHubProfile): void;
}
