export interface SavedProfilesChartTooltipProps {
  active?: boolean;
  payload?: Array<{
    payload: {
      name: string;
      login: string;
      value: number;
      accentColor: string;
    };
  }>;
  metricLabel?: string;
  formatNumber(value: number): string;
}
