export interface CompareFormProps {
  userA: string;
  userB: string;
  isLoading?: boolean;
  onChangeUserA: React.Dispatch<React.SetStateAction<string>>;
  onChangeUserB: React.Dispatch<React.SetStateAction<string>>;
  onSwap(): void;
  onReset(): void;
  onPreset(userA: string, userB: string): void;
  onSubmit(e: React.SubmitEvent<HTMLFormElement>): void;
}
