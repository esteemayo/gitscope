'use client';

import RepoMetrics from './RepoMetrics';
import RepoHero from './RepoHero';
import RepoSummary from './RepoSummary';
import RepoHealth from './RepoHealth';
import RepoSidebar from './RepoSidebar';

import '../../styles/components/RepoDetails.scss';

const RepoDetails = () => {
  const repo = {
    id: 1,
    name: 'albumz-api',
    description:
      'User password authentication and email verification using passport and passport-local.',
    stargazers_count: 300,
    forks_count: 1000,
    open_issues_count: 50,
    language: 'TypeScript',
    default_branch: 'main',
    html_url: 'https://github.com/esteemayo/albumz-api',
    created_at: '2025-10-29T15:34:58Z',
    updated_at: '2025-10-29T15:34:58Z',
  };

  return (
    <div className='repo-details'>
      <div className='repo-details__container'>
        <main className='repo-details__content'>
          <RepoHero repo={repo} />

          <RepoMetrics
            stars={repo.stargazers_count}
            forks={repo.forks_count}
            issues={repo.open_issues_count}
            language={repo.language}
          />

          <RepoSummary
            createdAt={repo.created_at}
            updatedAt={repo.updated_at}
            branch={repo.default_branch}
          />

          <RepoHealth
            updatedAt={repo.updated_at}
            issues={repo.open_issues_count}
          />
        </main>

        <RepoSidebar
          githubUrl={repo.html_url}
          stars={repo.stargazers_count}
          forks={repo.forks_count}
          issues={repo.open_issues_count}
          language={repo.language}
        />
      </div>
    </div>
  );
};

export default RepoDetails;
