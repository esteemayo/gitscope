import { GitHubRepository } from '../repository';
import { GitHubProfile } from '../index';
import { LanguageDistributionItem } from '../analytics';

export interface IntelligenceData {
  profile: GitHubProfile;
  repositories: GitHubRepository[];
  languages: LanguageDistributionItem[];
}

export interface IntelligenceInsight {
  id: string;
  title: string;
  value: string;
  description: string;
  detail: string;
  icon: 'layers' | 'code' | 'users' | 'clock';
  accentColor: string;
}
