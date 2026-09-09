import MissionPrincipleCard from './MissionPrincipleCard';
import { MissionPrinciplesProps } from '@/types/about/mission/mission.principles.type';

import '../../../styles/components/about/mission/MissionPrinciples.scss';

const MissionPrinciples = ({ principles }: MissionPrinciplesProps) => {
  return (
    <div className='mission-principle'>
      {principles.map((principle, index) => (
        <MissionPrincipleCard key={principle.id} {...principle} index={index} />
      ))}
    </div>
  );
};

export default MissionPrinciples;
