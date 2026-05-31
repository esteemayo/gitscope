export interface UserDashboardProps {
  label: 'User A' | 'User B';
  data: {
    name?: string;
    login: string;
    avatar_url?: string;
    repos: number;
    followers: number;
  };
}
