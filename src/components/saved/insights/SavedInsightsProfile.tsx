'use client';

import {
  Bookmark,
  FolderGit2,
  Sparkles,
  Star,
  Users,
  UsersRound,
} from 'lucide-react';

import SavedInsightsStatCard from './SavedInsightsStatCard';
import SavedHeading from '../SavedHeading';
import SavedInsightsHighlight from './SavedInsightsHighlight';
import SavedInsightsSummary from './SavedInsightsSummary';
import SavedInsightsEmptyState from './SavedInsightsEmptyState';

import { SavedInsightProfile } from '@/types/saved/insights';
import { SavedInsightsProfileProps } from '@/types/saved/insights/saved.insights.profile.type';

import '../../../styles/components/saved/insights/SavedInsightsProfile.scss';

const getStars = (profile: SavedInsightProfile): number => {
  return profile.stars ?? 0;
};

const getRepositories = (profile: SavedInsightProfile): number => {
  return profile.repositories ?? 0;
};

const getFollowers = (profile: SavedInsightProfile): number => {
  return profile.followers ?? 0;
};

const formatNumber = (value: number): string => {
  const FORMATTER = new Intl.NumberFormat('en', {
    notation: value >= 10_000 ? 'compact' : 'standard',
    maximumFractionDigits: 1,
  });

  return FORMATTER.format(value);
};

const SavedInsightsProfile = ({ profiles }: SavedInsightsProfileProps) => {
  const savedCount = profiles.length;

  const totalStars = profiles.reduce(
    (total, profile) => total + getStars(profile),
    0,
  );

  const totalRepos = profiles.reduce(
    (total, profile) => total + getRepositories(profile),
    0,
  );

  const totalFollowers = profiles.reduce(
    (total, profile) => total + getFollowers(profile),
    0,
  );

  const mostStarred = [...profiles].sort(
    (a, b) => (b.totalStars ?? b.stars ?? 0) - (a.totalStars ?? a.stars ?? 0),
  )[0];

  const mostFollowed = [...profiles].sort(
    (a, b) => (b.followers ?? 0) - (a.followers ?? 0),
  )[0];

  const largestPortfolio = [...profiles].sort(
    (a, b) => (b.repositories ?? 0) - (a.repositories ?? 0),
  )[0];

  const summary = `
    Your collection contains ${savedCount} ${savedCount === 1 ? 'developer' : 'developers'}, 
    representing ${formatNumber(totalStars)} combined repository stars, ${formatNumber(totalRepos)} public repositories, 
    and ${formatNumber(totalFollowers)} combined followers.
  `;

  if (savedCount === 0) {
    return (
      <section
        className='saved-insights-profile'
        aria-labelledby='saved-insights-profile-title'
      >
        <header className='saved-insights-profile__header'>
          <SavedHeading
            title='Saved insights'
            description='A quick overview of the developers you follow.'
            icon={Sparkles}
          />
        </header>

        <SavedInsightsEmptyState
          title='Your insights will appear here'
          description='Save GitHub profiles to compare stars, followers, and repository counts in one place.'
        />
      </section>
    );
  }

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

        <span className='saved-insights-profile__header--count'>
          <Bookmark
            size={14}
            strokeWidth={1.8}
            role='img'
            aria-hidden='true'
            focusable='false'
          />
          {savedCount} {savedCount === 1 ? 'profile' : 'profiles'}
        </span>
      </header>

      <div className='saved-insights-profile__stats'>
        <SavedInsightsStatCard
          label='Saved developers'
          value={formatNumber(savedCount)}
          description='Profiles in your collection'
          icon={Users}
          accentColor='#8B5CF6'
        />

        <SavedInsightsStatCard
          label='Combined stars'
          value={formatNumber(totalStars)}
          description='Stars across saved profiles'
          icon={Star}
          accentColor='#EAB308'
        />

        <SavedInsightsStatCard
          label='Public repositories'
          value={formatNumber(totalRepos)}
          description='Combined repository count'
          icon={FolderGit2}
          accentColor='#06B6D4'
        />

        <SavedInsightsStatCard
          label='Combined followers'
          value={formatNumber(totalFollowers)}
          description='Followers across saved profiles'
          icon={UsersRound}
          accentColor='#10B981'
        />
      </div>

      <SavedInsightsSummary summary={summary} />

      <div className='saved-insights-profile__highlights'>
        <div className='saved-insights-profile__highlights-heading'>
          <h3>Standout profiles</h3>

          <p>Explore the leading profiles in your collection.</p>
        </div>

        <div className='saved-insights-profile__highlights-grid'>
          <SavedInsightsHighlight
            label='Most starred'
            description='Highest combined repository stars'
            icon={Star}
            profile={mostStarred}
            metric={`${formatNumber(mostStarred ? getStars(mostStarred) : 0)} stars`}
            accentColor='#EAB308'
          />

          <SavedInsightsHighlight
            label='Most followed'
            description='Largest GitHub following'
            icon={UsersRound}
            profile={mostFollowed}
            metric={`${formatNumber(mostFollowed ? getFollowers(mostFollowed) : 0)} followers`}
            accentColor='#EC4899'
          />

          <SavedInsightsHighlight
            label='Largest portfolio'
            description='Most public repositories'
            icon={FolderGit2}
            profile={largestPortfolio}
            metric={`${formatNumber(largestPortfolio ? getRepositories(largestPortfolio) : 0)} repos`}
            accentColor='#06B6D4'
          />
        </div>
      </div>

      <footer className='saved-insights-profile__footer'>
        <Sparkles
          size={14}
          strokeWidth={1.8}
          role='img'
          aria-hidden='true'
          focusable='false'
        />

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
