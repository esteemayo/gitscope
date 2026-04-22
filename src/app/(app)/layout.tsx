import SharedLayout from '@/components/layout/SharedLayout';

export default function AppLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <SharedLayout>{children}</SharedLayout>;
};
