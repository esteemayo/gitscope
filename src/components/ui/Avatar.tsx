'use client';

import Image from 'next/image';
import { useState } from 'react';

import DefaultAvatarIcon from '../icons/DefaultAvatarIcon';

import { AvatarProps } from '@/types/ui/avatar.type';
import { getInitials } from '@/utils/getInitials';
import { getAvatarColor } from '@/utils/avatarColors';

import '../../styles/components/ui/Avatar.scss';

type CustomCSSProperties = React.CSSProperties & {
  '--avatar-size': string;
  '--accent-color': string;
};

const Avatar = ({
  imgSrc,
  alt,
  size = 150,
  name,
  fallback = 'initials',
}: AvatarProps) => {
  const initials = getInitials(name);
  const accentColor = getAvatarColor(name || alt);

  const [isError, setIsError] = useState(false);

  const showFallback = !imgSrc || isError;

  if (showFallback) {
    return (
      <div className='avatar'>
        <div
          key={fallback}
          className='avatar__fallback'
          style={
            {
              '--avatar-size': `${size / 10}rem`,
              '--accent-color': accentColor,
            } as CustomCSSProperties
          }
        >
          <div className='avatar__fallback--inner'>
            {fallback === 'initials' && initials ? (
              <span className='avatar__fallback--initials'>{initials}</span>
            ) : (
              <DefaultAvatarIcon size={size * 0.7} />
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className='avatar'
      style={
        {
          '--avatar-size': `${size / 10}rem`,
          '--accent-color': accentColor,
        } as CustomCSSProperties
      }
    >
      <div className='avatar__ring'>
        <Image
          key={imgSrc}
          src={imgSrc}
          width={112}
          height={112}
          alt={alt}
          priority
          loading='eager'
          onError={() => setIsError(true)}
        />
      </div>

      <span
        className='avatar__status'
        aria-hidden='true'
        title='GitHub profile'
      />
    </div>
  );
};

export default Avatar;
