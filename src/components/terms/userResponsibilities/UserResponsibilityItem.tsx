'use client';

import clsx from 'clsx';
import { motion } from 'framer-motion';

import { UserResponsibilityItemProps } from '@/types/terms/userResponsibilities/user.responsibility.item.type';
import '../../../styles/components/terms/userResponsibilities/UserResponsibilityItem.scss';

const UserResponsibilityItem = ({
  title,
  description,
  icon: Icon,
  accentColor,
  index,
  className,
  style,
}: UserResponsibilityItemProps) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.4,
        delay: index * 0.05,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={clsx('user-responsibility-item', className)}
      style={
        {
          '--accent-color': accentColor,
          ...style,
        } as React.CSSProperties
      }
    >
      <div className='user-responsibility-item__top'>
        <span className='user-responsibility-item__number'>
          {String(index + 1).padStart(2, '0')}
        </span>

        <div className='user-responsibility-item__icon'>
          <Icon
            size={18}
            strokeWidth={1.8}
            role='img'
            aria-hidden='true'
            focusable='false'
          />
        </div>
      </div>

      <div className='user-responsibility-item__content'>
        <h3 className='user-responsibility-item__content--title'>{title}</h3>

        <p className='user-responsibility-item__content--description'>
          {description}
        </p>
      </div>
    </motion.article>
  );
};

export default UserResponsibilityItem;
