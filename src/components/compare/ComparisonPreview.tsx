import UserBadge from '../ui/UserBadge';
import { ComparisonPreviewProps } from '@/types/compare/comparison.preview.type';

import '../../styles/components/ComparisonPreview.scss';

const ComparisonPreview = ({ userA, userB }: ComparisonPreviewProps) => {
  return (
    <div className='comparison-preview'>
      <UserBadge user={userA} />

      <span className='comparison-preview__versus'>Vs</span>

      <UserBadge user={userB} />
    </div>
  );
};

export default ComparisonPreview;
