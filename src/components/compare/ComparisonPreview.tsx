import UserBadge from '../ui/UserBadge';
import { ComparisonPreviewProps } from '@/types/compare/comparison.preview.type';

import '../../styles/components/ComparisonPreview.scss';

const ComparisonPreview = ({ userA, userB }: ComparisonPreviewProps) => {
  return (
    <div className='comparison-preview'>
      <div className='comparison-preview__container'>
        <UserBadge user={userA} />

        <span
          className='comparison-preview__container--versus'
          aria-label='versus'
        >
          Vs
        </span>

        <UserBadge user={userB} />
      </div>
    </div>
  );
};

export default ComparisonPreview;
