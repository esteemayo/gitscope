import { BookOpen, GitCompareArrows } from 'lucide-react';
import { NavItem } from '@/types/layout';

export const navItems: NavItem[] = [
  {
    href: '/',
    label: 'Overview',
  },
  {
    href: '/compare-developers',
    label: 'Compare Developers',
    icon: GitCompareArrows,
  },
  {
    href: '/documentation',
    label: 'Docs',
    icon: BookOpen,
  },
  {
    href: '/about',
    label: 'About',
  },
];
