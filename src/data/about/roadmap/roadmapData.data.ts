import { roadmapPhases } from './roadmap.data';
import { roadmapContent } from './roadmapContent.data';

import { RoadmapProps } from '@/types/about/roadmap/roadmap.type';

export const roadmapData: RoadmapProps = {
  ...roadmapContent,
  phases: roadmapPhases,
};
