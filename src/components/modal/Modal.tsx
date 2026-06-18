import XmarkIcon from '../icons/XmarkIcon';
import '../../styles/components/modal/Modal.scss';

const Modal = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='modal'>
      <div className='modal__backdrop'>
        <div className='modal__container'>
          <div className='modal__wrapper'>
            <div className='modal__body'>{children}</div>

            <div className='modal__close'>
              <button type='button' className='modal__close--btn'>
                <XmarkIcon />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
