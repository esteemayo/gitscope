export interface ModalProps {
  isOpen: boolean;
  closeOnEscape?: boolean;
  closeOnOutsideClick?: boolean;
  showCloseButton?: boolean;
  onClose?(): void;
  children: React.ReactNode;
}
