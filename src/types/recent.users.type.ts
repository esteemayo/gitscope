export interface RecentUsersProps {
  recentUsers: string[];
  removedUser: string | null;
  onKeyDown(e: React.KeyboardEvent<HTMLButtonElement>, index: number): void;
  onClearAll(): void;
  onRemoveUser(user: string): void;
  onUndoRemove(): void;
  ref: React.RefObject<(HTMLButtonElement | null)[]>;
}
