import AchievementCard from './AchievementCard';
import { AchievementType } from '@/types/profile';

import '../../styles/components/profile/Achievements.scss';

interface AchievementsProps {
  achievements: AchievementType[];
}

const Achievements = ({ achievements }: AchievementsProps) => {
  if (achievements.length === 0) {
    return null;
  }

  return (
    <section className='achievements' aria-labelledby='achievements-title'>
      <div className='achievements__container'>
        <div className='achievements__header'>
          <h2 id='achievements-title' className='achievements__header--title'>
            Achievements
          </h2>

          <p className='achievements__header--description'>
            Milestones earned from your GitHub activity
          </p>
        </div>

        <div className='achievements__grid'>
          {achievements.map((achievement) => (
            <AchievementCard key={achievement.id} achievement={achievement} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
