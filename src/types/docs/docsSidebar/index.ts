import type { LucideIcon } from 'lucide-react';

export interface DocsNavItem {
  title: string;
  href: string;
  icon?: LucideIcon | React.ComponentType;
  description?: string;
}

export interface DocsNavSection {
  title: string;
  items: DocsNavItem[];
}
