import { LucideIcon } from 'lucide-react';

export interface StorageTechnologyStatus {
  label: string;
  accentColor: string;
}

export interface StorageTechnology {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon | React.ComponentType;
  accentColor: string;
  status: StorageTechnologyStatus;
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

export interface StorageType {
  label: string;
  accentColor: string;
}

export interface BrowserStorageItem {
  id: string;
  name: string;
  storageType: StorageType;
  purpose: string;
  persistence: string;
  icon: LucideIcon | React.ComponentType;
  accentColor: string;
}

export interface BrowserStorageOverview {
  badge: string;
  title: string;
  description: string;
  items: BrowserStorageItem[];
}

export interface StorageControlAction {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon | React.ComponentType;
  accentColor: string;
}

export interface StorageNoticeData {
  badge: string;
  title: string;
  description: string;
  icon: LucideIcon | React.ComponentType;
  accentColor: string;
  controlOptions: StorageControlAction[];
}
