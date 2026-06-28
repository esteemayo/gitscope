import ProfileHeading from './ProfileHeading';
import AchievementCard from './AchievementCard';

import { AchievementsProps } from '@/types/profile/achievements.type';
import '../../styles/components/profile/Achievements.scss';

const Achievements = ({ achievements }: AchievementsProps) => {
  if (achievements.length === 0) {
    return null;
  }

  return (
    <div className='achievements' aria-labelledby='achievements-title'>
      <div className='achievements__container'>
        <ProfileHeading
          id='achievements-title'
          title='Achievements'
          description='Milestones earned from your GitHub activity'
        />

        <div className='achievements__grid'>
          {achievements.map((achievement) => (
            <AchievementCard key={achievement.id} achievement={achievement} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Achievements;
