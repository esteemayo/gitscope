import Image from 'next/image';
import {
  ArrowUpRight,
  Bookmark,
  Building2,
  CalendarDays,
  Copy,
  ExternalLink,
  Link2,
  MapPin,
  Share2,
} from 'lucide-react';

import FloatingProfileStats from './FloatingProfileStats';
import {
  MOCK_PROFILE,
  MOCK_PROFILE_STATS,
} from '@/data/dashboard/profile.data';

import '../../../styles/components/dashboard/hero/DashboardHero.scss';

const getMemberSince = (date: string) => {
  return new Date(date).getFullYear();
};

const DashboardHero = () => {
  const profile = MOCK_PROFILE;

  return (
    <section className='dashboard-hero'>
      <div className='dashboard-hero__container'>
        <div className='dashboard-hero__backdrop' />

        <div className='dashboard-hero__content'>
          <div className='dashboard-hero__profile-identity'>
            <div className='dashboard-hero__avatar-wrapper'>
              <Image
                src={profile.avatar_url}
                width={104}
                height={104}
                alt={`${profile.login}'s GitHub avatar`}
                className='dashboard-hero__avatar'
              />

              <span
                className='dashboard-hero__online-indicator'
                title='GitHub profile'
                aria-hidden='true'
              />
            </div>

            <div className='dashboard-hero__identity-content'>
              <div className='dashboard-hero__name-row'>
                <h1 className='dashboard-hero__name'>
                  {profile.name ?? profile.login}
                </h1>

                <span className='dashboard-hero__profile-badge'>
                  GitHub profile
                </span>
              </div>

              <a
                href={profile.html_url}
                target='_blank'
                rel='noopener noreferrer'
                className='dashboard-hero__username'
              >
                <span>@{profile.login}</span>

                <ExternalLink
                  size={13}
                  strokeWidth={1.8}
                  role='img'
                  aria-hidden='true'
                  focusable='false'
                />
              </a>

              {profile.bio && (
                <p className='dashboard-hero__bio'>{profile.bio}</p>
              )}

              <div className='dashboard-hero__metadata'>
                {profile.company && (
                  <span>
                    <Building2
                      size={15}
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
                      size={15}
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
                    size={15}
                    strokeWidth={1.8}
                    role='img'
                    aria-hidden='true'
                    focusable='false'
                  />
                  Joined {getMemberSince(profile.created_at)}
                </span>

                {profile.blog && (
                  <a
                    href={profile.blog}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <Link2
                      size={15}
                      strokeWidth={1.8}
                      role='img'
                      aria-hidden='true'
                      focusable='false'
                    />
                    Website
                    <ArrowUpRight
                      size={12}
                      strokeWidth={1.8}
                      role='img'
                      aria-hidden='true'
                      focusable='false'
                    />
                  </a>
                )}
              </div>
            </div>
          </div>

          <div className='dashboard-hero__actions'>
            <button
              type='button'
              className='dashboard-hero__actions--secondary'
              aria-label='Copy profile link'
              title='Copy profile link'
            >
              <Copy
                size={16}
                strokeWidth={1.8}
                role='img'
                aria-hidden='true'
                focusable='false'
              />
            </button>

            <button
              type='button'
              className='dashboard-hero__actions--secondary'
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

            <button type='button' className='dashboard-hero__actions--save'>
              <Bookmark
                size={16}
                strokeWidth={1.8}
                role='img'
                aria-hidden='true'
                focusable='false'
              />

              <span>Save profile</span>
            </button>

            <a
              href={profile.html_url}
              target='_blank'
              rel='noopener noreferrer'
              className='dashboard-hero__actions--github'
            >
              <span>View GitHub</span>

              <ArrowUpRight
                size={15}
                strokeWidth={1.8}
                role='img'
                aria-hidden='true'
                focusable='false'
              />
            </a>
          </div>
        </div>

        <div className='dashboard-hero__bottom-line' aria-hidden='true' />
      </div>

      <FloatingProfileStats stats={MOCK_PROFILE_STATS} />
    </section>
  );
};

export default DashboardHero;
