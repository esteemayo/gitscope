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
        {items.map((item) => {
          const { id, github, gitScope } = item;

          return (
            <article key={id} className='comparison-table__row'>
              <div className='comparison-table__github'>{github}</div>

              <div className='comparison-table__arrow'>
                <ArrowRight size={18} />
              </div>

              <div className='comparison-table__gitscope'>{gitScope}</div>
            </article>
          );
        })}
      </div>
    </div>
  );
};

export default ComparisonTable;
