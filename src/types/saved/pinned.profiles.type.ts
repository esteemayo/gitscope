import { SavedProfile } from './card/index';

export interface PinnedProfilesProps {
  profiles: SavedProfile[];
  onToggle(profileId: number): void;
  onDelete: React.Dispatch<React.SetStateAction<SavedProfile | null>>;
}
