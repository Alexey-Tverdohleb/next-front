import { FC } from 'react';
import { twMerge } from 'tailwind-merge';

import { IStrikeDropdown } from '@/app/[locale]/markets/[Id]/_components/StrikeDropdown/types';
import useToggle from '@/hooks/useToggle/useToggle';
import FilterDropdown from '@/components/FilterDropdown';
import RangeSlider from '@/components/RangeSlider';

const StrikeDropdown: FC<IStrikeDropdown> = ({ className, label }) => {
  const [isOpen, toggleOpen] = useToggle({ initial: false });

  return (
    <FilterDropdown
      toggleOpen={toggleOpen}
      isOpen={isOpen}
      label={label}
      className={twMerge(className)}
    >
      <div className="w-[500px]">
        <RangeSlider min={0} max={100} />
      </div>
    </FilterDropdown>
  );
};

export default StrikeDropdown;
