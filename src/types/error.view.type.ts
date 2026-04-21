export interface ErrorViewProps {
  title: string;
  message: string;
  imageSrc?: string;
  icon?: React.ReactElement;
  action?: {
    label: string;
    onClick(): void;
  };
  meta?: string;
  variant?: 'default' | 'warning' | 'network';
}
