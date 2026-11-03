import { AWARD_DEFINITIONS } from '@/config/awards.config';
import { AwardEvaluationProps, AwardStatus } from '@/types/dashboard/awards';

const getAccountAgeInYears = (createdAt: string): number => {
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
    years -= 1;
  }

  return Math.max(0, years);
};

const getProgress = (value: number, threshold: number): number => {
  if (threshold <= 0) return 0;

  return Math.min(100, Math.round((value / threshold) * 100));
};

const getAwardStatus = (
  value: number,
  threshold: number,
  isAvailable = true,
): AwardStatus => {
  if (!isAvailable) return 'unavailable';

  return value >= threshold ? 'earned' : 'locked';
};

export const getDeveloperAwards = ({
  profile,
  repositories,
  languages,
  repositoriesComplete,
}: AwardEvaluationProps) => {
  const totalStars = repositories.reduce(
    (total, repository) => total + repository.stargazers_count,
    0,
  );

  const accountAge = getAccountAgeInYears(profile.created_at);

  const distinctLanguages = new Set(
    languages
      .filter(
        (language) => Number.isFinite(language.bytes) && language.bytes > 0,
      )
      .map((language) => language.name.toLowerCase()),
  );

  const values: Record<
    string,
    {
      value: number;
      available: boolean;
      progressLabel: string;
    }
  > = {
    'star-collector': {
      value: totalStars,
      available: repositoriesComplete,
      progressLabel: `${totalStars.toLocaleString()} / 100 stars`,
    },
    'open-source-builder': {
      value: profile.public_repos,
      available: true,
      progressLabel: `${profile.public_repos.toLocaleString()} / 25 repositories`,
    },
    'community-favorite': {
      value: profile.followers,
      available: true,
      progressLabel: `${profile.followers.toLocaleString()} / 100 followers`,
    },
    'seasoned-developer': {
      value: accountAge,
      available: !Number.isNaN(new Date(profile.created_at).getTime()),
      progressLabel: `${accountAge} / 5 years`,
    },
    polyglot: {
      value: distinctLanguages.size,
      available: repositoriesComplete,
      progressLabel: `${distinctLanguages.size} / 5 languages`,
    },
  };

  return AWARD_DEFINITIONS.map((definition) => {
    const evaluation = values[definition.id];

    const progress = getProgress(evaluation.value, definition.threshold);

    const progressLabel = evaluation.available
      ? evaluation.progressLabel
      : 'Complete repository data required';

    const status = getAwardStatus(
      evaluation.value,
      definition.threshold,
      evaluation.available,
    );

    return {
      ...definition,
      status,
      progress,
      progressLabel,
    };
  });
};
