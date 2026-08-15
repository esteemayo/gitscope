'use client';

import { motion } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';

import SecurityOverviewItem from './SecurityOverviewItem';
import { SecurityOverviewProps } from '@/types/privacy/dataStorageSecurity/security.overview.type';

import '../../../styles/components/privacy/dataStorage/SecurityOverview.scss';

const SecurityOverview = ({ items, trustItems }: SecurityOverviewProps) => {
  return (
    <motion.aside
      initial={{ opacity: 0, x: -24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className='security-overview'
    >
      <header className='security-overview__header'>
        <span className='security-overview__header--badge'>
          Security Status
        </span>

        <h3 className='security-overview__header--title'>Secure by Design</h3>

        <p className='security-overview__header--subtitle'>
          GitScope applies multiple layers of protection to help secure your
          information while keeping GitHub access limited to the minimum
          required permissions.
        </p>
      </header>

      <ul className='security-overview__list'>
        {items.map((item) => (
          <li key={item.id}>
            <SecurityOverviewItem {...item} />
          </li>
        ))}
      </ul>

      <footer className='security-overview__footer'>
        {trustItems.map((item) => {
          const { id, label } = item;

          return (
            <div key={id} className='security-overview__trust'>
              <ShieldCheck
                size={16}
                className='security-overview__trust--icon'
                role='img'
                aria-hidden='true'
                focusable='false'
              />

              <span className='security-overview__trust--label'>{label}</span>
            </div>
          );
        })}
      </footer>
    </motion.aside>
  );
};

export default SecurityOverview;
