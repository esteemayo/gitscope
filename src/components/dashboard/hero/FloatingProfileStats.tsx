import FloatingProfileStat from './FloatingProfileStat';
import { FloatingProfileStatsProps } from '@/types/dashboard/hero/floating.profile.stats.type';

import { formatNumber } from '@/utils/formatNumber';
import { ProfileStat } from '@/types/dashboard';
import { getAccountAge } from '@/utils/dashboard/getAccountAge';

import '../../../styles/components/dashboard/hero/FloatingProfileStats.scss';

const FloatingProfileStats = ({ profile }: FloatingProfileStatsProps) => {
  const accountAge = getAccountAge(profile.created_at);

  const stats: ProfileStat[] = [
    {
      id: 'repositories',
      label: 'Repositories',
      value: formatNumber(profile.public_repos),
      description: 'Public projects',
      icon: 'repository',
      accentColor: '#3B82F6',
    },
    {
      id: 'followers',
      label: 'Followers',
      value: formatNumber(profile.followers),
      description: 'Developer audience',
      icon: 'users',
      accentColor: '#F59E0B',
    },
    {
      id: 'following',
      label: 'Following',
      value: formatNumber(profile.following),
      description: 'Developers followed',
      icon: 'user-round-plus',
      accentColor: '#10B981',
    },
    {
      id: 'account-age',
      label: 'On GitHub',
      value: `${accountAge} ${accountAge === 1 ? 'year' : 'years'}`,
      description: 'Account age',
      icon: 'calendar',
      accentColor: '#8B5CF6',
    },
  ];

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
