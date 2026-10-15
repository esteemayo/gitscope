import { SavedProfile } from './index';

export interface DeleteSavedProfileModalProps {
  isOpen: boolean;
  isDeleting?: boolean;
  profile: SavedProfile | null;
  onClose(): void;
  onConfirm(): void;
}
