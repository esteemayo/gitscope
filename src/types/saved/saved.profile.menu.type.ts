import { SavedProfile } from './index';

export interface SavedProfileMenuProps {
  profile: SavedProfile;
  onShare?(profile: SavedProfile): void;
  onDelete?(profileId: string): void;
}
