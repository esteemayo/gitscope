import { formatNumber } from '../formatNumber';
import { getRelativeAge } from './getRelativeAge';

import { IntelligenceData, IntelligenceInsight } from '@/types/dashboard/intelligence';

export const getProfileIntelligence = ({
  profile,
  repositories,
  languages,
}: IntelligenceData): IntelligenceInsight[] => {
  const originalRepositories = repositories.filter(
    (repository) => !repository.fork,
  );

  const forkedRepositories = repositories.filter(
    (repository) => repository.fork,
  );

  const archivedRepositories = repositories.filter(
    (repository) => repository.archived,
  );

  const totalStars = repositories.reduce(
    (sum, repository) => sum + repository.stargazers_count,
    0,
  );

  const totalForks = repositories.reduce(
    (sum, repository) => sum + repository.forks_count,
    0,
  );

  const sortedLanguages = [...languages]
    .filter((language) => Number.isFinite(language.bytes) && language.bytes > 0)
    .sort((a, b) => b.bytes - a.bytes);

  const leadingLanguage = sortedLanguages[0];

  const sortedByUpdate = repositories
    .filter((repository) => {
      const timestamp = new Date(repository.updated_at).getTime();
      return Number.isFinite(timestamp);
    })
    .sort(
      (a, b) =>
        new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime(),
    );

  const mostRecentlyUpdated = sortedByUpdate[0];

  const recentCutoff = Date.now() - 90 * 86_400_000;

  const updatedWithin90Days = repositories.filter((repository) => {
    const timestamp = new Date(repository.updated_at).getTime();

    return Number.isFinite(timestamp) && timestamp >= recentCutoff;
  }).length;

  const analyzedCount = repositories.length;
  const reportedCount = profile.public_repos;

  const coverageDescription =
    analyzedCount < reportedCount
      ? `Based on ${analyzedCount} of ${reportedCount} public repositories.`
      : `Based on ${analyzedCount} fetched public repositories.`;

  const portfolioDescription =
    analyzedCount === 0
      ? 'No repositories are available to analyze yet.'
      : `${originalRepositories.length} original and ${forkedRepositories.length} forked repositories.`;

  const portfolioDetail =
    analyzedCount > 0
      ? `${archivedRepositories.length} archived . ${coverageDescription}`
      : 'Repository data will appear when available.';

  const languageDescription = leadingLanguage
    ? `${leadingLanguage.name} leads by reported code bytes.`
    : 'Language distribution is not available.';

  const languageDetail = leadingLanguage
    ? `${leadingLanguage.percentage.toFixed(1)}% of the reported language bytes.`
    : 'Fetch repository language data to see this insight.';

  const communityDescription =
    analyzedCount > 0
      ? `${formatNumber(totalStars)} stars and ${formatNumber(totalForks)} forks across the analyzed repositories.`
      : 'Repository engagement data is not available yet.';

  const communityDetail = analyzedCount < reportedCount
    ? `Partial repository totals. ${coverageDescription}`
    : 'Total reflect the repositories included in this analysis.'

  const maintenanceDescription = analyzedCount === 0
    ? 'No repository update data is available.'
    : `${updatedWithin90Days} of ${analyzedCount} analyzed repositories updated within 90 days.`

  const maintenamceDetail = mostRecentlyUpdated
    ? `Most recently updated. ${mostRecentlyUpdated.name} . ${getRelativeAge(mostRecentlyUpdated.updated_at)}.`
    : 'Recent update details are unavailable.'

  return [
    {
      id: 'portfolio',
      title: 'Portfolio composition',
      value: formatNumber(reportedCount),
      description: portfolioDescription,
      detail: portfolioDetail,
      icon: 'layers',
      accentColor: '#818CF8'
    },
    {
      id: 'technology',
      title: 'Technology focus',
      value: leadingLanguage?.name ?? 'Unavailable',
      description: languageDescription,
      detail: languageDetail,
      icon: 'code',
      accentColor: leadingLanguage?.color ?? '#34D399'
    },
    {
      id: 'community',
      title: 'Community reach',
      value: formatNumber(totalStars),
      description: communityDescription,
      detail: communityDetail,
      icon: 'users',
      accentColor: '#FBBF24'
    },
    {
      id: 'maintenance',
      title: 'Maintenance signals',
      value: `${updatedWithin90Days}/${analyzedCount}`,
      description: maintenanceDescription,
      detail: maintenamceDetail,
      icon: 'clock',
      accentColor: '#F472B6'
    },
  ];
};
