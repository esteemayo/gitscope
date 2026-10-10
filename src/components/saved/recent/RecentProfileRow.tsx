'use client';

import Link from 'next/link';
import clsx from 'clsx';
import { ArrowUpRight } from 'lucide-react';

import RecentProfileImage from './RecentProfileImage';
import { RecentProfileRowProps } from '@/types/saved/recent/recent.profile.row.type';

import '../../../styles/components/saved/recent/RecentProfileRow.scss';

const RecentProfileRow = ({
  name,
  login,
  bio,
  avatarUrl,
  repositories,
  viewedAt,
  accentColor,
  className,
  style,
}: RecentProfileRowProps) => {
  return (
    <Link
      href={`/${login}`}
      className={clsx('recent-profile-row', className)}
      style={
        {
          '--accent-color': accentColor,
          ...style,
        } as React.CSSProperties
      }
    >
      <div className='recent-profile-row__identity'>
        <RecentProfileImage
          src={avatarUrl}
          name={name}
          size={40}
          alt={`${name}'s avatar`}
          fallback='icon'
        />

        <div className='recent-profile-row__details'>
          <strong className='recent-profile-row__details--name'>{name}</strong>

          <span className='recent-profile-row__details--username'>
            @{login}
          </span>

          {bio && (
            <span className='recent-profile-row__details--bio'>{bio}</span>
          )}
        </div>
      </div>

      <span className='recent-profile-row__repositories'>
        {repositories.toLocaleString()}
      </span>

      <time dateTime={viewedAt} className='recent-profile-row__viewed-at'>
        {viewedAt}
      </time>

      <span className='recent-profile-row__arrow' aria-hidden='true'>
        <ArrowUpRight
          size={15}
          strokeWidth={1.8}
          role='img'
          aria-hidden='true'
          focusable='false'
        />
      </span>
    </Link>
  );
};

export default RecentProfileRow;
