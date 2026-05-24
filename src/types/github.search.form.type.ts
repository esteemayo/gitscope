export interface GitHubSearchFormProps {
  value: string;
  placeholder: string;
  onChange: React.Dispatch<React.SetStateAction<string>>;
  onClear(): void;
  onSubmit(e: React.SubmitEvent<HTMLFormElement>): void;
  onKeyDown?(e: React.KeyboardEvent<HTMLInputElement>): void;
  ref: React.RefObject<HTMLInputElement | null>;
}
