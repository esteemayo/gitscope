'use client';

import clsx from 'clsx';
import { motion } from 'framer-motion';

import { GitHubAuthNoteProps } from '@/types/terms/githubAuth/github.auth.note.type';
import '../../../styles/components/terms/githubAuth/GitHubAuthNote.scss';

const GitHubAuthNote = ({
  title,
  description,
  icon: Icon,
  accentColor,
  index,
  className,
  style,
}: GitHubAuthNoteProps) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.45,
        delay: index * 0.06,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={clsx('github-auth-note', className)}
      style={
        {
          '--accent-color': accentColor,
          ...style,
        } as React.CSSProperties
      }
    >
      <div className='github-auth-note__icon'>
        <Icon
          size={18}
          strokeWidth={1.8}
          role='img'
          aria-hidden='true'
          focusable='false'
        />
      </div>

      <div className='github-auth-note__content'>
        <h4 className='github-auth-note__content--title'>{title}</h4>

        <p className='github-auth-note__content--description'>{description}</p>
      </div>
    </motion.article>
  );
};

export default GitHubAuthNote;
