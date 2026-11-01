import { GitHubRepository } from '../repository';
import { GitHubProfile } from '../index';
import { LanguageDistributionItem } from '../analytics';

export interface IntelligenceData {
  profile: GitHubProfile;
  repositories: GitHubRepository[];
  languages: LanguageDistributionItem[];
}

export interface IntelligenceInsightType {
  id: string;
  title: string;
  value: string;
  description: string;
  detail: string;
  icon: 'layers' | 'code' | 'users' | 'clock';
  accentColor: string;
}
