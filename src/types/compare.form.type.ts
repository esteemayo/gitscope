export interface CompareFormProps {
  firstUser: string;
  secondUser: string;
  isLoading?: boolean;
  onChangeFirst: React.Dispatch<React.SetStateAction<string>>;
  onChangeSecond: React.Dispatch<React.SetStateAction<string>>;
  onSubmit(e: React.SubmitEvent<HTMLFormElement>): void;
}
