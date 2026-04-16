import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';

export default function AppLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <main>
      <Navbar />
      {children}
      <Footer />
    </main>
  );
};
