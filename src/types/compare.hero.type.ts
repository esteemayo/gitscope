export interface CompareHeroProps {
  userA: string;
  userB: string;
  isLoading?: boolean;
  onChangeUserA: React.Dispatch<React.SetStateAction<string>>;
  onChangeUserB: React.Dispatch<React.SetStateAction<string>>;
  onSubmit(e: React.SubmitEvent<HTMLFormElement>): void;
}
