export interface DocsArticleProps {
  title: string;
  description: string;
  category: string;
  children: React.ReactNode;
  previous?: {
    title: string;
    href: string;
  };
  next?: {
    title: string;
    href: string;
  };
}
