'use client';

import GitHubAuthNote from './GitHubAuthNote';
import { GitHubAuthNotesProps } from '@/types/terms/githubAuth/github.auth.notes.type';

import '../../../styles/components/terms/githubAuth/GitHubAuthNotes.scss';

const GitHubAuthNotes = ({
  title,
  description,
  notes,
}: GitHubAuthNotesProps) => {
  return (
    <div className='github-auth-notes'>
      <header className='github-auth-notes__header'>
        <span className='github-auth-notes__header--label'>
          Access & security
        </span>

        <h3 className='github-auth-notes__header--title'>{title}</h3>

        <p className='github-auth-notes__header--description'>{description}</p>
      </header>

      <div className='github-auth-notes__grid'>
        {notes.map((note, index) => (
          <GitHubAuthNote key={note.id} {...note} index={index} />
        ))}
      </div>
    </div>
  );
};

export default GitHubAuthNotes;
