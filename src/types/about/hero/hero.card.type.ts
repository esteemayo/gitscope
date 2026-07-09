import { LucideProps } from 'lucide-react';

export interface HeroCardProps {
  icon: React.ForwardRefExoticComponent<
    Omit<LucideProps, 'ref'> & React.RefAttributes<SVGSVGElement>
  >;
  title: string;
  value: string;
  trend: string;
}
