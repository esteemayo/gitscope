'use clinet';

import { motion } from 'framer-motion';
import { LucideProps } from 'lucide-react';

import '../../styles/components/profile/ProfileStatsCard.scss';

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
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08 }}
      whileHover={{ y: -4 }}
      className='profile-stats-card'
    >
      <div className='profile-stats-card__icon' aria-hidden='true'>
        <Icon size={20} />
      </div>

      <div className='profile-stats-card__content'>
        <strong className='profile-stats-card__content--value'>
          {value.toLocaleString()}
        </strong>

        <span className='profile-stats-card__content--label'>{label}</span>
      </div>
    </motion.article>
  );
};

export default ProfileStatsCard;
