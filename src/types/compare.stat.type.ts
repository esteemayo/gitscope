export interface CompareStatProps {
  label: string;
  valueA: number;
  valueB: number;
  leftUser: {
    name?: string;
    login: string;
    avatar_url?: string;
  };
  rightUser: {
    name?: string;
    login: string;
    avatar_url?: string;
  };
}
