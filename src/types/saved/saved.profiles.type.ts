import { SavedView } from './index';
import { SavedProfile } from './card/index';

export interface SavedProfilesProps {
  view: SavedView;
  profiles: SavedProfile[];
  hasReachedPinLimit: boolean;
  onToggle(profileId: number): void;
  onDelete: React.Dispatch<React.SetStateAction<SavedProfile | null>>;
}
