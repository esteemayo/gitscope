'use client';

import clsx from 'clsx';
import { motion } from 'framer-motion';

import { TeamFocusItemProps } from '@/types/terms/aboutTeam/team.focus.item.type';
import '../../../styles/components/terms/aboutTeam/TeamFocusItem.scss';

const TeamFocusItem = ({
  title,
  description,
  icon: Icon,
  accentColor,
  index,
  className,
  style,
}: TeamFocusItemProps) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.35,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={clsx('team-focus-item', className)}
      style={
        {
          '--accent-color': accentColor,
          ...style,
        } as React.CSSProperties
      }
    >
      <div className='team-focus-item__top'>
        <span className='team-focus-item__top--number'>
          {String(index + 1).padStart(2, '0')}
        </span>

        <div className='team-focus-item__top--icon'>
          <Icon
            size={20}
            strokeWidth={1.8}
            role='img'
            aria-hidden='true'
            focusable='false'
          />
        </div>
      </div>

      <div className='team-focus-item__content'>
        <h4 className='team-focus-item__content--title'>{title}</h4>

        <p className='team-focus-item__content--description'>{description}</p>
      </div>
    </motion.article>
  );
};

export default TeamFocusItem;
