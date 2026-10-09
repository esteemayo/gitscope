'use client';

import { SavedHeadingProps } from '@/types/saved/saved.heading.type';
import '../../styles/components/saved/SavedHeading.scss';

const SavedHeading = ({
  title,
  description,
  icon: Icon,
}: SavedHeadingProps) => {
  return (
    <div className='saved-heading'>
      <div className='saved-heading__title'>
        <Icon
          size={16}
          strokeWidth={1.8}
          role='img'
          aria-hidden='true'
          focusable='false'
        />

        <h2>{title}</h2>
      </div>

      <p className='saved-heading__description'>{description}</p>
    </div>
  );
};

export default SavedHeading;
