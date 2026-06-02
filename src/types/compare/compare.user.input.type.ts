import { GitHubUserPreview } from './index';

export interface CompareUserInputProps {
  name: string;
  label: string;
  value: string;
  placeholder: string;
  profile?: GitHubUserPreview | null;
  onClear(): void;
  onChange(value: string): void;
}
