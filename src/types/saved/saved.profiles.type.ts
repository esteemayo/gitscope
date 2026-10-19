import { SavedView } from './index';
import { SavedProfile } from './card/index';

export interface SavedProfilesProps {
  view: SavedView;
  profiles: SavedProfile[];
  canExpand: boolean;
  isExpanded: boolean;
  hasReachedPinLimit: boolean;
  showLess(): void;
  showMore(): void;
  onToggle(profileId: number): void;
  onDelete: React.Dispatch<React.SetStateAction<SavedProfile | null>>;
}
