import * as dataRetention from './dataRetention.data';
import { dataRentionContent } from './dataRentionContent.data';

import { DataRetentionProps } from '@/types/privacy/dataRetention/data.retention.type';

export const dataRetentionData: DataRetentionProps = {
  ...dataRentionContent,
  stats: dataRetention.retentionStats,
  categories: dataRetention.retentionCategories,
  notice: dataRetention.retentionNotice,
};
