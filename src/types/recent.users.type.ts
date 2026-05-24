export interface RecentUsersProps {
  recentUsers: string[];
  onKeyDown(e: React.KeyboardEvent<HTMLButtonElement>, index: number): void;
  onClearAll(): void;
  onRemoveUser(user: string): void;
  ref: React.RefObject<(HTMLButtonElement | null)[]>
}
