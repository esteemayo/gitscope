'use client';

import clsx from 'clsx';
import { motion } from 'framer-motion';

import { GithubDataAccessItemProps } from '@/types/terms/githubDataApi/github.data.access.item.type';
import '../../../styles/components/terms/githubDataApi/GithubDataAccessItem.scss';

const GithubDataAccessItem = ({
  title,
  description,
  icon: Icon,
  accentColor,
  index,
  className,
  style,
}: GithubDataAccessItemProps) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.45,
        delay: index * 0.05,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={clsx('github-data-access-item', className)}
      style={
        {
          '--accent-color': accentColor,
          ...style,
        } as React.CSSProperties
      }
    >
      <header className='github-data-access-item__header'>
        <span className='github-data-access-item__header--number'>
          {String(index + 1).padStart(2, '0')}
        </span>

        <div className='github-data-access-item__header--icon'>
          <Icon
            size={18}
            strokeWidth={1.8}
            role='img'
            aria-hidden='true'
            focusable='false'
          />
        </div>
      </header>

      <div className='github-data-access-item__content'>
        <h3 className='github-data-access-item__content--title'>{title}</h3>

        <p className='github-data-access-item__content--description'>
          {description}
        </p>
      </div>
    </motion.article>
  );
};

export default GithubDataAccessItem;
