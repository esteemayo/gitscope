export interface ButtonProps extends
  React.ButtonHTMLAttributes<HTMLButtonElement> {
  disabled?: boolean;
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>['type'];
  children: React.ReactNode;
  onClick?(): void;
}