import { GithubAuthNoteData } from './index';

export interface GitHubAuthNotesProps {
  title: string;
  description: string;
  notes: GithubAuthNoteData[];
}
