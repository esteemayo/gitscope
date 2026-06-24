'use client';

import { motion } from 'framer-motion';
import { AchievementType } from '@/types/profile';

import '../../styles/components/profile/AchievementCard.scss';

interface AchievementCardProps {
  achievement: AchievementType;
}

const AchievementCard = ({ achievement }: AchievementCardProps) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className='achievement-card'
      aria-labelledby={achievement.id}
    >
      <div className='achievement-card__icon' aria-hidden='true'>
        icon
      </div>

      <div className='achievement-card__content'>
        <h3 className='achievement-card__content--title'>
          {achievement.title}
        </h3>

        <p className='achievement-card__content--description'>
          {achievement.description}
        </p>
      </div>
    </motion.article>
  );
};

export default AchievementCard;
