import clsx from 'clsx';
import { FolderGit2, GitFork, Star, Users2 } from 'lucide-react';

import { FloatingProfileStatProps } from '@/types/dashboard/floating.profile.stat.type';
import '../../../styles/components/dashboard/hero/FloatingProfileStat.scss';

type CustomCSSProperties = React.CSSProperties & {
  '--accent-color': string;
};

const STAT_ICONS = {
  repository: FolderGit2,
  star: Star,
  users: Users2,
  'git-fork': GitFork,
};

const formatStat = (value: number) => {
  return new Intl.NumberFormat('en', {
    notation: 'compact',
    maximumFractionDigits: 1,
  }).format(value);
};

const FloatingProfileStat = ({
  label,
  value,
  description,
  icon,
  accentColor,
  className,
  style,
}: FloatingProfileStatProps) => {
  const Icon = STAT_ICONS[icon];

  return (
    <article
      className={clsx('floating-profile-stat', className)}
      style={
        {
          '--accent-color': accentColor,
          ...style,
        } as CustomCSSProperties
      }
    >
      <div className='floating-profile-stat__top'>
        <span className='floating-profile-stat__top--icon'>
          <Icon
            size={24}
            strokeWidth={1.8}
            role='img'
            aria-hidden='true'
            focusable='false'
          />
        </span>
      </div>

      <div className='floating-profile-stat__content'>
        <p className='floating-profile-stat__content--value'>
          {formatStat(value)}
        </p>

        <h3 className='floating-profile-stat__content--label'>{label}</h3>

        <p className='floating-profile-stat__content--description'>
          {description}
        </p>
      </div>
    </article>
  );
};

export default FloatingProfileStat;
