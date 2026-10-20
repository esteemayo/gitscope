'use client';

import { CSS } from '@dnd-kit/utilities';
import clsx from 'clsx';
import { useSortable } from '@dnd-kit/sortable';
import Link from 'next/link';
import {
  ArrowRight,
  ExternalLink,
  GripVertical,
  MapPin,
  Pin,
  PinOff,
  Star,
} from 'lucide-react';

import SavedProfileMenu from './SavedProfileMenu';
import SavedMetric from './SavedMetric';
import SavedProfileImage from './SavedProfileImage';

import { MAX_PINNED_PROFILES } from '@/constants/savedProfiles';
import { formatTimeAgo } from '@/utils/formatTimeAgo';
import { SavedProfileCardProps } from '@/types/saved/card/saved.profile.card.type';

import '../../../styles/components/saved/card/SavedProfileCard.scss';

type CustomCSSProperties = React.CSSProperties & {
  '--accent-color': string;
};

const SavedProfileCard = ({
  view,
  profile,
  isDraggable,
  isPinDisabled,
  onPin,
  onDelete,
}: SavedProfileCardProps) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: profile.id, disabled: !isDraggable });

  return (
    <article
      ref={isDraggable ? setNodeRef : undefined}
      className={clsx('saved-profile-card', {
        'saved-profile-card--list': view === 'list',
      })}
      data-pinned={profile.isPinned}
      style={
        {
          '--accent-color': profile.accentColor,
          ...(isDraggable
            ? {
                transform: CSS.Transform.toString(transform),
                transition,
              }
            : {}),
        } as CustomCSSProperties
      }
    >
      <div className='saved-profile-card__top'>
        {isDraggable && (
          <button
            type='button'
            className='saved-profile-card__drag-handle'
            aria-label={`Reorder ${profile.name ?? profile.login}`}
            title='Drag to reorder'
            {...attributes}
            {...listeners}
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
            onClick={() => onPin?.(profile.id)}
            className='saved-profile-card__pin-btn'
            disabled={isPinDisabled}
            aria-label={
              profile.isPinned
                ? `Unpin ${profile.login}`
                : `Pin ${profile.login}`
            }
            aria-pressed={profile.isPinned}
            aria-disabled={isPinDisabled}
            title={
              isPinDisabled
                ? `You can pin up to ${MAX_PINNED_PROFILES} profiles. Unpin a profile to make a room.`
                : profile.isPinned
                  ? 'Unpin profile'
                  : 'Pin profile'
            }
          >
            {profile.isPinned ? (
              <PinOff
                size={16}
                strokeWidth={1.8}
                role='img'
                aria-hidden='true'
                focusable='false'
              />
            ) : (
              <Pin
                size={16}
                strokeWidth={1.8}
                role='img'
                aria-hidden='true'
                focusable='false'
              />
            )}
          </button>

          <SavedProfileMenu profile={profile} onDelete={onDelete} />
        </div>
      </div>

      <div className='saved-profile-card__identity'>
        <SavedProfileImage
          src={profile.avatarUrl}
          size={52}
          name={profile.name!}
          alt={`${profile.name || profile.login}'s avatar`}
          fallback='icon'
        />

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
        <time
          dateTime={profile.lastViewedAt}
          className='saved-profile-card__footer--last-viewed'
        >
          {formatTimeAgo(profile.lastViewedAt)}
        </time>

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
