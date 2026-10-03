'use client';

import SavedProfiles from './SavedProfiles';
import SavedStats from './SavedStats';
import PinnedProfiles from './PinnedProfiles';
import SavedHeader from './SavedHeader';
import RecentlyViewed from './RecentlyViewed';
import SavedToolbar from './SavedToolbar';

import '../../styles/components/saved/SavedClient.scss';

const SavedClient = () => {
  return (
    <div className='saved-client'>
      <div className='saved-client__container'>
        <SavedHeader />
        
        <SavedStats />
        
        <PinnedProfiles />
        
        <section className='saved-client__section'>
        <SavedToolbar />
        
        <SavedProfiles />
        </section>

        <RecentlyViewed />
      </div>
    </div>
  );
};

export default SavedClient;
