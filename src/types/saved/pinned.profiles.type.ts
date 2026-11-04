import { SavedProfile } from './card/index';

export interface PinnedProfilesProps {
  profiles: SavedProfile[];
  onReorder(profiles: SavedProfile[]): void;
  onToggle(profileId: number): void;
  onShare?(profile: SavedProfile): void;
  onDelete(profile: SavedProfile): void;
}
