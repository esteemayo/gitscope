export type SummaryObservationType =
  | 'positive'
  | 'technology'
  | 'attention'
  | 'neutral';

export interface SummaryObservation {
  id: string;
  title: string;
  description: string;
  type: SummaryObservationType;
}

export interface DeveloperSummaryData {
  overview: string;
  observations: SummaryObservation[];
  dataCoverage: string;
}
