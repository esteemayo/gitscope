import { LucideProps } from 'lucide-react';

export interface ActivityMetric {
  id: string;
  title: string;
  value: string | number;
  subtitle?: string;
  icon: React.ForwardRefExoticComponent<
    Omit<LucideProps, 'ref'> & React.RefAttributes<SVGSVGElement>
  >;
  trend?: number;
  trendLabel?: string;
  trendDirection?: 'up' | 'down' | 'neutral';
}
