'use client';

import clsx from 'clsx';
import { motion } from 'framer-motion';

import { GithubDataApiNoticeProps } from '@/types/terms/githubDataApi/github.data.api.notice.type';
import '../../../styles/components/terms/githubDataApi/GithubDataApiNotice.scss';

const GithubDataApiNotice = ({
  title,
  description,
  icon: Icon,
  accentColor,
  className,
  style,
}: GithubDataApiNoticeProps) => {
  return (
    <motion.aside
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className={clsx('github-data-api-notice', className)}
      style={
        {
          '--accent-color': accentColor,
          ...style,
        } as React.CSSProperties
      }
    >
      <div className='github-data-api-notice__icon'>
        <Icon
          size={20}
          strokeWidth={1.8}
          role='img'
          aria-hidden='true'
          focusable='false'
        />
      </div>

      <div className='github-data-api-notice__content'>
        <span className='github-data-api-notice__content--label'>
          Third-party service
        </span>

        <h3 className='github-data-api-notice__content--title'>{title}</h3>

        <p className='github-data-api-notice__content--description'>
          {description}
        </p>
      </div>
    </motion.aside>
  );
};

export default GithubDataApiNotice;
