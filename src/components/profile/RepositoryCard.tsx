'use client';

import millify from 'millify';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import {
  ArrowUpRightIcon,
  ClockIcon,
  GitForkIcon,
  StarIcon,
} from 'lucide-react';

import { getLanguageColor } from '@/utils/getLanguageColor';
import { RepositoryCardProps } from '@/types/profile/repository.card.type';

import '../../styles/components/profile/RepositoryCard.scss';

type CustomCSSProperties = React.CSSProperties & {
  '--accent-color': string;
};

const RepositoryCard = ({
  id,
  name,
  description,
  language,
  stargazers_count,
  forks_count,
  updated_at,
  html_url,
  className,
  style,
}: RepositoryCardProps) => {
  const languageColor = getLanguageColor(language);

  const updated = new Date(updated_at).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });

  const items = [
    {
      id: 1,
      icon: StarIcon,
      value: millify(stargazers_count),
    },
    {
      id: 2,
      icon: GitForkIcon,
      value: millify(forks_count),
    },
    {
      id: 3,
      icon: ClockIcon,
      value: updated,
    },
  ];

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={clsx('repository-card', className)}
      style={
        {
          '--accent-color': languageColor,
          ...style,
        } as CustomCSSProperties
      }
      aria-labelledby={`repo-${id}`}
    >
      <div className='repository-card__container'>
        <header className='repository-card__header'>
          <h3 id={`repo-${id}`} className='repository-card__header--title'>
            {name}
          </h3>

          <a
            href={html_url}
            target='_blank'
            rel='noopener noreferrer'
            className='repository-card__header--link'
            aria-label={`Open ${name} repository`}
          >
            <ArrowUpRightIcon
              size={20}
              strokeWidth={1.8}
              role='img'
              aria-hidden='true'
              focusable='false'
            />
          </a>
        </header>

        <div className='repository-card__content'>
          <p className='repository-card__description'>
            {description ?? 'No description provided'}
          </p>

          <div className='repository-card__language'>
            <span
              className='repository-card__language--dot'
              aria-hidden='true'
            />

            <span className='repository-card__language--value'>
              {language ?? 'Unknown'}
            </span>
          </div>
        </div>

        <footer className='repository-card__footer'>
          {items.map((item) => {
            const { id, icon: Icon, value } = item;

            return (
              <div key={id} className='repository-card__group'>
                <Icon
                  size={16}
                  strokeWidth={1.8}
                  role='img'
                  aria-hidden='true'
                  focusable='false'
                />

                <span className='repository-card__group--value'>{value}</span>
              </div>
            );
          })}
        </footer>
      </div>
    </motion.article>
  );
};

export default RepositoryCard;
