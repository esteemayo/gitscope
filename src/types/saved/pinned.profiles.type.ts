import { SavedProfile } from './card/index';

export interface PinnedProfilesProps {
  profiles: SavedProfile[];
  onDelete: React.Dispatch<React.SetStateAction<SavedProfile | null>>;
}
