'use client';

import { motion } from 'framer-motion';
import { MissionPrincipleCardProps } from '@/types/about/mission/mission.principle.card.type';

import '../../../styles/components/about/mission/MissionPrincipleCard.scss';

const MissionPrincipleCard = ({
  principle: { icon: Icon, title, description, accentColor },
  itemVariants,
}: MissionPrincipleCardProps) => {
  return (
    <motion.article
      variants={itemVariants}
      whileHover={{ y: -6 }}
      transition={{
        duration: 0.25,
        ease: [0.645, 0.045, 0.355, 1] as const,
      }}
      className='mission-principle-card'
      style={
        {
          '--accent-color': accentColor,
        } as React.CSSProperties
      }
    >
      <div className='mission-principle-card__icon'>
        <Icon size={24} />
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
