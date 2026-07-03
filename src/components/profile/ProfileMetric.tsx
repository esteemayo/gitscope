'use clinet';

import { motion } from 'framer-motion';
import { LucideProps } from 'lucide-react';

import Counter from '../ui/Counter';
import { fadeUpVariants } from '@/animations/fade';

import '../../styles/components/profile/ProfileMetric.scss';

interface ProfileStatsCardProps {
  icon: React.ForwardRefExoticComponent<
    Omit<LucideProps, 'ref'> & React.RefAttributes<SVGSVGElement>
  >;
  label: string;
  value: number;
  index: number;
}

const ProfileStatsCard = ({
  icon: Icon,
  label,
  value,
  index,
}: ProfileStatsCardProps) => {
  return (
    <motion.article
      variants={fadeUpVariants}
      transition={{ delay: index * 0.08 }}
      whileHover={{ y: -6, scale: 1.02 }}
      className='profile-metric'
    >
      <div className='profile-metric__icon' aria-hidden='true'>
        <Icon size={20} />
      </div>

      <div className='profile-metric__content'>
        <strong className='profile-metric__content--value'>
          <Counter value={value} />
        </strong>

        <span className='profile-metric__content--label'>{label}</span>
      </div>
    </motion.article>
  );
};

export default ProfileStatsCard;
