import millify from 'millify';

import { ComparePreviewProps } from '@/types/about/features/previews/compare.preview.type';
import '../../../../styles/components/about/features/previews/ComparePreview.scss';

const ComparePreview = ({
  leftUser,
  rightUser,
  leftStars,
  rightStars,
}: ComparePreviewProps) => {
  const total = leftStars + rightStars;

  const leftPercentage = (leftStars / total) * 100;
  const rightPercentage = (rightStars / total) * 100;

  const winner = leftStars >= rightStars ? 'left' : 'right';

  return (
    <div className='compare-preview'>
      <div className='compare-preview__profiles'>
        <div
          className={
            winner === 'left'
              ? 'compare-preview__profile winner'
              : 'compare-preview__profile'
          }
        >
          <div className='compare-preview__avatar' />

          <span className='compare-preview__username'>{leftUser}</span>

          <strong className='compare-preview__metric'>
            {millify(leftStars)}
          </strong>
        </div>

        <div className='compare-preview__compare'>Vs</div>

        <div
          className={
            winner === 'right'
              ? 'compare-preview__profile winner'
              : 'compare-preview__profile'
          }
        >
          <div className='compare-preview__avatar' />

          <span className='compare-preview__username'>{rightUser}</span>

          <strong className='compare-preview__metric'>
            {millify(rightStars)}
          </strong>
        </div>
      </div>

      <div className='compare-preview__comparison-bar'>
        <div className='compare-preview__left-track'>
          <span
            className='compare-preview__left-bar'
            style={{ width: `${leftPercentage}%` }}
          />
        </div>

        <div className='compare-preview__divider' />

        <div className='compare-preview__right-track'>
          <span
            className='compare-preview__right-bar'
            style={{ width: `${rightPercentage}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default ComparePreview;
