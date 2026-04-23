'use client';

import Footer from './Footer';
import Navbar from './Navbar';

import Corner from '../ui/Corner';
import RateLimit from '../ui/RateLimit';

import ToasterProvider from '@/providers/ToasterProvider';

const SharedLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <Navbar />
      <ToasterProvider />
      <RateLimit />
      <Corner />
      {children}
      <Footer />
    </main>
  );
};

export default SharedLayout;
