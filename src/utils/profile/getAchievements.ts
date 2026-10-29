import { FlameIcon, RocketIcon, StarIcon, TrophyIcon } from 'lucide-react';
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
      icon: FlameIcon,
      title: '100+ Followers',
      description: 'Built a growing developer audience.',
      accentColor: '#4F46E5'
    });
  }

  if (user.public_repos >= 50) {
    achievements.push({
      id: 'opensource',
      icon: RocketIcon,
      title: 'Open Source Explorer',
      description: 'Published over 50 repositories.',
      accentColor: '#22C55E'
    });
  }

  if (accountAge >= 5) {
    achievements.push({
      id: 'veteran',
      icon: TrophyIcon,
      title: 'Veteran Developer',
      description: 'GitHub member for over 5 years.',
      accentColor: '#8B5CF6'
    });
  }

  if (totalStars >= 100) {
    achievements.push({
      id: 'stars',
      icon: StarIcon,
      title: 'Star Collector',
      description: 'Collected 100+ stars across repositories.',
      accentColor: '#F59E0B'
    });
  }

  return achievements;
};
