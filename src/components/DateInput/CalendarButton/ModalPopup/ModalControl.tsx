import { FC } from 'react';
import { twMerge } from 'tailwind-merge';

import ChevronLeftIcon from '@/assets/icons/ChevronLeftIcon';
import ChevronRightIcon from '@/assets/icons/ChevronRightIcon';
import { IControl } from '@/components/DateInput/types';

const ModalControl: FC<IControl> = ({ isNextDisabled, isPrevDisabled, toPrevPage, toNextPage }) => {
  return (
    <div className="flex items-center justify-center">
      <button
        disabled={isPrevDisabled}
        type="button"
        className={twMerge('mr-xl outline-0', isPrevDisabled ? 'cursor-default' : 'cursor-pointer')}
        onClick={toPrevPage}
      >
        <ChevronLeftIcon
          className={twMerge(isPrevDisabled ? 'text-gray-secondary' : 'text-primary-blue')}
        />
      </button>
      <button
        disabled={isNextDisabled}
        type="button"
        className={twMerge(isNextDisabled ? 'cursor-default' : 'cursor-pointer')}
        onClick={toNextPage}
      >
        <ChevronRightIcon
          className={twMerge(isNextDisabled ? 'text-gray-secondary' : 'text-primary-blue')}
        />
      </button>
    </div>
  );
};

export default ModalControl;
