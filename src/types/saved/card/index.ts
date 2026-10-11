export interface SavedProfile {
  id: number;
  login: string;
  name: string | null;
  avatarUrl?: string;
  bio: string | null;
  location: string | null;
  repositories: number;
  stars: number;
  followers: number;
  accentColor: string;
  isPinned: boolean;
  lastViewedAt: string;
}
