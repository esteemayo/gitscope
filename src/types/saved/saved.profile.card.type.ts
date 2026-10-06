import { SavedProfile } from './index';

export interface SavedProfileCardProps {
  profile: SavedProfile;
  draggable?: boolean;
  onPin?(profileId: number): void;
  onOpen?(username: string): void;
}
