import { signIn } from 'next-auth/react';
import { motion } from 'framer-motion';
import { CheckCircle2, Lock } from 'lucide-react';

import GitHubLogoIcon from '../icons/GitHubLogoIcon';
import { AuthModalProps } from '@/types/auth/auth.modal.type';

import '../../styles/components/auth/AuthModal.scss';

const containerVariants = {
  animate: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  initial: {
    opacity: 0,
    y: 10,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.25,
    },
  },
};

const AuthModal = ({
  icon,
  title,
  description,
  features,
  onBack,
}: AuthModalProps) => {
  return (
    <motion.div
      variants={containerVariants}
      initial='initial'
      animate='animate'
      className='auth-modal'
    >
      <div className='auth-modal__container'>
        <motion.div variants={itemVariants} className='auth-modal__icon'>
          {icon ?? <Lock size={28} />}
        </motion.div>

        <div className='auth-modal__content'>
          <motion.h2
            variants={itemVariants}
            className='auth-modal__content--heading'
          >
            {title}
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className='auth-modal__content--description'
          >
            {description}
          </motion.p>
        </div>

        <motion.div variants={itemVariants} className='auth-modal__features'>
          {features?.map((feature) => (
            <motion.div
              key={feature}
              variants={itemVariants}
              className='auth-modal__features--item'
            >
              <CheckCircle2 size={18} />

              <span>{feature}</span>
            </motion.div>
          ))}
        </motion.div>

        <div className='auth-modal__footer'>
          <div className='auth-modal__actions'>
            <motion.button
              type='button'
              variants={itemVariants}
              onClick={() =>
                signIn('github', {
                  callbackUrl: window.location.href,
                })
              }
              className='auth-modal__actions--signin'
            >
              <GitHubLogoIcon />

              <span>Continue with GitHub</span>
            </motion.button>

            {onBack && (
              <motion.button
                type='button'
                variants={itemVariants}
                onClick={onBack}
                className='auth-modal__actions--back'
              >
                Go Back
              </motion.button>
            )}
          </div>

          <motion.small
            variants={itemVariants}
            className='auth-modal__footer--info'
          >
            Secure OAuth authentication via GitHub
          </motion.small>
        </div>
      </div>
    </motion.div>
  );
};

export default AuthModal;
