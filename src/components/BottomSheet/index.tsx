import { FC } from 'react';
import { twMerge } from 'tailwind-merge';

import { IProps } from '@/components/BottomSheet/types';
import { useSwipeable } from 'react-swipeable';

const BottomSheet: FC<IProps> = ({ children, isOpen, handleClose }) => {
  const handlers = useSwipeable({
    onSwipedDown: handleClose,
  });

  return (
    <>
      <div
        onClick={handleClose}
        className={twMerge(
          isOpen ? 'fixed' : 'hidden',
          'bg-primary opacity-[.8] top-0 left-0 right-0 bottom-0 z-[1000]'
        )}
      />
      <div
        {...handlers}
        ref={handlers.ref}
        className={twMerge(
          'transition-transform',
          'text-primary dark:text-dark-white text-xl font-[600]',
          'fixed bottom-0 right-0 z-[1100]',
          `h-fit w-full overflow-x-auto max-h-screen`,
          'bg-white dark:bg-dark-400 px-xmd py-md rounded-t-[20px]',
          isOpen ? 'translate-y-0' : `translate-y-full`
        )}
      >
        <div className="flex items-center justify-center w-full mb-xl">
          <div className="w-[64px] h-[5px] bg-light-gray rounded-[100px]" />
        </div>
        {isOpen ? children : null}
      </div>
    </>
  );
};

export default BottomSheet;
