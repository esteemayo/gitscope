export interface AuthModalProps {
  title: string;
  description: string;
  features?: string[];
  icon?: React.ReactNode;
  onBack?(): void;
}
