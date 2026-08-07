import { LucideIcon } from 'lucide-react';

export interface StorageTechnology {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon | React.ComponentType;
  accentColor: string;
}

export interface StorageCommitment {
  id: string;
  title: string;
  icon: LucideIcon;
  accentColor: string;
}

export interface StorageSummary {
  badge: string;
  title: string;
  description: string;
  commitmentsTitle: string;
  technologies: StorageTechnology[];
  commitments: StorageCommitment[];
}

export type StorageType = 'Cookie' | 'Local Storage' | 'Session Storage';

export interface BrowserStorageItem {
  id: string;
  name: string;
  storageType: StorageType;
  purpose: string;
  persistence: string;
  icon: LucideIcon | React.ComponentType;
  accentColor: string;
}

export interface StorageNotice {
  badge: string;
  title: string;
  description: string;
  icon: LucideIcon | React.ComponentType;
  accentColor: string;
}
