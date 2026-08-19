'use client';

import clsx from 'clsx';
import { motion } from 'framer-motion';

import GitHubAuthNotes from './GitHubAuthNotes';
import GithubAuthFlow from './GithubAuthFlow';
import TermsSectionHeader from '../TermsSectionHeader';

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

        <div className='terms-github-auth__body'>
          <motion.div
            className='terms-github-auth__intro'
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            <span>Authentication</span>

            <p>{intro}</p>
          </motion.div>

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
