import { GitHubProfile, GitHubRepository } from '../index';
import { LanguageDistributionItem } from '../analytics/index';

export interface ProfileIntelligenceProps {
  profile: GitHubProfile;
  repositories: GitHubRepository[];
  languages: LanguageDistributionItem[];
  isLoading?: boolean;
}
