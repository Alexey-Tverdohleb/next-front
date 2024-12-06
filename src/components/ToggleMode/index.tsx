import { FC } from 'react';
import { twMerge } from 'tailwind-merge';

import { IProps } from '@/components/ToggleMode/types';
import LightModeIcon from '@/assets/icons/LightModeIcon';
import DarkModeIcon from '@/assets/icons/DarkModeIcon';
import useThemeMode from '@/hooks/useThemeMode';

const ToggleMode: FC<IProps> = ({ className }) => {
  const { toggleLight } = useThemeMode();

  return (
    <button
      type="button"
      onClick={toggleLight}
      className={twMerge(
        'flex items-center h-[40px] rounded-[1000px] w-[88px] max-w-[88px]',
        'bg-blue dark:bg-dark-200',
        className
      )}
    >
      <div className="flex items-center w-full px-[6px]">
        <LightModeIcon className="text-white" />
        <div
          className={twMerge(
            'w-[28px] h-[28px] shrink-0 rounded-full bg-white transition-transform',
            'translate-x-[25px] dark:translate-x-[-25px]'
          )}
        />
        <DarkModeIcon className="text-dark-gray" />
      </div>
    </button>
  );
};

export default ToggleMode;
