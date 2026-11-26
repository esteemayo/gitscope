type FallbackType = 'initials' | 'icon';

export interface AvatarProps {
  imgSrc?: string;
  alt: string;
  name?: string;
  size?: number;
  fallback?: FallbackType;
}
