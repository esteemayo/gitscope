import * as data from './analyticsAccuracy.data';
import { analyticsAccuracyContent } from './analyticsAccuracyContent.data';

import { TermsAnalyticsAccuracyProps } from '@/types/terms/analyticsAccuracy/terms.analytics.accuracy.type';

export const analyticsAccuracyData: TermsAnalyticsAccuracyProps = {
  ...analyticsAccuracyContent,
  methodology: data.termsAnalyticsAccuracyMethodology,
  flow: data.termsAnalyticsAccuracyFlow,
  limitations: data.termsAnalyticsAccuracyLimitations,
  notice: data.termsAnalyticsAccuracyNotice,
};
