export interface RepositorySearchProps {
  value: string;
  placeholder?: string;
  onChange(value: string): void;
  className?: string;
  style?: React.CSSProperties;
}
