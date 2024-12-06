import { FC } from 'react';
import { twMerge } from 'tailwind-merge';

import { IProps } from '@/app/[locale]/my-trades/_components/NewLimitInput/types';
import useTradesLimitForm from '@/forms/TradesLimitForm/useTradesLimitForm';

const NewLimitInput: FC<IProps> = ({ value, className }) => {
  const { setValues } = useTradesLimitForm();

  const handleChange = (limitPrice: number) => setValues({ limitPrice });

  return (
    <div
      className={twMerge(
        'bg-white dark:bg-dark-300 flex items-center justify-between w-full',
        'h-[36px] rounded-[8px] border-[1px] border-gray-divider dark:border-dark-200 px-xmd',
        className
      )}
    >
      <input
        type="number"
        name="new-limit-price"
        placeholder="--"
        defaultValue={value}
        onChange={(e) => handleChange(parseFloat(e.target.value))}
        className="bg-white dark:bg-dark-300 dark:text-dark-white w-full h-full py-md focus:outline-none"
        min={0}
      />
    </div>
  );
};

export default NewLimitInput;
