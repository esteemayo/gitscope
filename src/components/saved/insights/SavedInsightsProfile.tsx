'use client';

import {
  Bookmark,
  FolderGit2,
  Sparkles,
  Star,
  Users2,
  UsersRound,
} from 'lucide-react';

import SavedInsightsStatCard from './SavedInsightsStatCard';
import SavedHeading from '../SavedHeading';
import SavedInsightsHighlight from './SavedInsightsHighlight';

import '../../../styles/components/saved/insights/SavedInsightsProfile.scss';

export interface SavedInsightProfile {
  id: number;
  username: string;
  name?: string | null;
  publicRepos?: number;
  followers?: number;
  totalStars?: number;
  stars?: number;
}

const SavedInsightsProfile = () => {
  return (
    <section
      className='saved-insights-profile'
      aria-labelledby='saved-insights-profile-title'
    >
      <header className='saved-insights-profile__header'>
        <SavedHeading
          title='Saved insights'
          description='A snapshot of the developers in your collection.'
          icon={Sparkles}
        />

        <span className='saved-insights-profile__count'>
          <Bookmark size={14} />
          12 profiles
        </span>
      </header>

      <div className='saved-insights-profile__stats'>
        <SavedInsightsStatCard
          label='Saved developers'
          value='12'
          description='Profiles in your collection'
          icon={Users2}
        />

        <SavedInsightsStatCard
          label='Combined stars'
          value='1200000'
          description='Stars across saved profiles'
          icon={Star}
        />

        <SavedInsightsStatCard
          label='Public repositories'
          value='2988'
          description='Combined repository count'
          icon={FolderGit2}
        />

        <SavedInsightsStatCard
          label='Combined followers'
          value='100000'
          description='Followers across saved profiles'
          icon={UsersRound}
        />
      </div>

      <div className='saved-insights-profile__highlights'>
        <div className='saved-insights-profile__highlights-heading'>
          <div>
            <h3>Standout profiles</h3>

            <p>Explore the leading profiles in your collection.</p>
          </div>
        </div>

        <div className='saved-insights-profile__highlights-grid'>
          <SavedInsightsHighlight
            label='Most starred'
            description='Highest combined repository stars'
            icon={Star}
            profile={{
              id: 100002,
              username: 'torvalds',
              publicRepos: 150,
              followers: 210000,
              totalStars: 100000,
              stars: 75000,
            }}
            metric='stars'
          />

          <SavedInsightsHighlight
            label='Most followed'
            description='Largest GitHub following'
            icon={Star}
            profile={{
              id: 100002,
              username: 'torvalds',
              publicRepos: 150,
              followers: 210000,
              totalStars: 100000,
              stars: 75000,
            }}
            metric='followers'
          />

          <SavedInsightsHighlight
            label='Largest portfolio'
            description='Most public repositories'
            icon={Star}
            profile={{
              id: 100002,
              username: 'torvalds',
              publicRepos: 150,
              followers: 210000,
              totalStars: 100000,
              stars: 75000,
            }}
            metric='repos'
          />
        </div>
      </div>

      <footer className='saved-insights-profile__footer'>
        <Sparkles size={14} />

        <p className='saved-insights-profile__footer--text'>
          Insights are calculated from the saved profile data available to
          GitScope. They are descriptive statistics, not an AI assessment of
          developer skill.
        </p>
      </footer>
    </section>
  );
};

export default SavedInsightsProfile;
