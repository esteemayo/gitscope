'use client';

import clsx from 'clsx';
import { motion } from 'framer-motion';

import GithubDataAccessItem from './GithubDataAccessItem';

import { GithubDataAccessGroupProps } from '@/types/terms/githubDataApi/github.data.access.group.type';
import '../../../styles/components/terms/githubDataApi/GithubDataAccessGroup.scss';

const GithubDataAccessGroup = ({
  id,
  eyebrow,
  title,
  description,
  icon: Icon,
  accentColor,
  items,
  groupIndex,
  className,
  style,
}: GithubDataAccessGroupProps) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.45,
        delay: groupIndex * 0.06,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={clsx('github-data-access-group', className)}
      style={
        {
          '--accent-color': accentColor,
          ...style,
        } as React.CSSProperties
      }
      aria-labelledby={`github-data-group-${id}`}
    >
      <header className='github-data-access-group__header'>
        <div className='github-data-access-group__heading'>
          <div className='github-data-access-group__icon'>
            <Icon
              size={18}
              strokeWidth={1.8}
              role='img'
              aria-hidden='true'
              focusable='false'
            />
          </div>

          <div className='github-data-access-group__wrapper'>
            <span className='github-data-access-group__eyebrow'>{eyebrow}</span>

            <h3
              id={`github-data-group-${id}`}
              className='github-data-access-group__title'
            >
              {title}
            </h3>
          </div>
        </div>

        <p className='github-data-access-group__description'>{description}</p>
      </header>

      <div className='github-data-access-group__items'>
        {items.map((item, index) => (
          <GithubDataAccessItem key={item.id} {...item} index={index} />
        ))}
      </div>
    </motion.section>
  );
};

export default GithubDataAccessGroup;
