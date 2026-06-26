import { LucideProps } from 'lucide-react';

export interface ProfileStatsCardProps {
  icon: React.ForwardRefExoticComponent<
    Omit<LucideProps, 'ref'> & React.RefAttributes<SVGSVGElement>
  >;
  label: string;
  value: number;
  index: number;
}
