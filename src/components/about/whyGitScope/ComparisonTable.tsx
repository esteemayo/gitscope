'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

import { ComparisonTableProps } from '@/types/about/whyGitScope/comparison.table.type';
import '../../../styles/components/about/whyGitScope/ComparisonTable.scss';

const ComparisonTable = ({ items, variants }: ComparisonTableProps) => {
  return (
    <motion.div variants={variants} className='comparison-table'>
      <div className='comparison-table__header'>
        <span>GitHub</span>

        <span />

        <span>GitScope</span>
      </div>

      <div className='comparison-table__body'>
        {items.map((item) => {
          const { id, github, gitScope } = item;

          return (
            <motion.article
              key={id}
              variants={variants}
              className='comparison-table__row'
            >
              <div className='comparison-table__github'>{github}</div>

              <div className='comparison-table__arrow'>
                <ArrowRight size={18} />
              </div>

              <div className='comparison-table__gitscope'>{gitScope}</div>
            </motion.article>
          );
        })}
      </div>
    </motion.div>
  );
};

export default ComparisonTable;
