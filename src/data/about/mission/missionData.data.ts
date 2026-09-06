import * as data from './mission.data';
import { missionContent } from './missionContent.data';

import { AboutMissionProps } from '@/types/about/mission/about.mission.type';

export const missionData: AboutMissionProps = {
  ...missionContent,
  principles: data.missionPrinciples,
  timeline: data.missionTimeline,
  metrics: data.missionMetrics,
  healthProgress: data.healthProgress,
};
