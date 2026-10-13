'use client';

import { useMemo, useState } from 'react';

import SavedEmptyState from './SavedEmptyState';
import SavedStats from './SavedStats';
import SavedToolbar from './toolbar/SavedToolbar';
import SavedHeader from './SavedHeader';
import RecentlyViewed from './recent/RecentlyViewed';
import SavedProfiles from './SavedProfiles';
import SavedInsightsProfile from './insights/SavedInsightsProfile';
import PinnedProfiles from './PinnedProfiles';

import { savedProfiles } from '@/data/saved/saved-profiles.data';
import { recentProfiles } from '@/data/saved/recent-profiles.data';

import { SavedProfile } from '@/types/saved/card';
import { SavedView, SortDirection, SortField } from '@/types/saved';

import '../../styles/components/saved/SavedClient.scss';
import DeleteSavedProfileModal from './card/DeleteSavedProfileModal';

const SavedClient = () => {
  const [sortField, setSortField] = useState<SortField>('recent');
  const [view, setView] = useState<SavedView>('grid');
  const [sortDirection, setSortDirection] = useState<SortDirection>('desc');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const pinnedProfiles = savedProfiles.filter((profile) => profile.isPinned);
  const unpinnedProfiles = savedProfiles.filter((profile) => !profile.isPinned);

  const sortedProfiles = useMemo(() => {
    const profiles = [...unpinnedProfiles];

    profiles.sort((a, b) => {
      let comparison = 0;

      if (sortField === 'recent') {
        const aTime = a.lastViewedAt ? new Date(a.lastViewedAt).getTime() : 0;

        const bTime = b.lastViewedAt ? new Date(b.lastViewedAt).getTime() : 0;

        comparison = aTime - bTime;
      } else {
        const values: Record<
          Exclude<SortField, 'recent'>,
          (profile: SavedProfile) => number
        > = {
          stars: (profile) => profile.stars,
          repositories: (profile) => profile.repositories,
          followers: (profile) => profile.followers,
        };

        comparison = values[sortField](a) - values[sortField](b);
      }

      return sortDirection === 'desc' ? -comparison : comparison;
    });

    return profiles;
  }, [sortDirection, sortField, unpinnedProfiles]);

  const filteredProfiles = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    if (!query) return sortedProfiles;

    return sortedProfiles.filter((profile) => {
      const searchable = [profile.name, profile.login]
        .filter(Boolean)
        .join(' ')
        .toLowerCase();

      return searchable.includes(query);
    });
  }, [searchQuery, sortedProfiles]);

  return (
    <div className='saved-client'>
      <div className='saved-client__container'>
        <SavedHeader />
        {savedProfiles.length === 0 ? (
          <SavedEmptyState />
        ) : (
          <>
            <SavedStats />

            <PinnedProfiles profiles={pinnedProfiles} />

            <section className='saved-client__section'>
              <SavedToolbar
                view={view}
                searchQuery={searchQuery}
                sortField={sortField}
                sortDirection={sortDirection}
                onViewChange={setView}
                onSearchChange={setSearchQuery}
                onSortFieldChange={setSortField}
                onSortDirectionChange={setSortDirection}
              />

              <SavedProfiles view={view} profiles={filteredProfiles} />
            </section>
          </>
        )}

        <RecentlyViewed profiles={recentProfiles} />

        <SavedInsightsProfile profiles={savedProfiles} />
      </div>
      <DeleteSavedProfileModal />
    </div>
  );
};

export default SavedClient;
