export interface RecentProfile {
  id: number;
  name: string;
  login: string;
  avatarUrl?: string;
  bio?: string | null;
  repositories: number;
  viewedAt: string;
  accentColor: string;
}
