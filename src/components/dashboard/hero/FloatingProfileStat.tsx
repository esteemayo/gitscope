import clsx from 'clsx';
import { GitFork, GitPullRequest, Star, Users2 } from 'lucide-react';

import { ProfileStat } from '@/types/repository.type';
import '../../../styles/components/dashboard/hero/FloatingProfileStat.scss';

const STAT_ICONS = {
  repository: GitPullRequest,
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

interface FloatingProfileStatProps extends ProfileStat {
  className?: string;
  style?: React.CSSProperties;
}

const FloatingProfileStat = ({
  label,
  value,
  description,
  icon,
  className,
  style,
}: FloatingProfileStatProps) => {
  const Icon = STAT_ICONS[icon];

  return (
    <article className={clsx('floating-profile-stat', className)} style={style}>
      <div className='floating-profile-stat__top'>
        <span className='floating-profile-stat__top--label'>{label}</span>

        <span className='floating-profile-stat__top--icon'>
          <Icon
            size={18}
            strokeWidth={1.8}
            role='img'
            aria-hidden='true'
            focusable='false'
          />
        </span>
      </div>

      <div className='floating-profile-stat__content'>
        <strong className='floating-profile-stat__content--value'>
          {formatStat(value)}
        </strong>

        <span className='floating-profile-stat__content--description'>
          {description}
        </span>
      </div>
    </article>
  );
};

export default FloatingProfileStat;
