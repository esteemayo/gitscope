'use client';

import { motion } from 'framer-motion';

import PrivacySectionHeader from '../PrivacySectionHeader';
import CollectionCategory from './CollectionCategory';
import InformationIllustration from './InformationIllustration';

import { containerVariants } from '@/animations/page';
import { InformationCollectedProps } from '@/types/privacy/information/information.collected.type';

import '../../../styles/components/privacy/information/InformationCollected.scss';

const InformationCollected = ({
  badge,
  title,
  subtitle,
  stats,
  categories,
}: InformationCollectedProps) => {
  return (
    <motion.section
      variants={containerVariants}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}
      className='information-collected'
      aria-labelledby='information-collected-title'
    >
      <div className='information-collected__container'>
        <PrivacySectionHeader
          id='information-collected-title'
          badge={badge}
          title={title}
          subtitle={subtitle}
          variants={containerVariants}
        />

        <div className='information-collected__wrapper'>
          <aside className='information-collected__sidebar'>
            <div className='information-collected__summary'>
              <div className='information-collected__illustration'>
                <InformationIllustration />
              </div>

              <ul className='information-collected__stats'>
                {stats.map((stat) => {
                  const { id, label, value } = stat;

                  return (
                    <li key={id} className='information-collected__stat'>
                      <span className='information-collected__stat--value'>
                        {value}
                      </span>

                      <span className='information-collected__stat--label'>
                        {label}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </aside>

          <div className='information-collected__categories'>
            {categories.map((category) => (
              <CollectionCategory key={category.id} {...category} />
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default InformationCollected;
