'use clinet';

import { useEffect, useRef, useState } from 'react';
import { LucideProps } from 'lucide-react';
import { animate, motion, useInView } from 'framer-motion';

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
  const ref = useRef<HTMLDivElement | null>(null);

  const isInView = useInView(ref, {
    once: true,
    margin: '-50px',
  });

  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const controls = animate(0, value ?? 0, {
      duration: 1.1,
      ease: 'easeOut',
      onUpdate(latest) {
        setCount(Math.floor(latest));
      },
    });

    return () => controls.cancel();
  }, [isInView, value]);

  return (
    <motion.article
      ref={ref}
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
          {count.toLocaleString()}
        </strong>

        <span className='profile-metric__content--label'>{label}</span>
      </div>
    </motion.article>
  );
};

export default ProfileStatsCard;
