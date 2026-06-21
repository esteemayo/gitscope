'use client';

import Image from 'next/image';
import { useState } from 'react';

import DefaultAvatarIcon from '../icons/DefaultAvatarIcon';

import { getInitials } from '@/utils/getInitials';
import { getAvatarColor } from '@/utils/avatarColors';

import '../../styles/components/Avatar.scss';

interface AvatarProps {
  imgSrc?: string;
  alt: string;
  name?: string;
  size?: number;
  fallback?: 'initials' | 'icon';
}

const Avatar = ({
  imgSrc,
  alt,
  size = 150,
  name,
  fallback = 'initials',
}: AvatarProps) => {
  const initials = getInitials(name);
  const bcg = getAvatarColor(name || alt);

  const [error, setError] = useState(false);

  const showFallback = !imgSrc || error;

  if (showFallback) {
    return (
      <div className='avatar'>
        <div
          key={fallback}
          className='avatar__fallback'
          style={{
            width: size,
            height: size,
            backgroundColor: `${bcg}20`,
            color: bcg,
            border: `0.8rem solid ${bcg}`,
          }}
        >
          {fallback === 'initials' && initials ? (
            <span className='avatar__fallback--initials'>{initials}</span>
          ) : (
            <DefaultAvatarIcon size={size * 0.7} />
          )}
        </div>
      </div>
    );
  }

  return (
    <div className='avatar'>
      <div className='avatar__container'>
        <Image
          key={imgSrc}
          src={imgSrc}
          width={130}
          height={130}
          alt={alt}
          loading='eager'
          onError={() => setError(true)}
        />
      </div>
    </div>
  );
};

export default Avatar;
