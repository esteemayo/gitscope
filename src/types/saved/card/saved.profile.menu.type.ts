import { SavedProfile } from './index';

export interface SavedProfileMenuProps {
  profile: SavedProfile;
  onShare?(profile: SavedProfile): void;
  onDelete: React.Dispatch<React.SetStateAction<SavedProfile | null>>;
}
