import { SavedView } from '../index';

export interface SavedProfilesViewToggleProps {
  view: SavedView;
  onViewChange: React.Dispatch<React.SetStateAction<SavedView>>;
}
