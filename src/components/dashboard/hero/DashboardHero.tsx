'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import {
  Bookmark,
  Building2,
  CalendarDays,
  Check,
  Copy,
  ExternalLink,
  Globe,
  MapPin,
  Share2,
} from 'lucide-react';

import ShareModal from '@/components/modal/ShareModal';
import FloatingProfileStats from './FloatingProfileStats';

import { DashboardHeroProps } from '@/types/dashboard/hero/dashboard.hero.type';
import '../../../styles/components/dashboard/hero/DashboardHero.scss';

const getProfileUrl = (username: string) => {
  return new URL(
    `/${encodeURIComponent(username)}`,
    window.location.origin,
  ).toString();
};

const getJoinedDate = (date: string) => {
  return new Intl.DateTimeFormat('en', {
    month: 'long',
    year: 'numeric',
  }).format(new Date(date));
};

const getWebsiteUrl = (website: string) => {
  return /^https?:\/\//i.test(website) ? website : `https://${website}`;
};

const DashboardHero = ({
  profile,
  stats,
  isSaved = false,
  onSave,
}: DashboardHeroProps) => {
  const [shareOpen, setShareOpen] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const [isCopyError, setIsCopyError] = useState(false);

  const website = profile.blog?.trim();
  const joinedDate = getJoinedDate(profile.created_at);

  const handleCopy = async () => {
    setIsCopyError(false);

    try {
      await navigator.clipboard.writeText(getProfileUrl(profile.login));
      setIsCopied(true);
    } catch {
      setIsCopyError(true);
    }
  };

  useEffect(() => {
    const timeout = setTimeout(() => setIsCopied(false), 1200);

    return () => clearTimeout(timeout);
  }, [isCopied]);

  return (
    <section className='dashboard-hero'>
      <div className='dashboard-hero__container'>
        <div className='dashboard-hero__glow' aria-hidden='true' />

        <div className='dashboard-hero__wrapper'>
          <div className='dashboard-hero__content'>
            <div className='dashboard-hero__avatar-wrapper'>
              <div className='dashboard-hero__avatar-ring'>
                <Image
                  src={profile.avatar_url}
                  width={112}
                  height={112}
                  alt={`${profile.login}'s GitHub avatar`}
                  priority
                  className='dashboard-hero__avatar'
                />
              </div>

              <span
                className='dashboard-hero__avatar-status'
                aria-hidden='true'
                title='GitHub profile'
              />
            </div>

            <div className='dashboard-hero__identity'>
              <h1 className='dashboard-hero__profile-name'>
                {profile.name ?? profile.login}
              </h1>

              <a
                href={profile.html_url}
                target='_blank'
                rel='noopener noreferrer'
                className='dashboard-hero__username'
                aria-label='Open GitHub profile'
              >
                @{profile.login}
              </a>

              {profile.bio && (
                <p className='dashboard-hero__bio'>{profile.bio}</p>
              )}

              <div className='dashboard-hero__actions'>
                <button
                  type='button'
                  onClick={() => setShareOpen(true)}
                  className='dashboard-hero__actions--share'
                  aria-label='Share profile'
                  title='Share profile'
                >
                  <Share2
                    size={16}
                    strokeWidth={1.8}
                    role='img'
                    aria-hidden='true'
                    focusable='false'
                  />
                </button>

                <button
                  type='button'
                  onClick={handleCopy}
                  className='dashboard-hero__actions--secondary'
                  aria-label='Copy profile link'
                  title='Copy profile link'
                >
                  {isCopied ? (
                    <Check
                      size={16}
                      strokeWidth={1.8}
                      role='img'
                      aria-hidden='true'
                      focusable='false'
                    />
                  ) : (
                    <Copy
                      size={16}
                      strokeWidth={1.8}
                      role='img'
                      aria-hidden='true'
                      focusable='false'
                    />
                  )}

                  <span>{isCopied ? 'Copied' : 'Copy'}</span>
                </button>

                <button
                  type='button'
                  onClick={() => onSave(profile)}
                  className='dashboard-hero__actions--secondary'
                  aria-pressed={isSaved}
                  disabled={!onSave}
                  title={
                    !onSave
                      ? 'Connect this action to your saved profiles'
                      : undefined
                  }
                >
                  <Bookmark
                    size={16}
                    fill={isSaved ? 'currentColor' : 'none'}
                    strokeWidth={1.8}
                    role='img'
                    aria-hidden='true'
                    focusable='false'
                  />

                  <span>{isSaved ? 'Saved' : 'Save'} profile</span>
                </button>
              </div>
            </div>

            {isCopyError && (
              <p className='dashboard-hero__copy-error' role='alert'>
                Could not copy the profile URL. Please try again.
              </p>
            )}
          </div>

          <div className='dashboard-hero__profile-meta'>
            {profile.company && (
              <span>
                <Building2
                  size={16}
                  strokeWidth={1.8}
                  role='img'
                  aria-hidden='true'
                  focusable='false'
                />
                {profile.company}
              </span>
            )}

            {profile.location && (
              <span>
                <MapPin
                  size={16}
                  strokeWidth={1.8}
                  role='img'
                  aria-hidden='true'
                  focusable='false'
                />
                {profile.location}
              </span>
            )}

            <span>
              <CalendarDays
                size={16}
                strokeWidth={1.8}
                role='img'
                aria-hidden='true'
                focusable='false'
              />
              Joined {joinedDate}
            </span>

            {website && (
              <a
                href={getWebsiteUrl(website)}
                target='_blank'
                rel='noopener noreferrer'
              >
                <Globe
                  size={16}
                  strokeWidth={1.8}
                  role='img'
                  aria-hidden='true'
                  focusable='false'
                />
                Website
                <ExternalLink
                  size={13}
                  className='external-link'
                  strokeWidth={1.8}
                  role='img'
                  aria-hidden='true'
                  focusable='false'
                />
              </a>
            )}
          </div>

          <div className='dashboard-hero__bottom-line' aria-hidden='true' />
        </div>
      </div>

      <FloatingProfileStats stats={stats} />

      <ShareModal
        isOpen={shareOpen}
        profileUrl={getProfileUrl(profile.login)}
        username={profile.login}
        onClose={() => setShareOpen(false)}
      />
    </section>
  );
};

export default DashboardHero;
