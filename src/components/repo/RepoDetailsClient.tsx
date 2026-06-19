'use client';

import { useRouter } from 'next/navigation';

import AuthModal from '../auth/AuthModal';
import RepoDetails from './RepoDetails';
import Protected from '../auth/Protected';

const RepoDetailsClient = ({ repo }: { repo: string }) => {
  const router = useRouter();

  return (
    <Protected
      fallback={
        <AuthModal
          title='Unlock Repository Analytics'
          description='Sign in with GitHub to analyze commits, contributors and activity trends.'
          features={[
            'Commit activity',
            'Contributor insights',
            'Language trends',
          ]}
          onBack={() => router.back()}
        />
      }
    >
      <RepoDetails repositoryName={repo} />;
    </Protected>
  );
};

export default RepoDetailsClient;
