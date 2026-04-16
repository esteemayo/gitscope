import { ProfileStatsCardProps } from '@/types/profile.stats.card.type';
import '../../styles/components/ProfileStatsCard.scss';

const ProfileStatsCard = ({ value, label }: ProfileStatsCardProps) => {
  return (
    <article className='profile-stats-card'>
      <span className='profile-stats-card__num'>{value}</span>
      <span className='profile-stats-card__label'>{label}</span>
    </article>
  );
};

export default ProfileStatsCard;
