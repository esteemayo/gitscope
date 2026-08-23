import { BarChart3 } from 'lucide-react';
import { AnalyticsAccuracyContent } from '@/types/terms/analyticsAccuracy';

export const analyticsAccuracyContent: AnalyticsAccuracyContent = {
  badge: '07 - Analytics',
  title: 'Analytics Accuracy.',
  description:
    'GitScope is designed to provide useful and transparent GitHub analytics, but displayed metrics depend on the data available through GitHub and the methods used to process it.',
  headerIcon: BarChart3,
  intro:
    'Analytics presented by GitScope are generated from GitHub data and application-level calculations. While we aim to produce reliable results, metrics should be treated as informational insights rather than guaranteed measurements of development performance, productivity, repository quality.',
  accentColor: '#3776AB',
};
