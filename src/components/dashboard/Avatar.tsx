'use client';

import Image from 'next/image';
import { useState } from 'react';

import DefaultAvatarIcon from '../icons/DefaultAvatarIcon';

import { getInitials } from '@/utils/getInitials';
import { getAvatarColor } from '@/utils/avatarColors';

import '../../styles/components/Avatar.scss';

type CustomCSSProperties = React.CSSProperties & {
  '--avatar-size': string;
  '--accent-color': string;
};

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
  const accentColor = getAvatarColor(name || alt);

  const [error, setError] = useState(false);

  const showFallback = !imgSrc || error;

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
          onError={() => setError(true)}
        />
      </div>

      <span
        className='avatar__status'
        aria-hidden='true'
        title='GitHub profile'
      />
    </div>
    // <div className='avatar'>
    //   <div className='avatar__container'>
    //     <Image
    //       key={imgSrc}
    //       src={imgSrc}
    //       width={130}
    //       height={130}
    //       alt={alt}
    //       loading='eager'
    //       onError={() => setError(true)}
    //     />
    //   </div>
    // </div>
  );
};

export default Avatar;
