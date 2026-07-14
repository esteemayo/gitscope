import { LucideProps } from 'lucide-react';

export interface ExportPreviewProps {
  icon: React.ForwardRefExoticComponent<
    Omit<LucideProps, 'ref'> & React.RefAttributes<SVGSVGElement>
  >;
  title: string;
  subtitle: string;
  accentColor: string;
  buttonLabel?: string;
}
