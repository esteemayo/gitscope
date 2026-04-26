import { JSX } from 'react';
import { SortType } from './index';

export interface StatsCardProps {
  label: string;
  value: number;
  delta?: number;
  hint?: string;
  icon: JSX.Element;
  filter: SortType;
  sort: SortType;
  onSort: React.Dispatch<React.SetStateAction<SortType>>;
}
