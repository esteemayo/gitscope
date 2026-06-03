'use client';

import millify from 'millify';
import { ProfileStatChipProps } from '@/types/compare/profile.stat.chip.type';

import '../../styles/components/ProfileStatChip.scss';

const ProfileStatChip = ({ label, value }: ProfileStatChipProps) => {
  return (
    <div className='profile-stat-chip'>
      <span className='profile-stat-chip__value'>{millify(value)}</span>

      <small className='profile-stat-chip__label'>{label}</small>
    </div>
  );
};

export default ProfileStatChip;
