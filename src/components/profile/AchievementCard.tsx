'use client';

import { motion } from 'framer-motion';
import { AchievementCardProps } from '@/types/profile/achievement.card.type';

import '../../styles/components/profile/AchievementCard.scss';

const AchievementCard = ({ achievement }: AchievementCardProps) => {
  const { id, icon: Icon, title, description } = achievement ?? {};

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className='achievement-card'
      aria-labelledby={id}
    >
      <div className='achievement-card__icon' aria-hidden='true'>
        <Icon />
      </div>

      <div className='achievement-card__content'>
        <h3 className='achievement-card__content--title'>{title}</h3>

        <p className='achievement-card__content--description'>{description}</p>
      </div>
    </motion.article>
  );
};

export default AchievementCard;
