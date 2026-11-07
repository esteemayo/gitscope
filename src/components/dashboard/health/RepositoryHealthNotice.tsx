import { AlertCircle } from 'lucide-react';

import '../../../styles/components/dashboard/health/RepositoryHealthNotice.scss';

const RepositoryHealthNotice = () => {
  return (
    <div className='repository-health-notice'>
      <AlertCircle
        size={16}
        strokeWidth={1.8}
        className='repository-health-notice--icon'
        role='img'
        aria-hidden='true'
        focusable='false'
      />

      <span className='repository-health-notice--text'>
        This analysis uses the repositories currently loaded. Some results might
        change when additional repositories are fetched.
      </span>
    </div>
  );
};

export default RepositoryHealthNotice;
