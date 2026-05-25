export interface RecentUserProps {
  user: string;
  onRemove(user: string): void;
  onKeyDown(e: React.KeyboardEvent<HTMLButtonElement>): void;
  ref: React.RefObject<HTMLButtonElement | null> | React.Ref<HTMLButtonElement> | undefined;
}
