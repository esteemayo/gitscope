export interface ContextMenuProps {
  isOpen: boolean;
  onClose(): void;
  children: React.ReactNode;
}
