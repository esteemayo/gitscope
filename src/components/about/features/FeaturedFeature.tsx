'use client';

import { motion } from 'framer-motion';

import { FeaturedFeatureProps } from '@/types/about/features/featured.feature.type';
import '../../../styles/components/about/features/FeaturedFeature.scss';

const FeaturedFeature = ({
  feature: { icon, title, description, accentColor, preview },
  variants,
}: FeaturedFeatureProps) => {
  return (
    <motion.article
      variants={variants}
      className='featured-feature'
      style={
        {
          '--accent-color': accentColor,
        } as React.CSSProperties
      }
    >
      <div className='featured-feature__content'>
        <div className='featured-feature__icon'>{icon}</div>

        <h3 className='featured-feature__title'>{title}</h3>

        <p className='featured-feature__description'>{description}</p>

        <ul className='featured-feature__capabilities'>
          <li className='featured-feature__capabilities--item'>
            Repository metrics
          </li>

          <li className='featured-feature__capabilities--item'>
            Contributor insights
          </li>

          <li className='featured-feature__capabilities--item'>
            Language analytics
          </li>

          <li className='featured-feature__capabilities--item'>
            Interactive dashboards
          </li>
        </ul>

        <div className='featured-feature__live-analytics'>
          <span className='featured-feature__live-dot' />
          Live Analytics
        </div>
      </div>

      <div className='featured-feature__preview'>
        <div className='featured-feature__window'>
          <div className='featured-feature__preview-header'>
            <div className='featured-feature__window-actions'>
              {[...Array(3)].map((_, index) => (
                <span key={index} />
              ))}
            </div>

            <span className='featured-feature__preview-title'>
              Repository analytics
            </span>
          </div>

          <div className='featured-feature__preview-body'>{preview}</div>
        </div>
      </div>
    </motion.article>
  );
};

export default FeaturedFeature;
