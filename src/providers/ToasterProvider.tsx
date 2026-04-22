'use client';

import { Toaster } from 'react-hot-toast';

const ToasterProvider = () => {
  return (
    <Toaster
      position='bottom-right'
      toastOptions={{ duration: 3 }}
    />
  );
};

export default ToasterProvider;
