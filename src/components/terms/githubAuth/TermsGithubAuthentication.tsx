'use client';

import clsx from 'clsx';
import { motion } from 'framer-motion';

import GithubAuthIntro from './GithubAuthIntro';
import GithubAuthFlow from './GithubAuthFlow';
import TermsSectionHeader from '../TermsSectionHeader';
import GitHubAuthNotes from './GitHubAuthNotes';

import { containerVariants } from '@/animations/page';
import { TermsGithubAuthenticationProps } from '@/types/terms/githubAuth/terms.github.authentication.type';

import '../../../styles/components/terms/githubAuth/TermsGithubAuthentication.scss';

const TermsGithubAuthentication = ({
  badge,
  title,
  description,
  headerIcon,
  intro,
  flowTitle,
  flowDescription,
  flowSteps,
  notesTitle,
  notesDescription,
  notes,
  accentColor,
  className,
  style,
}: TermsGithubAuthenticationProps) => {
  return (
    <motion.section
      id='github-authentication'
      variants={containerVariants}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}
      className={clsx('terms-github-authentication', className)}
      style={
        {
          '--accent-color': accentColor,
          ...style,
        } as React.CSSProperties
      }
      aria-labelledby='terms-github-authentication-title'
    >
      <div className='terms-github-authentication__container'>
        <TermsSectionHeader
          id='terms-github-authentication-title'
          badge={badge}
          title={title}
          description={description}
          icon={headerIcon}
          variants={containerVariants}
        />

        <div className='terms-github-authentication__body'>
          <GithubAuthIntro intro={intro} />

          <GithubAuthFlow
            title={flowTitle}
            description={flowDescription}
            steps={flowSteps}
          />

          <GitHubAuthNotes
            title={notesTitle}
            description={notesDescription}
            notes={notes}
          />
        </div>
      </div>
    </motion.section>
  );
};

export default TermsGithubAuthentication;
