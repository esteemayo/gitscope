export interface DocsCalloutType {
  type?: 'note' | 'tip' | 'warning' | 'danger';
  title?: string;
  accentColor?: string;
  children: React.ReactNode;
}
