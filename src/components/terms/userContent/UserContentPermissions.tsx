'use client';

import UserContentPermission from './UserContentPermission';
import { UserContentPermissionsProps } from '@/types/terms/userContent/user.content.permissions.type';

import '../../../styles/components/terms/userContent/UserContentPermissions.scss';

const UserContentPermissions = ({ items }: UserContentPermissionsProps) => {
  return (
    <section
      className='user-content-permissions'
      aria-labelledby='user-content-permissions-title'
    >
      <div className='user-content-permissions__side'>
        <span className='user-content-permissions__side--label'>
          Service permissions
        </span>

        <h3
          id='user-content-permissions-title'
          className='user-content-permissions__side--title'
        >
          What GitScope needs to do with your content
        </h3>

        <p className='user-content-permissions__side--description'>
          These permissions are tied to providing and operating the requested
          GitScope functionality.
        </p>
      </div>

      <div className='user-content-permissions__list'>
        {items.map((item, index) => (
          <UserContentPermission key={item.id} {...item} index={index} />
        ))}
      </div>
    </section>
  );
};

export default UserContentPermissions;
