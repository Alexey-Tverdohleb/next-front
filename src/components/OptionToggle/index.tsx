'use client';

import { FC } from 'react';
import { twMerge } from 'tailwind-merge';
import { useField, useFormikContext } from 'formik';

import { IProps } from '@/components/OptionToggle/types';

const OptionToggle: FC<IProps> = ({ options, name, label, className = '' }) => {
  const { isSubmitting } = useFormikContext();
  const [field, , { setValue }] = useField({ name });
  const isActive = (value: string | number) => value === field?.value;

  return (
    <div className={className}>
      <div className="label">{label}</div>
      <div className="text-black h-[48px] w-full flex align-stretch rounded-[8px] overflow-hidden">
        {options.map((option) => (
          <button
            type="button"
            disabled={isSubmitting}
            className={twMerge(
              'grow font-[600]',
              isActive(option.value)
                ? 'bg-primary-blue text-white dark:text-dark-white'
                : 'bg-blue-tertiary dark:bg-dark-300 text-primary dark:text-dark-white'
            )}
            key={option.value}
            onClick={() => setValue?.(option.value)}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
};
export default OptionToggle;
