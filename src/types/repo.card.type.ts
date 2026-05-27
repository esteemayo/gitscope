import { ViewType } from './index';

export interface RepoCardProps {
  view: ViewType;
  title: string;
  desc?: string;
  language: string;
  stars: number;
  fork: number;
  status: string;
  size: string;
}
