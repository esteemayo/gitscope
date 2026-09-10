import type { LucideIcon } from 'lucide-react';

export interface DocsNavItem {
  title: string;
  href: string;
  icon?: LucideIcon | React.ComponentType;
}

export interface DocsNavSection {
  title: string;
  items: DocsNavItem[];
}
