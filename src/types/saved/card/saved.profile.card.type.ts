import { SavedView } from '../index';
import { SavedProfile } from './index';

export interface SavedProfileCardProps {
  view?: SavedView;
  profile: SavedProfile;
  draggable?: boolean;
  isPinDisabled?: boolean;
  onPin?(profileId: number): void;
  onOpen?(username: string): void;
  onDelete: React.Dispatch<React.SetStateAction<SavedProfile | null>>;
}
