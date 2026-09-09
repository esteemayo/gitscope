import DocsLayout from '@/components/layout/DocsLayout';

const DocumentLayout = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return <DocsLayout>{children}</DocsLayout>;
};

export default DocumentLayout;
