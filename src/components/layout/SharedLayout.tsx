'use client';

import Footer from './Footer';
import Navbar from './Navbar';

import ToasterProvider from '@/providers/ToasterProvider';

const SharedLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <Navbar />
      <ToasterProvider />
      {children}
      <Footer />
    </main>
  );
};

export default SharedLayout;
