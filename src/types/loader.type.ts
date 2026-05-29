type LoaderVariant = 'fullscreen' | 'contained';

export interface LoaderProps {
  isVisible: boolean;
  text?: string;
  variant?: LoaderVariant;
}
