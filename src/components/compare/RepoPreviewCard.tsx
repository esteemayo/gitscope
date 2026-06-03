'use client';

import millify from 'millify';
import { motion } from 'framer-motion';

import ForkIcon from '../icons/ForkIcon';
import StarIcon from '../icons/StarIcon';

import { formatRepoSize } from '@/utils/formatRepoSize';
import { RepoPreviewCardProps } from '@/types/compare/repo.preview.card.type';

import '../../styles/components/RepoPreviewCard.scss';

const RepoPreviewCard = ({
  name,
  description,
  language,
  size,
  forks_count,
  stargazers_count,
}: RepoPreviewCardProps) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className='repo-preview-card'
    >
      <h4 className='repo-preview-card__name'>{name}</h4>

      {description && (
        <p className='repo-preview-card__description'>{description}</p>
      )}

      <footer className='repo-preview-card__footer'>
        <div className='repo-preview-card__group'>
          <span className='repo-preview-card__group--language'>
            <div />
            {language}
          </span>

          <span className='repo-preview-card__group--stars'>
            <StarIcon />
            {millify(stargazers_count)}
          </span>

          <span className='repo-preview-card__group--forks'>
            <ForkIcon />
            {millify(forks_count)}
          </span>
        </div>

        <div className='repo-preview-card__wrapper'>
          <span className='repo-preview-card__wrapper--value'>
            {formatRepoSize(size)}
          </span>
        </div>
      </footer>
    </motion.article>
  );
};

export default RepoPreviewCard;
