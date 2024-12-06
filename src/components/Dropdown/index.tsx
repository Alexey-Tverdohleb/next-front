import { FC, useRef } from 'react';
import { useClickAway } from 'react-use';
import { twMerge } from 'tailwind-merge';

import { IProps } from '@/components/Dropdown/types';
import { TOption } from '@/types/common';
import { DEFAULT_VALUE } from '@/components/Dropdown/defaultValue';
import { noop } from '@/helpers/common';
import useToggle from '@/hooks/useToggle/useToggle';
import DownIcon from '@/assets/icons/DownIcon';
import UpIcon from '@/assets/icons/UpIcon';

const Dropdown: FC<IProps> = ({
  classNameContainer,
  classNameList,
  placeholder = '--',
  options,
  onSelect,
  value = DEFAULT_VALUE,
  isDisabled = false,
}) => {
  const [isOpen, toggleOpen] = useToggle({ initial: false });

  const ref = useRef(null);

  const handleSelect = (option: TOption) => {
    onSelect?.(option);
    toggleOpen();
  };

  const handleClickAway = () => {
    if (!isOpen) return;

    toggleOpen();
  };

  useClickAway(ref, handleClickAway);

  const { label, Icon } = value;

  const handleClick = !isDisabled ? toggleOpen : noop;

  return (
    <div ref={ref} className="relative w-fit">
      <div
        onClick={handleClick}
        className={twMerge(
          'w-full h-[30px]',
          'bg-secondary-blue dark:bg-dark-200',
          'border-[1px] border-blue dark:border-dark-gray',
          'desktop:px-md desktop:py-xs px-xs py-xxs rounded-[4px]',
          'flex items-center',
          'text-primary-blue dark:text-dark-gray',
          !isDisabled ? 'cursor-pointer' : 'cursor-default',
          classNameContainer
        )}
      >
        {Icon && <Icon className="mr-[10px] text-primary-blue" />}
        <input
          disabled
          value={label}
          className={twMerge(
            'outline-none',
            'w-full desktop:min-w-[55px] min-w-[20px] h-full',
            'bg-secondary-blue dark:bg-dark-200',
            'placeholder:text-primary-blue dark:placeholder:text-dark-gray',
            'dark:text-dark-white',
            'mr-md',
            !isDisabled ? 'cursor-pointer' : 'cursor-default'
          )}
          type="text"
          placeholder={placeholder}
        />
        <div className="w-[16px] h-[16px] flex items-center justify-center">
          {isOpen ? <UpIcon /> : <DownIcon />}
        </div>
      </div>
      {isOpen && (
        <div
          className={twMerge(
            'text-left',
            'mt-[2px] p-md rounded-[8px]',
            'bg-white dark:bg-dark-200',
            'text-primary dark:text-dark-white',
            'drop-shadow-lg',
            'absolute right-0 z-50 min-w-full',
            classNameList
          )}
        >
          {options?.map((option) => (
            <div
              className={twMerge(
                'p-sm rounded-[4px]',
                'hover:bg-secondary-blue dark:hover:bg-dark-gray',
                'dark:bg-dark-200',
                'cursor-pointer'
              )}
              onClick={() => handleSelect(option)}
              key={option.value}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
