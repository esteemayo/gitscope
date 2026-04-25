import { JSX } from 'react';

export interface StatsCardProps {
  label: string;
  value: number;
  delta?: number;
  hint?: string
  icon: JSX.Element
}
