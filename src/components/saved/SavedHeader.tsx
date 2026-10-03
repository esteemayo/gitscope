'use client';

import { Bookmark } from 'lucide-react';
import '../../styles/components/saved/SavedHeader.scss';

const SavedHeader = () => {
  return (
    <header className='saved-header'>
      <div className='saved-header__heading'>
        <div className='saved-header__icon'>
          <Bookmark
            size={18}
            strokeWidth={1.8}
            role='img'
            aria-hidden='true'
            focusable='false'
          />
        </div>

        <div className='saved-header__content'>
          <span className='saved-header__content--eyebrow'>
            Your collection
          </span>

          <h1 className='saved-header__content--title'>Saved profiles</h1>

          <p className='saved-header__content--description'>
            Keep the GitHub profiles you want to revisit within reach.
          </p>
        </div>
      </div>
    </header>
  );
};

export default SavedHeader;
