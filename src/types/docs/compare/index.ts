export interface ComparisonCardType {
  id?: string;
  title: string;
  description: string;
  accentColor: string;
  items: string[];
}

export interface MetricRowType {
  id: string;
  label: string;
  firstValue: string;
  secondValue: string;
  difference: string;
  accentColor: string;
}

export interface RepositoryComparisonItem {
  id: string;
  title: string;
  text: string;
  accentColor: string;
}

export interface DevelopersTimelineItemType {
  id: string;
  title: string;
  description: string;
  accentColor: string;
}

export interface LanguageComparisonItem {
  id: string;
  label: string;
  language: string;
  remark: string;
  accentColor: string;
}

export interface CompareHighlightType {
  id: string;
  title: string;
  label: string;
  description: string;
  accentColor: string;
}

export interface CompareStepItem {
  title: string;
  description: string;
}
