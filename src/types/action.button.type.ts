export interface ActionButtonProps {
  icon: React.ReactNode;
  label: string;
  title?: string;
  disabled?: boolean;
  onClick(): void;
  onKeyDown?(e: React.KeyboardEvent<HTMLButtonElement>): void;
  innerRef?: React.RefObject<HTMLButtonElement | null>;
}
