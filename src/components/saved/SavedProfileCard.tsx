'use client';

import Image from 'next/image';
import clsx from 'clsx';
import {
  ArrowRight,
  ExternalLink,
  GripVertical,
  MapPin,
  Pin,
  Star,
} from 'lucide-react';
import Link from 'next/link';

import SavedMetric from './SavedMetric';
import SavedProfileMenu from './SavedProfileMenu';

import { SavedProfileCardProps } from '@/types/saved/saved.profile.card.type';
import '../../styles/components/saved/SavedProfileCard.scss';

const SavedProfileCard = ({
  view,
  profile,
  draggable,
  onPin,
  onOpen,
}: SavedProfileCardProps) => {
  return (
    <article
      className={clsx('saved-profile-card', {
        'saved-profile-card--list': view === 'list',
      })}
      data-pinned={profile.isPinned}
      style={
        {
          '--accent-color': profile.accentColor,
        } as React.CSSProperties
      }
    >
      <div className='saved-profile-card__top'>
        {draggable && (
          <button
            type='button'
            className='saved-profile-card__drag-handle'
            aria-label={`Reorder ${profile.login}`}
            title='Drag to reorder'
          >
            <GripVertical
              size={17}
              strokeWidth={1.8}
              role='img'
              aria-hidden='true'
              focusable='false'
            />
          </button>
        )}

        <div className='saved-profile-card__actions'>
          <button
            type='button'
            className='saved-profile-card__pin-btn'
            aria-label={
              profile.isPinned
                ? `Unpin ${profile.login}`
                : `Pin ${profile.login}`
            }
            aria-pressed={profile.isPinned}
            onClick={() => onPin?.(profile.id)}
          >
            <Pin
              size={16}
              strokeWidth={1.8}
              role='img'
              aria-hidden='true'
              focusable='false'
            />
          </button>

          <SavedProfileMenu profile={profile} />
        </div>
      </div>

      <div className='saved-profile-card__identity'>
        <div className='saved-profile-card__avatar-wrapper'>
          <Image
            src={profile.avatarUrl}
            width={52}
            height={52}
            alt={`${profile.name || profile.login}'s avatar`}
            className='saved-profile-card__avatar'
          />

          <span className='saved-profile-card__status' aria-hidden='true' />
        </div>

        <div className='saved-profile-card__identity-content'>
          <h3 className='saved-profile-card__identity-content--name'>
            {profile.name || profile.login}
          </h3>

          <Link
            href={`https://github.com/${profile.login}`}
            className='saved-profile-card__identity-content--username'
            target='_blank'
            rel='noopener noreferrer'
          >
            <span>@{profile.login}</span>

            <ExternalLink
              size={12}
              strokeWidth={1.8}
              role='img'
              aria-hidden='true'
              focusable='false'
            />
          </Link>
        </div>
      </div>

      {profile.bio && <p className='saved-profile-card__bio'>{profile.bio}</p>}

      {location && (
        <div className='saved-profile-card__location'>
          <MapPin
            size={13}
            strokeWidth={1.8}
            role='img'
            aria-hidden='true'
            focusable='false'
          />

          <span>{profile.location}</span>
        </div>
      )}

      <div className='saved-profile-card__divider' aria-hidden='true' />

      <div className='saved-profile-card__metrics'>
        <SavedMetric value={profile.repositories} label='Repos' />

        <SavedMetric value={profile.stars} label='Stars' icon={Star} />

        <SavedMetric value={profile.followers} label='Followers' />
      </div>

      <footer className='saved-profile-card__footer'>
        <span className='saved-profile-card__footer--last-viewed'>
          {profile.lastViewed}
        </span>

        <Link
          href={`/${profile.login}`}
          className='saved-profile-card__footer--view-profile'
        >
          <span>View profile</span>

          <ArrowRight
            size={12}
            strokeWidth={1.8}
            role='img'
            aria-hidden='true'
            focusable='false'
          />
        </Link>
      </footer>
    </article>
  );
};

export default SavedProfileCard;
