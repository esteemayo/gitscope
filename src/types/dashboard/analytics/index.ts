export interface AnalyticsMetric {
  id: string;
  label: string;
  value: number;
  description: string;
  icon: 'star' | 'git-fork' | 'activity';
  accentColor: string;
}

export interface RepositoryComparison {
  name: string;
  stars: number;
  forks: number;
}

export interface LanguageDistributionItem {
  name: string;
  bytes: number;
  percentage: number;
  color: string;
}

export interface AnalyticsData {
  metrics: AnalyticsMetric[];
  repositories: RepositoryComparison[];
  languages: LanguageDistributionItem[];
}
