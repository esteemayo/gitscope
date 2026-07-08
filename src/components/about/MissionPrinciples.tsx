import MissionPrincipleCard from './MissionPrincipleCard';
import { MissionPrinciplesProps } from '@/types/about/mission.principles.type';

import '../../styles/components/about/MissionPrinciples.scss';

const MissionPrinciples = ({
  principles,
  itemVariants,
}: MissionPrinciplesProps) => {
  return (
    <div className='mission-principle'>
      {principles.map((principle) => (
        <MissionPrincipleCard
          key={principle.id}
          principle={principle}
          itemVariants={itemVariants}
        />
      ))}
    </div>
  );
};

export default MissionPrinciples;
