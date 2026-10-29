'use client';

import clsx from 'clsx';
import { motion } from 'framer-motion';

import { fadeUpVariants } from '@/animations/fade';
import { AchievementCardProps } from '@/types/profile/achievement.card.type';

import '../../styles/components/profile/AchievementCard.scss';

type CustomCSSProperties = React.CSSProperties & {
  '--accent-color': string;
};

const AchievementCard = ({
  id,
  icon: Icon,
  title,
  description,
  accentColor,
  className,
  style,
}: AchievementCardProps) => {
  return (
    <motion.article
      variants={fadeUpVariants}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={clsx('achievement-card', className)}
      style={
        {
          '--accent-color': accentColor,
          ...style,
        } as CustomCSSProperties
      }
      aria-labelledby={id}
    >
      <div className='achievement-card__icon' aria-hidden='true'>
        <Icon
          size={24}
          strokeWidth={1.8}
          role='img'
          aria-hidden='true'
          focusable='false'
        />
      </div>

      <div className='achievement-card__content'>
        <h3 className='achievement-card__content--title'>{title}</h3>

        <p className='achievement-card__content--description'>{description}</p>
      </div>
    </motion.article>
  );
};

export default AchievementCard;
