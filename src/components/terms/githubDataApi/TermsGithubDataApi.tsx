'use client';

import clsx from 'clsx';
import { motion } from 'framer-motion';

import GithubDataApiNotice from './GithubDataApiNotice';
import GithubDataIntro from './GithubDataIntro';
import GithubDataAccessGroup from './GithubDataAccessGroup';
import TermsSectionHeader from '../TermsSectionHeader';

import { containerVariants } from '@/animations/page';
import { TermsGithubDataApiProps } from '@/types/terms/githubDataApi/terms.github.data.api.type';

import '../../../styles/components/terms/githubDataApi/TermsGithubDataApi.scss';

const TermsGithubDataApi = ({
  badge,
  title,
  description,
  headerIcon,
  intro,
  groups,
  notice,
  accentColor,
  className,
  style,
}: TermsGithubDataApiProps) => {
  return (
    <motion.section
      id='github-data'
      variants={containerVariants}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}
      className={clsx('terms-github-data-api', className)}
      style={
        {
          '--accent-color': accentColor,
          ...style,
        } as React.CSSProperties
      }
      aria-labelledby='terms-github-data-api-title'
    >
      <div className='terms-github-data-api__container'>
        <TermsSectionHeader
          id='terms-github-data-api-title'
          badge={badge}
          title={title}
          description={description}
          icon={headerIcon}
          variants={containerVariants}
        />

        <div className='terms-github-data-api__body'>
          <GithubDataIntro intro={intro} />

          <div className='terms-github-data-api__groups'>
            {groups.map((group, index) => (
              <GithubDataAccessGroup
                key={group.id}
                {...group}
                groupIndex={index}
              />
            ))}
          </div>

          <GithubDataApiNotice {...notice} />
        </div>
      </div>
    </motion.section>
  );
};

export default TermsGithubDataApi;
