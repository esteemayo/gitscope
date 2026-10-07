import { SavedView } from './index';

export interface SavedToolbarProps {
  view: SavedView;
  onView: React.Dispatch<React.SetStateAction<SavedView>>;
}
