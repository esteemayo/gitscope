'use client';

import Footer from './Footer';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

import GitHubRateLimit from '../ui/GitHubRateLimit';

import SidebarProvider from '@/context/SidebarContext';
import ToasterProvider from '@/providers/ToasterProvider';

import { footerData } from '@/data/footer/footerData.data';

const SharedLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <SidebarProvider>
        <Navbar />
        <Sidebar />
        <ToasterProvider />
        <GitHubRateLimit />
        {children}
        <Footer {...footerData} />
      </SidebarProvider>
    </main>
  );
};

export default SharedLayout;
