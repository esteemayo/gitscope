'use client';

import { motion, Variants } from 'framer-motion';
import { AboutMissionProps } from '@/types/about/about.mission.type';

import '../../styles/components/about/AboutMission.scss';

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: 'easeOut',
    },
  },
};

const AboutMission = ({
  badge,
  title,
  description,
  principles,
  timeline,
}: AboutMissionProps) => {
  return (
    <section className='about-mission' aria-labelledby='about-mission-title'>
      <div className='about-mission__container'>
        <motion.div
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.2 }}
          className='about-mission__wrapper'
        >
          <motion.div
            variants={itemVariants}
            className='about-mission__illustration'
          >
            <div className='about-mission__dashboard'>
              <div className='about-mission__dashboard-header'>
                <div className='about-mission__window-controls'>
                  {[...Array(3)].map((_, index) => (
                    <span key={index} />
                  ))}
                </div>

                <div className='about-mission__dashboard-title'>
                  GitScope Analytics
                </div>

                <div className='about-mission__status'>Live</div>
              </div>

              <div className='about-mission__dashboard-body'>
                <div className='about-mission__chart-card'>
                  <div className='about-mission__chart-header'>
                    <small>Repository activity</small>

                    <h4>Contribution trend</h4>
                  </div>

                  <span className='about-mission__success-badge'>+24%</span>

                  <div className='about-mission__chart'>
                    <span className='about-mission__bar' />
                    <span className='about-mission__bar' />
                    <span className='about-mission__bar' />
                    <span className='about-mission__bar' />
                    <span className='about-mission__bar' />
                    <span className='about-mission__bar' />
                    <span className='about-mission__bar' />
                    <span className='about-mission__bar' />
                  </div>
                </div>

                <div className='about-mission__metrics'>
                  <div className='about-mission__metric-card'>
                    <small>Repositories</small>

                    <strong>128</strong>

                    <span>Active projects</span>
                  </div>

                  <div className='about-mission__metric-card'>
                    <small>Stars</small>

                    <strong>9.8k</strong>

                    <span>Community growth</span>
                  </div>
                </div>

                <div className='about-mission__health-card'>
                  <div className='about-mission__card-header'>
                    <h4>Repository health</h4>

                    <span>Excellent</span>
                  </div>

                  <div className='about-mission__progress-group'>
                    <div className='about-mission__progress-item'>
                      <small>Code quality</small>

                      <div className='about-mission__progress'>
                        <span style={{ width: '92%' }} />
                      </div>
                    </div>

                    <div className='about-mission__progress-item'>
                      <small>Documentation</small>

                      <div className='about-mission__progress'>
                        <span style={{ width: '84%' }} />
                      </div>
                    </div>

                    <div className='about-mission__progress-item'>
                      <small>Activity</small>

                      <div className='about-mission__progress'>
                        <span style={{ width: '97%' }} />
                      </div>
                    </div>
                  </div>

                  <div className='about-mission__live-chip'>
                    <span className='about-mission__dot' />
                    Live GitHub Data
                  </div>

                  <div className='about-mission__health-chip'>
                    Repository health
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className='about-mission__content'
          >
            <span className='about-mission__badge'>{badge}</span>

            <h2 id='about-mission-title' className='about-mission__title'>
              {title}
            </h2>

            <p className='about-mission__description'>{description}</p>

            <div className='about-mission__highlight'>
              <div className='about-mission__highlight-indicator' />

              <div>
                <h3>More than charts.</h3>

                <p>
                  GitScope transform raw GitHub repository data into meaningful
                  insights that help developers understand projects, identify
                  trends and make informed decisions with confidence.
                </p>
              </div>
            </div>

            <div className='about-mission__principles'>
              {principles.map((principle) => {
                const {
                  id,
                  icon: Icon,
                  title,
                  description,
                  accentColor,
                } = principle;

                return (
                  <motion.article
                    key={id}
                    variants={itemVariants}
                    whileHover={{ y: -6 }}
                    transition={{
                      duration: 0.25,
                      ease: [0.645, 0.045, 0.355, 1] as const,
                    }}
                    className='about-mission__principle-card'
                    style={
                      {
                        '--accent-color': accentColor,
                      } as React.CSSProperties
                    }
                  >
                    <div className='about-mission__principle-icon'>
                      <Icon size={24} />
                    </div>

                    <div className='about-mission__principle-content'>
                      <h3>{title}</h3>

                      <p>{description}</p>
                    </div>
                  </motion.article>
                );
              })}
            </div>

            <motion.div
              variants={itemVariants}
              className='about-mission__timeline-section'
            >
              <div className='about-mission__timeline-header'>
                <span>How GitScope Works</span>

                <h3>From GitHub repositories to meaningful insights.</h3>

                <p>
                  GitScope follows a streamlined workflow that transforms raw
                  repository information into visual analytics, helping
                  developers understand projects faster.
                </p>
              </div>

              <div className='about-mission__timeline'>
                {timeline.map((step, index) => {
                  const {
                    id,
                    icon: Icon,
                    title,
                    description,
                    accentColor,
                  } = step;

                  return (
                    <motion.div
                      key={id}
                      variants={itemVariants}
                      className='about-mission__timeline-item'
                      style={
                        {
                          '--accent-color': accentColor,
                        } as React.CSSProperties
                      }
                    >
                      <div className='about-mission__node'>
                        <div className='about-mission__node--icon'>
                          <Icon size={22} />
                        </div>

                        {index < timeline.length - 1 && (
                          <span className='about-mission__node--connector'>
                            <span className='about-mission__node--connector-pulse' />
                          </span>
                        )}
                      </div>

                      <div className='about-mission__timeline-content'>
                        <h4>{title}</h4>

                        <p>{description}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMission;
