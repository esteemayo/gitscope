import { AchievementType, GithubUser, RepositoryType } from '@/types/profile';

export const getAchievements = (user: GithubUser, repos: RepositoryType[]) => {
  const achievements: AchievementType[] = [];

  if (user.followers >= 100) {
    achievements.push({
      id: 'followers',
      icon: '',
      title: '100+ Followers',
      description: 'Built a growing developer community.',
    });
  }

  if (user.public_repos >= 50) {
    achievements.push({
      id: 'opensource',
      icon: '',
      title: 'Open Source Explorer',
      description: 'Published 50+ repositories.',
    });
  }

  const date = new Date();

  const currentYear = date.getFullYear();
  const accountCreatedDate = new Date(user.created_at).getFullYear();

  if (user.created_at) {
    achievements.push({
      id: 'veteran',
      icon: '',
      title: 'Veteran Developer',
      description: 'GitHub member for more than 5 years.',
    });
  }

  const totalStars = repos.reduce(
    (acc, repo) => acc + repo.stargazers_count,
    0,
  );

  if (totalStars >= 100) {
    achievements.push({
      id: 'popular',
      icon: '',
      title: 'Popular Creator',
      description: 'Collected over 100 stars.',
    });
  }
};
