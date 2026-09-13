'use client';

import clsx from 'clsx';
import { DocsHomeSectionProps } from '@/types/docs/docsCard/docs.home.section.type';

import '../../../styles/components/docs/home/DocsHomeSection.scss';

const DocsHomeSection = ({
  id,
  label,
  title,
  description,
  className,
  style,
  children,
}: DocsHomeSectionProps) => {
  return (
    <section
      id={id}
      className={clsx('docs-home-section', {
        'docs-home-section__compact': className,
      })}
      style={style}
    >
      <div className='docs-home-section__heading'>
        <span className='docs-home-section__heading--label'>{label}</span>

        <h2 className='docs-home-section__heading--title'>{title}</h2>

        <p className='docs-home-section__heading--description'>{description}</p>
      </div>

      {children}
    </section>
  );
};

export default DocsHomeSection;
