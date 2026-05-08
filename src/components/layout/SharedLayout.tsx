'use client';

import Footer from './Footer';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

import Corner from '../ui/Corner';
import RateLimit from '../ui/RateLimit';

import SidebarProvider from '@/context/SidebarContext';
import ToasterProvider from '@/providers/ToasterProvider';

const SharedLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <SidebarProvider>
        <Navbar />
        <Sidebar />
        <ToasterProvider />
        <RateLimit />
        <Corner />
        {children}
        <Footer />
      </SidebarProvider>
    </main>
  );
};

export default SharedLayout;
