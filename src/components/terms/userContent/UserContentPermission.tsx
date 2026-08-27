'use client';

import clsx from 'clsx';
import { motion } from 'framer-motion';

import { UserContentPermissionProps } from '@/types/terms/userContent/user.content.permission.type';
import '../../../styles/components/terms/userContent/UserContentPermission.scss';

const UserContentPermission = ({
  title,
  description,
  icon: Icon,
  accentColor,
  index,
  className,
  style,
}: UserContentPermissionProps) => {
  return (
    <motion.article
      initial={{ opacity: 0, x: 12 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.35,
        delay: index * 0.05,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={clsx('user-content-permission', className)}
      style={
        {
          '--accent-color': accentColor,
          ...style,
        } as React.CSSProperties
      }
    >
      <div className='user-content-permission__icon'>
        <Icon
          size={18}
          strokeWidth={1.8}
          role='img'
          aria-hidden='true'
          focusable='false'
        />
      </div>

      <div className='user-content-permission__content'>
        <h4 className='user-content-permission__content--title'>{title}</h4>

        <p className='user-content-permission__content--description'>
          {description}
        </p>
      </div>
    </motion.article>
  );
};

export default UserContentPermission;
