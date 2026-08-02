import { PermissionOverviewProps } from '@/types/privacy/permissions/permission.overview.type';
import '../../../styles/components/privacy/permissions/PermissionOverview.scss';

const PermissionOverview = ({ items }: PermissionOverviewProps) => {
  return (
    <div className='permission-overview'>
      <div className='permission-overview__'>PermissionOverview</div>
    </div>
  );
};

export default PermissionOverview;
