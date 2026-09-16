'use client';

import DocsPagination from './DocsPagination';
import DocsBreadcrumbs from './DocsBreadcrumbs';

import { DocsArticleProps } from '@/types/docs/article/docs.article.type';
import '../../styles/components/docs/DocsArticle.scss';

const DocsArticle = ({
  title,
  description,
  category,
  children,
  previous,
  next,
}: DocsArticleProps) => {
  return (
    <article className='docs-article'>
      <DocsBreadcrumbs category={category} title={title} />

      <header className='docs-article__header'>
        <span className='docs-article__header--category'>{category}</span>

        <h1 className='docs-article__header--title'>{title}</h1>

        <p className='docs-article__header--description'>{description}</p>
      </header>

      {/* DocsTableOfContents */}

      <div className='docs-article__content'>{children}</div>

      <DocsPagination previous={previous} next={next} />
    </article>
  );
};

export default DocsArticle;
