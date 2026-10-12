export interface SavedInsightProfile {
  id: number;
  login: string;
  name?: string | null;
  repositories?: number;
  followers?: number;
  totalStars?: number;
  stars?: number;
}
