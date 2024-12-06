import { FC } from 'react';
import { twMerge } from 'tailwind-merge';

import { IModal } from '@/components/DateInput/types';
import ModalContent from '@/components/DateInput/CalendarButton/ModalPopup/ModalContent';

const ModalPopup: FC<IModal> = ({ onSelect, isOpen, value, toggleOpen }) => {
  const handleClose = () => {
    if (!isOpen) return;

    toggleOpen();
  };

  if (!isOpen) return null;

  return (
    <>
      <div
        onClick={handleClose}
        className={twMerge(
          'top-0 bottom-0 left-0 right-0 w-screen h-screen',
          isOpen ? 'fixed' : 'hidden'
        )}
      />
      <div
        className={twMerge(
          'w-[270px] p-xl',
          'bg-white dark:bg-dark-300 rounded-[8px] border-[1px] border-gray-divider dark:border-dark-200',
          'absolute z-50 right-1/2 desktop:left-1/2 top-[40px]',
          'flex justify-center items-center flex-col',
          'drop-shadow-md'
        )}
      >
        <ModalContent onSelect={onSelect} value={value} />
      </div>
    </>
  );
};

export default ModalPopup;
