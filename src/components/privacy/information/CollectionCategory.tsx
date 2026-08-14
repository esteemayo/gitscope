'use client';

import { motion, Variants } from 'framer-motion';
import clsx from 'clsx';
import { CheckCircle2 } from 'lucide-react';

import { CollectionCategoryProps } from '@/types/privacy/information/collection.category.type';
import '../../../styles/components/privacy/information/CollectionCategory.scss';

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 32,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: 'easeOut',
    },
  },
};

const CollectionCategory = ({
  title,
  description,
  icon: Icon,
  accentColor,
  items,
  optional = false,
  className,
  style,
}: CollectionCategoryProps) => {
  return (
    <motion.article
      variants={itemVariants}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.25 }}
      className={clsx('collection-category', { className })}
      style={
        {
          '--accent-color': accentColor,
          ...style,
        } as React.CSSProperties
      }
    >
      <div className='collection-category__rail' />

      <header className='collection-category__header'>
        <div className='collection-category__icon'>
          <Icon size={34} role='img' aria-hidden='true' focusable='false' />
        </div>

        <div className='collection-category__heading'>
          <h3 className='collection-category__heading--title'>{title}</h3>

          {optional && (
            <span className='collection-category__heading--badge'>
              Optional
            </span>
          )}
        </div>
      </header>

      <p className='collection-category__description'>{description}</p>

      <ul className='collection-category__list'>
        {items.map((item) => (
          <li key={item} className='collection-category__item'>
            <CheckCircle2
              size={16}
              className='collection-category__item--icon'
              role='img'
              aria-hidden='true'
              focusable='false'
            />

            <span className='collection-category__item--label'>{item}</span>
          </li>
        ))}
      </ul>
    </motion.article>
  );
};

export default CollectionCategory;
