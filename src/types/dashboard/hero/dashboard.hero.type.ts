import { GitHubProfile, ProfileStat } from '../index';

export interface DashboardHeroProps {
  profile: GitHubProfile;
  stats: ProfileStat[];
  isSaved?: boolean;
  onSave(profile: GitHubProfile): void;
}
