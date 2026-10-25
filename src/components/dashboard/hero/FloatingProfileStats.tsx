import FloatingProfileStat from './FloatingProfileStat';
import { FloatingProfileStatsProps } from '@/types/dashboard/floating.profile.stats.type';

import '../../../styles/components/dashboard/hero/FloatingProfileStats.scss';

const FloatingProfileStats = ({ stats }: FloatingProfileStatsProps) => {
  return (
    <div className='floating-profile-stats'>
      <div className='floating-profile-stats__grid'>
        {stats.map((stat) => (
          <FloatingProfileStat key={stat.id} {...stat} />
        ))}
      </div>
    </div>
  );
};

export default FloatingProfileStats;
