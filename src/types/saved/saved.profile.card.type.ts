import { SavedProfile } from './index';

export interface SavedProfileCardProps {
  profile: SavedProfile;
  variant?: 'default' | 'pinned';
  draggable?: boolean;
  onPin?(profileId: string): void;
  onOpen?(username: string): void;
}
