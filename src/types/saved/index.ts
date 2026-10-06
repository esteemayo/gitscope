export interface SavedProfile {
  id: number;
  login: string;
  name: string | null;
  avatarUrl: string;
  bio: string | null;
  location: string | null;
  repositories: number;
  stars: number;
  followers: number;
  lastViewed: string;
  accentColor: string;
  isPinned: boolean;
}

export interface RecentProfile {
  id: number;
  name: string;
  login: string;
  avatarUrl: string;
  bio?: string | null;
  repositories: number;
  viewedAt: string;
}
