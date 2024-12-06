import { FC } from 'react';
import { twMerge } from 'tailwind-merge';

import { IProps } from '@/components/Modal/types';

const Modal: FC<IProps> = ({ children, isShown, onClose }) => {
  if (!isShown) return null;

  return (
    <>
      <div
        onClick={onClose}
        className={twMerge(
          'fixed',
          'bg-primary opacity-[.8]',
          'top-0 left-0 right-0 bottom-0 z-[1000]'
        )}
      />
      <div
        className={twMerge(
          'text-primary dark:text-dark-white text-xl font-[600]',
          'fixed top-1/2 left-1/2 z-50 translate-x-[-50%] translate-y-[-50%] z-[1100]'
        )}
      >
        {children}
      </div>
    </>
  );
};

export default Modal;
