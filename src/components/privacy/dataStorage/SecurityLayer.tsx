'use client';

import clsx from 'clsx';
import { SecurityLayerProps } from '@/types/privacy/dataStorageSecurity/security.layer.type';

import '../../../styles/components/privacy/dataStorage/SecurityLayer.scss';

const SecurityLayer = ({
  title,
  description,
  icon: Icon,
  accentColor,
  className,
  style,
}: SecurityLayerProps) => {
  return (
    <article
      className={clsx('security-layer', className)}
      style={
        {
          '--accent-color': accentColor,
          ...style,
        } as React.CSSProperties
      }
    >
      <div className='security-layer__icon'>
        <Icon size={30} role='img' aria-hidden='true' focusable='false' />
      </div>

      <div className='security-layer__content'>
        <h4 className='security-layer__content--title'>{title}</h4>

        <p className='security-layer__content--description'>{description}</p>
      </div>

      <div className='security-layer__connector' aria-hidden='true' />
    </article>
  );
};

export default SecurityLayer;
