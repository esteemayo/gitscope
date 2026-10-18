'use client';

import { useEffect, useMemo, useState } from 'react';

import SavedToolbar from './toolbar/SavedToolbar';
import SavedStats from './SavedStats';
import RecentlyViewed from './recent/RecentlyViewed';
import SavedHeader from './SavedHeader';
import SavedProfilesChart from './chart/SavedProfilesChart';
import SavedProfiles from './SavedProfiles';
import SavedInsightsProfile from './insights/SavedInsightsProfile';
import PinnedProfiles from './PinnedProfiles';
import DeleteSavedProfileModal from './card/DeleteSavedProfileModal';
import SavedEmptyState from './SavedEmptyState';

import { savedProfiles } from '@/data/saved/saved-profiles.data';
import { MAX_PINNED_PROFILES } from '@/constants/savedProfiles';
import { recentProfiles } from '@/data/saved/recent-profiles.data';

import { SavedProfile } from '@/types/saved/card';
import { SavedView, SortDirection, SortField } from '@/types/saved';

import '../../styles/components/saved/SavedClient.scss';

const SavedClient = () => {
  const [profiles, setProfiles] = useState<SavedProfile[]>([]);
  const [view, setView] = useState<SavedView>('grid');
  const [sortField, setSortField] = useState<SortField>('recent');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortDirection, setSortDirection] = useState<SortDirection>('desc');
  const [isDeleting, setIsDeleting] = useState<boolean>(false);
  const [profileToDelete, setProfileToDelete] = useState<SavedProfile | null>(
    null,
  );

  const pinnedProfiles = useMemo(
    () => profiles.filter((profile) => profile.isPinned),
    [profiles],
  );

  const unpinnedProfiles = useMemo(
    () => profiles.filter((profile) => !profile.isPinned),
    [profiles],
  );

  const pinnedCount = useMemo(
    () => pinnedProfiles.length,
    [pinnedProfiles.length],
  );

  const hasReachedPinLimit = pinnedCount >= MAX_PINNED_PROFILES;

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

  const handleTogglePin = (profileId: number) => {
    setProfiles((currentProfiles) => {
      const targetProfile = currentProfiles.find(
        (profile) => profile.id === profileId,
      );

      if (!targetProfile) return currentProfiles;

      if (targetProfile.isPinned) {
        return currentProfiles.map((profile) =>
          profile.id === profileId ? { ...profile, isPinned: false } : profile,
        );
      }

      const currentPinnedCount = currentProfiles.filter(
        (profile) => profile.isPinned,
      ).length;

      if (currentPinnedCount >= MAX_PINNED_PROFILES) {
        return currentProfiles;
      }

      return currentProfiles.map((profile) =>
        profile.id === profileId ? { ...profile, isPinned: true } : profile,
      );
    });
  };

  const handleCloseModal = () => {
    if (isDeleting) return;

    setProfileToDelete(null);
    setIsDeleting(false);
  };

  const handleDeleteProfile = async () => {
    if (isDeleting || !profileToDelete) return;

    setIsDeleting(true);

    try {
      await new Promise<void>((resolve) => {
        setTimeout(resolve, 1200);
      });

      setProfiles((prev) =>
        prev.filter((profile) => profile.id !== profileToDelete?.id),
      );

      setProfileToDelete(null);
    } catch (err: unknown) {
      console.log('Faled to delete saved profile:', err);
    } finally {
      setIsDeleting(false);
    }
  };

  useEffect(() => {
    const raf = requestAnimationFrame(() => {
      setProfiles(savedProfiles);
    });

    return () => cancelAnimationFrame(raf);
  }, []);

  const hasSavedProfiles = (profiles ?? []).length > 0;

  return (
    <div className='saved-client'>
      <div className='saved-client__container'>
        <SavedHeader />

        {!hasSavedProfiles ? (
          <SavedEmptyState />
        ) : (
          <>
            <SavedStats
              profiles={profiles}
              totalPinned={pinnedProfiles.length}
            />

            <PinnedProfiles
              profiles={pinnedProfiles}
              onToggle={handleTogglePin}
              onDelete={setProfileToDelete}
            />

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

              <SavedProfiles
                view={view}
                profiles={filteredProfiles}
                hasReachedPinLimit={hasReachedPinLimit}
                onToggle={handleTogglePin}
                onDelete={setProfileToDelete}
              />

              <SavedInsightsProfile profiles={profiles} />

              <SavedProfilesChart profiles={profiles} />
            </section>
          </>
        )}

        <RecentlyViewed profiles={recentProfiles} />
      </div>

      <DeleteSavedProfileModal
        isOpen={!!profileToDelete}
        isDeleting={isDeleting}
        profile={profileToDelete}
        onClose={handleCloseModal}
        onConfirm={handleDeleteProfile}
      />
    </div>
  );
};

export default SavedClient;
