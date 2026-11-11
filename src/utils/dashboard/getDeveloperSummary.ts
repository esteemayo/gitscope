import { GitHubProfile, GitHubRepository } from '@/types/dashboard';
import { RepositoryHealthData } from '@/types/dashboard/health';
import { LanguageDistributionItem } from '@/types/dashboard/analytics';
import {
  DeveloperSummaryData,
  SummaryObservation,
} from '@/types/dashboard/summary';

interface GetDeveloperSummaryParams {
  profile: GitHubProfile;
  repositories: GitHubRepository[];
  languages: LanguageDistributionItem[];
  repositoryHealth: RepositoryHealthData;
  repositoriesComplete: boolean;
}

const getAccountAge = (createdAt: string): number => {
  const createdDate = new Date(createdAt);

  if (Number.isNaN(createdDate.getTime())) {
    return 0;
  }

  const now = new Date();

  let years = now.getFullYear() - createdDate.getFullYear();

  const anniversary = new Date(
    now.getFullYear(),
    createdDate.getMonth(),
    createdDate.getDate(),
  );

  if (now < anniversary) {
    years--;
  }

  return Math.max(0, years);
};

const getLeadingLanguage = (
  languages: LanguageDistributionItem[],
): LanguageDistributionItem | null => {
  if (languages.length === 0) {
    return null;
  }

  return [...languages].sort((a, b) => b.bytes - a.bytes)[0];
};

const getPortfolioDescription = (
  profile: GitHubProfile,
  repositories: GitHubRepository[],
  repositoriesComplete: boolean,
): string => {
  const repositoryCount = repositoriesComplete
    ? profile.public_repos
    : repositories.length;

  const repositoryLabel =
    repositoryCount === 1 ? 'public repository' : 'public repositories';

  if (repositoryCount === 0) {
    return 'This GitHub profile currently has no public repositories available for analysis.';
  }

  const accountAge = getAccountAge(profile.created_at);

  const accountDescription =
    accountAge > 0
      ? `The account has been active on GitHub for ${accountAge} ${accountAge === 1 ? 'year' : 'years'}.`
      : '';

  const coverageDescription = repositoriesComplete
    ? `The analysis covers all ${repositoryCount} public repositories.`
    : `The analysis currently covers ${repositoryCount} loaded ${repositoryLabel}`;

  return `This profile has ${repositoryCount} ${repositoryLabel}. ${accountDescription} ${coverageDescription}`;
};

const getObservations = (
  profile: GitHubProfile,
  repositories: GitHubRepository[],
  languages: LanguageDistributionItem[],
  repositoryHealth: RepositoryHealthData,
  repositoriesComplete: boolean,
): SummaryObservation[] => {
  const observations: SummaryObservation[] = [];

  const leadingLanguage = getLeadingLanguage(languages);

  if (leadingLanguage) {
    observations.push({
      id: 'technology-focus',
      title: 'Technology focus',
      description: `${leadingLanguage.name} leads the available language distribution, accounting for ${leadingLanguage.percentage.toFixed(1)}% of the analyzed code.`,
      type: 'technology',
    });

    const originalRepositories = repositories.filter(
      (repository) => !repository.fork,
    );

    const forkedRepositories = repositories.filter(
      (repository) => repository.fork,
    );

    if (repositories.length > 0) {
      observations.push({
        id: 'portfolio-composition',
        title: 'Portfolio composition',
        description: `${originalRepositories.length} original ${originalRepositories.length === 1 ? 'repository' : 'repositories'} and ${forkedRepositories.length} ${forkedRepositories.length === 1 ? 'fork' : 'forks'} appear in the analyzed portfolio.`,
        type: 'neutral',
      });
    }
  }

  if (repositoriesComplete) {
    if (repositoryHealth.recentlyMaintained > 0) {
      observations.push({
        id: 'recent-activity',
        title: 'Recent repository activity',
        description: `${repositoryHealth.recentlyMaintained} ${repositoryHealth.recentlyMaintained === 1 ? 'repository has' : 'repositories have'} received an update within the last 90 days.`,
        type: 'positive',
      });
    }

    if (repositoryHealth.staleRepositories > 0) {
      observations.push({
        id: 'maintenance-attention',
        title: 'Maintenance attention',
        description: `${repositoryHealth.staleRepositories} ${repositoryHealth.staleRepositories === 1 ? 'repository has' : 'repositories have'} not received an update in at least 180 days.`,
        type: 'attention',
      });
    }
  }

  if (repositoriesComplete && repositoryHealth.licenseCoverage !== null) {
    observations.push({
      id: 'license-coverage',
      title: 'License coverage',
      description: `${repositoryHealth.licenseCoverage}% of the analyzed repositories have a detected license.`,
      type: 'neutral',
    });
  }

  if (observations.length === 0 && repositories.length === 0) {
    observations.push({
      id: 'limited-data',
      title: 'Limited repository information',
      description:
        'There is not enough repository information to generate detailed observations.',
      type: 'neutral',
    });
  }

  return observations.slice(0, 4);
};

export const getDeveloperSummary = ({
  profile,
  repositories,
  languages,
  repositoryHealth,
  repositoriesComplete,
}: GetDeveloperSummaryParams): DeveloperSummaryData => {
  const overview = getPortfolioDescription(
    profile,
    repositories,
    repositoriesComplete,
  );

  const observations = getObservations(
    profile,
    repositories,
    languages,
    repositoryHealth,
    repositoriesComplete,
  );

  const dataCoverage = repositoriesComplete
    ? 'This summary uses the complete set of public repositories available to GitScope.'
    : `This summary uses ${repositories.length} loaded repositories. Additional repositories might change the results.`;

  return {
    overview,
    observations,
    dataCoverage,
  };
};
