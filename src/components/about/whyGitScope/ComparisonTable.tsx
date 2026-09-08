'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

import { ComparisonTableProps } from '@/types/about/whyGitScope/comparison.table.type';
import '../../../styles/components/about/whyGitScope/ComparisonTable.scss';

const ComparisonTable = ({ items }: ComparisonTableProps) => {
  return (
    <div className='comparison-table'>
      <div className='comparison-table__header'>
        <span>GitHub</span>

        <span />

        <span>GitScope</span>
      </div>

      <div className='comparison-table__body'>
        {items.map((item, index) => {
          const { id, github, gitScope } = item;

          return (
            <motion.article
              key={id}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: index * 0.07,
                ease: [0.22, 1, 0.36, 1],
              }}
              className='comparison-table__row'
            >
              <div className='comparison-table__github'>{github}</div>

              <div className='comparison-table__arrow'>
                <ArrowRight
                  size={18}
                  strokeWidth={1.8}
                  role='img'
                  aria-hidden='true'
                  focusable='false'
                />
              </div>

              <div className='comparison-table__gitscope'>{gitScope}</div>
            </motion.article>
          );
        })}
      </div>
    </div>
  );
};

export default ComparisonTable;
