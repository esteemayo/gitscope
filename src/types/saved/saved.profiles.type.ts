import { SavedView } from './index';
import { SavedProfile } from './card/index';

export interface SavedProfilesProps {
  view: SavedView;
  profiles: SavedProfile[];
  onDelete: React.Dispatch<React.SetStateAction<SavedProfile | null>>;
}
