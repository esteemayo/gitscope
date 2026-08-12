import * as data from './policyUpdates.data';
import { policyUpdatesContent } from './policyUpdatesContent.data';

import { PolicyUpdatesTimelineProps } from '@/types/privacy/policyUpdatesTimeline/policy.updates.timeline.type';

export const policyUpdatesTimelineData: PolicyUpdatesTimelineProps = {
  ...policyUpdatesContent,
  updates: data.policyUpdates,
  notice: data.policyUpdatesNotice,
};
