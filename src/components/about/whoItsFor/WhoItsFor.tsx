import AudienceCard from './AudienceCard';
import SectionHeader from '../AboutSectionHeader';

import { WhoItsForProps } from '@/types/about/whoItsFor/who.its.for.type';
import '../../../styles/components/about/whoItsFor/WhoItsFor.scss';

const WhoItsFor = ({
  badge,
  title,
  description,
  audiences,
}: WhoItsForProps) => {
  return (
    <section className='who-its-for' aria-describedby='who-its-for-title'>
      <div className='who-its-for__container'>
        <SectionHeader
          id='who-its-for-title'
          badge={badge}
          title={title}
          description={description}
        />

        <div className='who-its-for__grid'>
          {audiences.map((audience) => (
            <AudienceCard key={audience.id} audience={audience} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoItsFor;
