'use client';

import { motion } from 'framer-motion';
import clsx from 'clsx';
import { ArrowRight } from 'lucide-react';

import { UserOptionProps } from '@/types/terms/changesToTerms/user.option.type';
import '../../../styles/components/terms/changesToTerms/UserOption.scss';

const UserOption = ({
  title,
  description,
  action,
  icon: Icon,
  accentColor,
  index,
  className,
  style,
}: UserOptionProps) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.35,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={clsx('user-option', className)}
      style={
        {
          '--accent-color': accentColor,
          ...style,
        } as React.CSSProperties
      }
    >
      <div className='user-option__icon'>
        <Icon
          size={20}
          strokeWidth={1.8}
          role='img'
          aria-hidden='true'
          focusable='false'
        />
      </div>

      <div className='user-option__body'>
        <h4 className='user-option__body--title'>{title}</h4>

        <p className='user-option__body--description'>{description}</p>
      </div>

      <div className='user-option__action'>
        <span>{action}</span>

        <ArrowRight
          size={16}
          strokeWidth={1.8}
          role='img'
          aria-hidden='true'
          focusable='false'
        />
      </div>
    </motion.article>
  );
};

export default UserOption;
