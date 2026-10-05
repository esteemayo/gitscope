'use client';

import Image from 'next/image';
import clsx from 'clsx';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

import { RecentProfieRowProps } from '@/types/saved/recent.profile.row.type';
import '../../styles/components/saved/RecentProfileRow.scss';

const RecentProfileRow = ({
  name,
  login,
  bio,
  avatarUrl,
  repositories,
  viewedAt,
  className,
  style,
}: RecentProfieRowProps) => {
  return (
    <Link
      href={`/${login}`}
      className={clsx('recent-profile-row', className)}
      style={style}
    >
      <div className='recent-profile-row__identity'>
        <Image
          src={avatarUrl}
          width={40}
          height={40}
          alt={`${name}'s avatar`}
          className='recent-profile-row__avatar'
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

      <span className='recent-profile-row__repositories'>{repositories}</span>

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
