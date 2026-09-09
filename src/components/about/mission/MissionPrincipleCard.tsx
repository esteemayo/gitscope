'use client';

import clsx from 'clsx';
import { motion } from 'framer-motion';

import { MissionPrincipleCardProps } from '@/types/about/mission/mission.principle.card.type';
import '../../../styles/components/about/mission/MissionPrincipleCard.scss';

const MissionPrincipleCard = ({
  icon: Icon,
  title,
  description,
  accentColor,
  index,
  className,
  style,
}: MissionPrincipleCardProps) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.4,
        delay: index * 0.07,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={clsx('mission-principle-card', className)}
      style={
        {
          '--accent-color': accentColor,
          ...style,
        } as React.CSSProperties
      }
    >
      <div className='mission-principle-card__icon'>
        <Icon
          size={24}
          strokeWidth={1.8}
          role='img'
          aria-hidden='true'
          focusable='false'
        />
      </div>

      <div className='mission-principle-card__content'>
        <h3 className='mission-principle-card__content--title'>{title}</h3>

        <p className='mission-principle-card__content--description'>
          {description}
        </p>
      </div>
    </motion.article>
  );
};

export default MissionPrincipleCard;
