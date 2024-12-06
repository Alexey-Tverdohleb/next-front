import { FC } from 'react';
import { twMerge } from 'tailwind-merge';

import useToggle from '@/hooks/useToggle/useToggle';
import CalendarIcon from '@/assets/icons/CalendarIcon';
import ModalPopup from '@/components/DateInput/CalendarButton/ModalPopup';
import { ICalendarButton } from '@/components/DateInput/types';
import useScreen from '@/hooks/useScreen';
import SheetPopup from '@/components/DateInput/CalendarButton/SheetPopup';

const CalendarButton: FC<ICalendarButton> = ({ setValue, isDisabled = false, value }) => {
  const [isShow, toggleShow] = useToggle({ initial: false });

  const { isDesktop } = useScreen();

  const onSelect = (value: string) => {
    setValue(value);
    toggleShow();
  };

  const onClickButton = () => {
    if (!isShow && isDisabled) return;

    toggleShow();
  };

  const CalendarElement = isDesktop ? ModalPopup : SheetPopup;

  return (
    <div className="relative">
      <button
        type="button"
        onClick={onClickButton}
        className={twMerge(
          !isDisabled ? 'cursor-pointer' : 'cursor-not-allowed',
          'bg-secondary-blue dark:bg-dark-300 rounded-full',
          'w-[24px] h-[24px]',
          'flex items-center justify-center'
        )}
      >
        <CalendarIcon
          className={twMerge(
            isDisabled
              ? 'text-gray dark:text-dark-200'
              : 'text-primary-blue dark:text-gray-secondary'
          )}
        />
      </button>
      <CalendarElement isOpen={isShow} value={value} onSelect={onSelect} toggleOpen={toggleShow} />
    </div>
  );
};

export default CalendarButton;
