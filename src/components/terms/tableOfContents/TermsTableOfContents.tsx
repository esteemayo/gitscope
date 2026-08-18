'use client';

import clsx from 'clsx';
import { motion } from 'framer-motion';

import TermsSectionHeader from '../TermsSectionHeader';
import TermsTableOfContentItem from './TermsTableOfContentsItem';

import { containerVariants } from '@/animations/page';
import { TermsTableOfContentsProps } from '@/types/terms/tableOfContents/terms.table.of.contents.type';

import '../../../styles/components/terms/tableOfContents/TermsTableOfContents.scss';

const TermsTableOfContents = ({
  badge,
  title,
  description,
  headerIcon,
  items,
  className,
  style,
}: TermsTableOfContentsProps) => {
  return (
    <motion.section
      variants={containerVariants}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}
      className={clsx('terms-table-of-contents', className)}
      style={style}
      aria-labelledby='acceptance-of-terms'
    >
      <div className='terms-table-of-contents__container'>
        <TermsSectionHeader
          id='acceptance-of-terms'
          badge={badge}
          title={title}
          description={description}
          icon={headerIcon}
          variants={containerVariants}
        />

        <nav
          className='terms-table-of-contents__navigation'
          aria-label='Terms of Service sections'
        >
          <ol className='terms-table-of-contents__list'>
            {items.map((item, index) => (
              <motion.li
                key={item.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.025,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className='terms-table-of-contents__item'
              >
                <TermsTableOfContentItem {...item} count={index + 1} />
              </motion.li>
            ))}
          </ol>
        </nav>
      </div>
    </motion.section>
  );
};

export default TermsTableOfContents;
