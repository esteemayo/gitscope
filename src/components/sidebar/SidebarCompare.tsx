import Link from 'next/link';
import { GitCompareIcon } from 'lucide-react';

import '../../styles/components/sidebar/SidebarCompare.scss';

const SidebarCompare = ({ onClose }: { onClose(): void }) => {
  return (
    <section onClick={onClose} className='sidebar-compare'>
      <Link href='/compare' className='sidebar-compare__link'>
        <GitCompareIcon size={20} />

        <div className='sidebar-compare__wrapper'>
          <h4 className='sidebar-compare__wrapper--heading'>
            Compare profiles
          </h4>

          <p className='sidebar-compare__wrapper--description'>
            Compare repositories, stars and languages.
          </p>
        </div>
      </Link>
    </section>
  );
};

export default SidebarCompare;
