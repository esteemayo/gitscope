import DocsRootLayout from '@/components/layout/DocsRootLayout';

const DocumentLayout = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return <DocsRootLayout>{children}</DocsRootLayout>;
};

export default DocumentLayout;
