'use client';

import { motion } from 'framer-motion';
import clsx from 'clsx';
import { ArrowRight } from 'lucide-react';

import { TerminationPathItemProps } from '@/types/terms/termination/termination.path.item';
import '../../../styles/components/terms/termination/TerminationPathItem.scss';

const TerminationPathItem = ({
  label,
  title,
  description,
  action,
  icon: Icon,
  accentColor,
  index,
  className,
  style,
}: TerminationPathItemProps) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.35,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={clsx('termination-path-item', className)}
      style={
        {
          '--accent-color': accentColor,
          ...style,
        } as React.CSSProperties
      }
    >
      <div className='termination-path-item__top'>
        <span className='termination-path-item__top--label'>{label}</span>

        <div className='termination-path-item__icon'>
          <Icon
            size={20}
            strokeWidth={1.8}
            role='img'
            aria-hidden='true'
            focusable='false'
          />
        </div>
      </div>

      <div className='termination-path-item__content'>
        <h4 className='termination-path-item__content--title'>{title}</h4>

        <p className='termination-path-item__content--description'>
          {description}
        </p>
      </div>

      <div className='termination-path-item__outcome'>
        <span className='termination-path-item__outcome--action'>{action}</span>

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

export default TerminationPathItem;
