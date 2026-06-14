import { CommitType } from '@/types/repo';

export const getCommitType = (message: CommitType) => {
  const lower = message.toLowerCase();

  if (lower.startsWith('feat:')) {
    return 'feat';
  }

  if (lower.startsWith('fix:')) {
    return 'fix';
  }

  if (lower.startsWith('docs:')) {
    return 'docs';
  }

  if (lower.startsWith('refactor:')) {
    return 'refactor';
  }

  if (lower.startsWith('style:')) {
    return 'style';
  }

  if (lower.startsWith('chore:')) {
    return 'chore';
  }

  return 'other';
};
