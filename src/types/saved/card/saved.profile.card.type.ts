import { SavedView } from '../index';
import { SavedProfile } from './index';

export interface SavedProfileCardProps {
  view?: SavedView;
  profile: SavedProfile;
  isDraggable?: boolean;
  isPinDisabled?: boolean;
  onPin?(profileId: number): void;
  onDelete: React.Dispatch<React.SetStateAction<SavedProfile | null>>;
}
