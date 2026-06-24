import { AchievementType, GithubUser, RepositoryType } from '@/types/profile';

export const getAchievements = (user: GithubUser, repos: RepositoryType[]) => {
  const achievements: AchievementType[] = [];

  const totalStars = repos.reduce(
    (acc, repo) => acc + repo.stargazers_count,
    0,
  );

  const accountAge =
    new Date().getFullYear() - new Date(user.created_at).getFullYear();

  if (user.followers >= 100) {
    achievements.push({
      id: 'followers',
      icon: '',
      title: '100+ Followers',
      description: 'Built a growing developer audience.',
    });
  }

  if (user.public_repos >= 50) {
    achievements.push({
      id: 'opensource',
      icon: '',
      title: 'Open Source Explorer',
      description: 'Published over 50 repositories.',
    });
  }

  if (accountAge >= 5) {
    achievements.push({
      id: 'veteran',
      icon: '',
      title: 'Veteran Developer',
      description: 'GitHub member for over 5 years.',
    });
  }

  if (totalStars >= 100) {
    achievements.push({
      id: 'stars',
      icon: '',
      title: 'Star Collector',
      description: 'Collected 100+ stars across repositories.',
    });
  }

  return achievements;
};
