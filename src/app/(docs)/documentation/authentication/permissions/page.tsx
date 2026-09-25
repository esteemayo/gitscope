import type { Metadata } from 'next';
import PermissionsClient from '@/components/docs/authentication/PermissionsClient';

export const metadata: Metadata = {
  title: 'Permissions - Authentication | GitScope Documentation',
  description:
    'Understand how GitHub permissions control the data and account capabilities available to authenticated GitScope features.',
};

const PermissionsPage = () => {
  return <PermissionsClient />;
};

export default PermissionsPage;
