import FloatingProfileStat from './FloatingProfileStat';
import { ProfileStat } from '@/types/repository.type';

import '../../../styles/components/dashboard/hero/FloatingProfileStats.scss';

interface FloatingProfileStatsProps {
  stats: ProfileStat[];
}

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
