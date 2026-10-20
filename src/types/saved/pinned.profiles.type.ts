import { SavedProfile } from './card/index';

export interface PinnedProfilesProps {
  profiles: SavedProfile[];
  onReorder(profiles: SavedProfile[]): void;
  onToggle(profileId: number): void;
  onDelete: React.Dispatch<React.SetStateAction<SavedProfile | null>>;
}
