'use client';

import Footer from './Footer';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

import GitHubRateLimit from '../ui/GitHubRateLimit';

import SidebarProvider from '@/context/SidebarContext';
import ToasterProvider from '@/providers/ToasterProvider';

import { footerData } from '@/data/footer/footerData.data';

import '../../styles/components/SharedLayout.scss';

const SharedLayout = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div className='shared-layout'>
      <SidebarProvider>
        <Navbar />
        <Sidebar />
        <ToasterProvider />
        <GitHubRateLimit />
        <main className='shared-layout__body'>{children}</main>
        <Footer {...footerData} />
      </SidebarProvider>
    </div>
  );
};

export default SharedLayout;
