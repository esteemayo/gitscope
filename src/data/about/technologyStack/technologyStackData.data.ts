import { technologyStack } from './technologyStack.data';
import { technologyStackContent } from './technologyStackContent.data';

import { TechnologyStackProps } from '@/types/about/technologyStack/technology.stack.type';

export const technologyStackData: TechnologyStackProps = {
  ...technologyStackContent,
  stacks: technologyStack,
};
