export interface ContextMenuItemProps {
  label: string;
  icon?: React.JSX.Element;
  onClick?(): void;
  onKeyDown?(e: React.KeyboardEvent<HTMLButtonElement>): void;
  innerRef?: React.RefObject<HTMLButtonElement | null> | React.Ref<HTMLButtonElement> | undefined;
}
