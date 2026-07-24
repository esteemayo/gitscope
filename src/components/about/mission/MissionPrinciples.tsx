import MissionPrincipleCard from './MissionPrincipleCard';
import { MissionPrinciplesProps } from '@/types/about/mission/mission.principles.type';

import '../../../styles/components/about/mission/MissionPrinciples.scss';

const MissionPrinciples = ({
  principles,
  variants,
}: MissionPrinciplesProps) => {
  return (
    <div className='mission-principle'>
      {principles.map((principle) => (
        <MissionPrincipleCard
          key={principle.id}
          principle={principle}
          itemVariants={variants}
        />
      ))}
    </div>
  );
};

export default MissionPrinciples;
