'use client';

import SectionCard from '../ui/SectionCard';

import RepoMetrics from './RepoMetrics';
import Commits from './Commits';
import RepoSummary from './RepoSummary';
import RepoHero from './RepoHero';
import RepoSidebar from './RepoSidebar';
import Timeline from './Timeline';
import Contributors from './Contributors';
import RepoHealth from './RepoHealth';
import LanguageChart from './LanguageChart';

import {
  commits,
  contributors,
  languageData,
  timelineEvents,
} from '@/data/repo/index';
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

          <SectionCard
            title='Repository Health'
            description='Overview of repository activity and maintenance status.'
          >
            <RepoHealth
              updatedAt={repo.updated_at}
              issues={repo.open_issues_count}
            />
          </SectionCard>

          <SectionCard
            title='Activity Timeline'
            description='Recent repository activity'
          >
            <Timeline events={timelineEvents.slice(0, 8)} />
          </SectionCard>

          <SectionCard
            title='Language Distribution'
            description='Repository code breakdown'
          >
            <LanguageChart languages={languageData} />
          </SectionCard>

          <SectionCard
            title='Top Contributors'
            description='Most active repository contributors'
          >
            <Contributors contributors={contributors.slice(0, 6)} />
          </SectionCard>

          <SectionCard
            title='Recent Commits'
            description='Latest repository changes'
          >
            <Commits commits={commits.slice(0, 10)} />
          </SectionCard>
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
