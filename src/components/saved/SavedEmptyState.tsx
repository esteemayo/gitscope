'use client';

import Link from 'next/link';
import { ArrowRight, Bookmark } from 'lucide-react';

import '../../styles/components/saved/SavedEmptyState.scss';

const SavedEmptyState = () => {
  return (
    <section
      className='saved-empty-state'
      aria-labelledby='saved-empty-state-title'
    >
      <div className='saved-empty-state__icon' aria-hidden='true'>
        <Bookmark
          size={24}
          strokeWidth={1.8}
          role='img'
          aria-hidden='true'
          focusable='false'
        />
      </div>

      <div className='saved-empty-state__content'>
        <span className='saved-empty-state__content--eyebrow'>
          Your collection is empty
        </span>

        <h2
          id='saved-empty-state-title'
          className='saved-empty-state__content--title'
        >
          Save profiles you want to revisit.
        </h2>

        <p className='saved-empty-state__content--description'>
          When you find an interesting GitHub profile, save it from the profile
          header and it will appear here.
        </p>

        <Link href='/' className='saved-empty-state__action'>
          <span>Search GitHub</span>

          <ArrowRight
            size={15}
            strokeWidth={1.8}
            role='img'
            aria-hidden='true'
            focusable='false'
          />
        </Link>
      </div>
    </section>
  );
};

export default SavedEmptyState;
