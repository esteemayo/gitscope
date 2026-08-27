'use client';

import clsx from 'clsx';
import { motion } from 'framer-motion';

import { UserContentBoundaryProps } from '@/types/terms/userContent/user.content.boundary.type';
import '../../../styles/components/terms/userContent/UserContentBoundary.scss';

const UserContentBoundary = ({
  title,
  description,
  icon: Icon,
  accentColor,
  index,
  className,
  style,
}: UserContentBoundaryProps) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.35,
        delay: index * 0.05,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={clsx('user-content-boundary', className)}
      style={
        {
          '--accent-color': accentColor,
          ...style,
        } as React.CSSProperties
      }
    >
      <div className='user-content-boundary__icon'>
        <Icon
          size={18}
          strokeWidth={1.8}
          role='img'
          aria-hidden='true'
          focusable='false'
        />
      </div>

      <div className='user-content-boundary__content'>
        <h4 className='user-content-boundary__content--title'>{title}</h4>

        <p className='user-content-boundary__content--description'>
          {description}
        </p>
      </div>
    </motion.article>
  );
};

export default UserContentBoundary;
