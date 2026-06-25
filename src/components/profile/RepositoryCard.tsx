'use client';

import { motion } from 'framer-motion';
import millify from 'millify';
import {
  ArrowUpRightIcon,
  ClockIcon,
  GitForkIcon,
  StarIcon,
} from 'lucide-react';

import { getLanguageColor } from '@/utils/getLanguageColor';
import { RepositoryCardProps } from '@/types/profile/repository.card.type';

import '../../styles/components/profile/RepositoryCard.scss';

const RepositoryCard = ({ repository }: RepositoryCardProps) => {
  const updated = new Date(repository.updated_at).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });

  const items = [
    {
      id: 1,
      icon: StarIcon,
      value: millify(repository.stargazers_count),
    },
    {
      id: 2,
      icon: GitForkIcon,
      value: millify(repository.forks_count),
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
      whileHover={{ y: -4 }}
      className='repository-card'
      aria-labelledby={`repo-${repository.id}`}
    >
      <div className='repository-card__container'>
        <header className='repository-card__header'>
          <h3
            id={`repo-${repository.id}`}
            className='repository-card__header--title'
          >
            {repository.name}
          </h3>

          <a
            href={repository.html_url}
            target='_blank'
            rel='noopener noreferrer'
            className='repository-card__header--link'
            aria-label={`Open ${repository.name} repository`}
          >
            <ArrowUpRightIcon size={20} />
          </a>
        </header>

        <div className='repository-card__content'>
          <p className='repository-card__description'>
            {repository.description ?? 'No description provided'}
          </p>

          <div className='repository-card__language'>
            <span
              style={{ backgroundColor: getLanguageColor(repository.language) }}
              className='repository-card__language--dot'
            />

            <span className='repository-card__language--value'>
              {repository.language ?? 'Unknown'}
            </span>
          </div>
        </div>

        <footer className='repository-card__footer'>
          {items.map((item) => {
            const { id, icon: Icon, value } = item;

            return (
              <div key={id} className='repository-card__group'>
                <Icon size={16} />

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
