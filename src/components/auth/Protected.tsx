'use client';

import { useSession } from 'next-auth/react';

import Modal from '../modal/Modal';
import { ProtectedProps } from '@/types/auth/protected.type';

const Protected = ({ fallback, children }: ProtectedProps) => {
  const { status } = useSession();

  const isAuthenticated = status === 'authenticated';

  return (
    <div style={{ minHeight: '100vh' }}>
      {!isAuthenticated ? <Modal isOpen>{fallback}</Modal> : children}
    </div>
  );
};

export default Protected;
