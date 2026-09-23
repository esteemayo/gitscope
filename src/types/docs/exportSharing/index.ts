export interface ExportCardType {
  id: string;
  title: string;
  description: string;
  accentColor: string;
  items: string[];
}

export interface ShareStepType {
  title: string;
  description: string;
  accentColor: string;
}

export interface ShareContextType {
  title: string;
  description: string;
  accentColor: string;
}

export interface ExportComparisonType {
  id: string;
  label: string;
  accentColor: string;
  items: string[];
}

export interface SharingStepItem {
  id: string;
  title: string;
  description: string;
}
