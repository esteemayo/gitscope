import type { LucideIcon } from 'lucide-react';

export interface GithubAuthContent {
  badge: string;
  title: string;
  description: string;
  headerIcon?: LucideIcon | React.ComponentType;
  intro: string;
  flowTitle: string;
  flowDescription: string;
  notesTitle: string;
  notesDescription: string;
  accentColor?: string;
}

export interface GithubAuthStepData {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon | React.ComponentType;
  accentColor: string;
}

export interface GithubAuthNoteData {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon | React.ComponentType;
  accentColor: string;
}
