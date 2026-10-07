'use client';

import { useState } from 'react';

import SavedProfiles from './SavedProfiles';
import SavedStats from './SavedStats';
import PinnedProfiles from './PinnedProfiles';
import SavedHeader from './SavedHeader';
import RecentlyViewed from './RecentlyViewed';
import SavedToolbar from './SavedToolbar';
import SavedEmptyState from './SavedEmptyState';

import { SavedView } from '@/types/saved';
import { savedProfiles } from '@/data/saved/saved-profiles.data';

import '../../styles/components/saved/SavedClient.scss';

const SavedClient = () => {
  const [view, setView] = useState<SavedView>('grid');

  const pinnedProfiles = savedProfiles.filter((profile) => profile.isPinned);
  const unpinnedProfiles = savedProfiles.filter((profile) => !profile.isPinned);

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
              <SavedToolbar view={view} onView={setView} />

              <SavedProfiles view={view} profiles={unpinnedProfiles} />
            </section>
          </>
        )}

        <RecentlyViewed />
      </div>
    </div>
  );
};

export default SavedClient;
