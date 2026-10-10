import { SavedView } from '../index';
import { SavedProfile } from './index';

export interface SavedProfileCardProps {
  view?: SavedView;
  profile: SavedProfile;
  draggable?: boolean;
  onPin?(profileId: number): void;
  onOpen?(username: string): void;
}
