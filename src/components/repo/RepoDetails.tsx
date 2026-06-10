'use client';

import SectionCard from '../ui/SectionCard';

import RepoSidebar from './RepoSidebar';
import Commits from './Commits';
import Contributors from './Contributors';
import RepoHero from './RepoHero';
import RepoOverview from './RepoOverview';
import Timeline from './Timeline';
import LanguageChart from './LanguageChart';
import RepoHealth from './RepoHealth';

import * as repoData from '@/data/repo/index';
import { getRepositoryStatus } from '@/utils/getRepositoryStatus';

import '../../styles/components/RepoDetails.scss';

const RepoDetails = () => {
  const repo = {
    id: 1,
    name: 'albumz-api',
    description:
      'User password authentication and email verification using passport and passport-local.',
    stargazers_count: 2043,
    forks_count: 4320,
    open_issues_count: 50,
    language: 'TypeScript',
    default_branch: 'main',
    html_url: 'https://github.com/esteemayo/albumz-api',
    created_at: '2025-10-29T15:34:58Z',
    updated_at: '2025-10-29T15:34:58Z',
    archived: false,
    disabled: false,
  };

  return (
    <div className='repo-details'>
      <div className='repo-details__container'>
        <main className='repo-details__content'>
          <RepoHero repo={repo} />

          <SectionCard
            title='Repository Overview'
            description='Key repository statistics and metadata.'
          >
            <RepoOverview items={repoData.overviewItems} />
          </SectionCard>

          <SectionCard
            title='Repository Health'
            description='Overview of repository activity and maintenance status.'
          >
            <RepoHealth
              status={getRepositoryStatus({
                archived: repo.archived,
                disabled: repo.disabled,
                updatedAt: repo.updated_at,
              })}
              archived={true}
              updatedAt={repo.updated_at}
              issues={repo.open_issues_count}
            />
          </SectionCard>

          <SectionCard
            title='Activity Timeline'
            description='Recent repository events and milestones.'
          >
            <Timeline events={repoData.timelineEvents.slice(0, 8)} />
          </SectionCard>

          <SectionCard
            title='Language Distribution'
            description='Repository code composition.'
          >
            <LanguageChart languages={repoData.languageData} />
          </SectionCard>

          <SectionCard
            title='Top Contributors'
            description='Most active repository contributors.'
          >
            <Contributors contributors={repoData.contributors.slice(0, 6)} />
          </SectionCard>

          <SectionCard
            title='Recent Changes'
            description='Latest commits merged into the repository.'
          >
            <Commits commits={repoData.commits.slice(0, 10)} />
          </SectionCard>
        </main>

        <RepoSidebar
          githubUrl={repo.html_url}
          stars={repo.stargazers_count}
          forks={repo.forks_count}
          issues={repo.open_issues_count}
          language={repo.language}
          branch={repo.default_branch}
          createdAt={repo.created_at}
          updatedAt={repo.updated_at}
          status={getRepositoryStatus({
            archived: repo.archived,
            disabled: repo.disabled,
            updatedAt: repo.updated_at,
          })}
        />
      </div>
    </div>
  );
};

export default RepoDetails;
