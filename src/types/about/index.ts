import { LucideProps } from 'lucide-react';

export interface HeroStat {
  id: string;
  label: string;
  value: string;
}

export interface HeroCardItem {
  id: string;
  icon: React.ForwardRefExoticComponent<
    Omit<LucideProps, 'ref'> & React.RefAttributes<SVGSVGElement>
  >;
  title: string;
  value: string;
  trend: string;
}
