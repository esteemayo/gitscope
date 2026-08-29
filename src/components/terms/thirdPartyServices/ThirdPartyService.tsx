'use client';

import clsx from 'clsx';
import { motion } from 'framer-motion';

import { ThirdPartyServiceProps } from '@/types/terms/thirdPartyServices/third.party.service.type';
import '../../../styles/components/terms/thirdPartyServices/ThirdPartyService.scss';

const ThirdPartyService = ({
  name,
  category,
  purpose,
  description,
  icon: Icon,
  accentColor,
  status,
  index,
  className,
  style,
}: ThirdPartyServiceProps) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.35,
        delay: index * 0.06,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={clsx('third-party-service', className)}
      style={
        {
          '--accent-color': accentColor,
          ...style,
        } as React.CSSProperties
      }
    >
      <header className='third-party-service__top'>
        <div className='third-party-service__top--icon'>
          <Icon
            size={18}
            strokeWidth={1.8}
            role='img'
            aria-hidden='true'
            focusable='false'
          />
        </div>

        <span className='third-party-service__top--status'>{status}</span>
      </header>

      <div className='third-party-service__body'>
        <span className='third-party-service__body--category'>{category}</span>

        <h4 className='third-party-service__body--name'>{name}</h4>

        <p className='third-party-service__body--description'>{description}</p>
      </div>

      <div className='third-party-service__purpose'>
        <span className='third-party-service__purpose--label'>Purpose</span>

        <strong className='third-party-service__purpose--value'>
          {purpose}
        </strong>
      </div>
    </motion.article>
  );
};

export default ThirdPartyService;
