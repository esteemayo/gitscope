import type { LucideIcon } from 'lucide-react';

export interface SharePreviewProps {
  icon: LucideIcon | React.ComponentType;
  title: string;
  subtitle: string;
  accentColor: string;
  buttonLabel?: string;
}
