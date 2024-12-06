import { FC } from 'react';
import { useField, useFormikContext } from 'formik';
import { twMerge } from 'tailwind-merge';

import InfoIcon from '@/assets/icons/InfoIcon';
import { IProps } from '@/components/Input/types';

const Input: FC<IProps> = ({
  label,
  info,
  type = 'text',
  name,
  disabled = false,
  className,
  inputLabel,
  placeholder,
  min = 0,
  max,
}) => {
  const [field] = useField({ name });
  const { isSubmitting } = useFormikContext();

  return (
    <div className={twMerge(className)}>
      <label>
        <div className="label">{label}</div>
        <div
          className={twMerge(
            'bg-white dark:bg-dark-300 flex items-center justify-between w-full',
            'h-[50px] rounded-[8px] border-[1px] border-gray-divider dark:border-dark-200 px-xmd mb-xs'
          )}
        >
          <input
            type={type}
            name={field.name}
            value={field.value}
            onChange={field.onChange}
            disabled={isSubmitting || disabled}
            placeholder={placeholder}
            className="bg-white dark:bg-dark-300 dark:text-dark-white w-full h-full mr-md py-md focus:outline-none"
            min={min}
            max={max}
          />
          <div className="font-[600] text-lg text-gray-secondary">{inputLabel}</div>
        </div>
      </label>

      {info && (
        <div
          className={twMerge(
            'bg-secondary-blue dark:bg-dark-200',
            'flex items-center w-fit px-md py-xs rounded-[1000px]',
            'text-primary dark:text-dark-white text-xs font-[500]'
          )}
        >
          <InfoIcon className="text-primary-blue dark:text-dark-white" />
          <div className="ml-sm">{info}</div>
        </div>
      )}
    </div>
  );
};

export default Input;
