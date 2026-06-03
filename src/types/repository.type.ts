export interface Repository {
  id: number;
  name: string;
  htmlUrl: string;
  description: string | null;
  stargazers_count: number;
  forks_count: number;
  size: number;
  language: string;
  visibility: 'public' | 'private';
  updatedAt: string;
}
