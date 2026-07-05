import { LucideProps } from 'lucide-react';

export interface AboutStatCardProps {
  icon: React.ForwardRefExoticComponent<
    Omit<LucideProps, 'ref'> & React.RefAttributes<SVGSVGElement>
  >;
  value: string;
  label: string;
  trend: string;
  trendLabel: string;
  index: number;
}
