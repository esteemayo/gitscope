'use client';

import { Activity, ArrowUpRight } from 'lucide-react';
import clsx from 'clsx';
import { motion, useReducedMotion } from 'framer-motion';
import Link from 'next/link';

import { FooterProps } from '@/types/layout/footer/footer.type';
import '../../styles/components/Footer.scss';

const Footer = ({
  brandName,
  description,
  columns,
  socialLinks,
  copyright,
  status,
  designedText,
  className,
  style,
}: FooterProps) => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <footer className={clsx('footer', className)} style={style}>
      <div className='footer__container'>
        <div className='footer__main'>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={
              prefersReducedMotion
                ? { duration: 0 }
                : { delay: 0.2, duration: 0.25, ease: 'easeIn' }
            }
            className='footer__brand'
          >
            <Link
              href='/'
              className='footer__logo'
              aria-label={`${brandName} home`}
            >
              <span className='footer__logo--mark'>
                <Activity
                  size={18}
                  role='img'
                  aria-hidden='true'
                  focusable='false'
                />
              </span>

              <span className='footer__logo--brand-name'>{brandName}</span>
            </Link>

            <p className='footer__description'>{description}</p>
          </motion.div>

          <div className='footer__columns'>
            {columns.map((column) => {
              const { id, title, links } = column;

              return (
                <div key={id} className='footer__column'>
                  <h2 className='footer__column-title'>{title}</h2>

                  <ul className='footer__lists'>
                    {links.map((link) => {
                      const { label, href, external } = link;

                      return (
                        <li key={href} className='footer__item'>
                          <a
                            href={href}
                            target={external ? '_blank' : undefined}
                            rel={external ? 'noopener noreferrer' : undefined}
                            className='footer__item--link'
                          >
                            <span>{label}</span>

                            {external && (
                              <ArrowUpRight
                                size={13}
                                role='img'
                                aria-hidden='true'
                                focusable='false'
                              />
                            )}
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>

        <div className='footer__bottom'>
          <div className='footer__meta'>
            <p className='footer__copyright'>{copyright}</p>

            {status && status.label && status.href && (
              <a href={status.href} className='footer__status'>
                <span className='footer__status--dot' aria-hidden='true' />

                <span className='footer__status--label'>{status.label}</span>
              </a>
            )}

            <nav className='footer__social' aria-label='Social links'>
              {socialLinks.map((social) => {
                const { id, href, label, icon: Icon } = social;

                return (
                  <a
                    key={id}
                    href={href}
                    target='_blank'
                    rel='noopener noreferrer'
                    aria-label={label}
                  >
                    <Icon
                      size={16}
                      role='img'
                      aria-hidden='true'
                      focusable='false'
                    />
                  </a>
                );
              })}
            </nav>
          </div>

          {designedText && <p className='footer__designed'>{designedText}</p>}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
