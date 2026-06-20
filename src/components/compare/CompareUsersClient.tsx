'use client';

import { useRouter } from 'next/navigation';
import { GitCompareIcon } from 'lucide-react';

import AuthModal from '../auth/AuthModal';
import CompareUsers from './CompareUsers';
import Protected from '../auth/Protected';

const CompareUsersClient = () => {
  const router = useRouter();

  return (
    <Protected
      fallback={
        <AuthModal
          icon={<GitCompareIcon size={28} />}
          title='Compare GitHub Profiles'
          description='Sign in with GitHub to compare repositories and developer activity.'
          features={[
            'Repository comparison',
            'Language usage',
            'Compare developer profiles',
            'Stars and forks',
          ]}
          onBack={() => router.back()}
        />
      }
    >
      <CompareUsers />
    </Protected>
  );
};

export default CompareUsersClient;
