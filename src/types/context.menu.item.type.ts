export interface ContextMenuItemProps {
  label: string;
  icon?: React.JSX.Element;
  onClick?(): void;
  onKeyDown?(e: React.KeyboardEvent<HTMLButtonElement>): void;
}
