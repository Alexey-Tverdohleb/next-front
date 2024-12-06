import { FC } from 'react';
import { IProps } from '@/components/ButtonGroup/types';
import { twMerge } from 'tailwind-merge';
import { useField, useFormikContext } from 'formik';

const ButtonGroup: FC<IProps> = ({ label, className, inputLabel, options, name }) => {
  const { isSubmitting } = useFormikContext();
  const [field, , { setValue }] = useField({ name });

  const isChecked = (value: string | number) => value === field.value;

  return (
    <div className={className}>
      <div className="label">{label}</div>
      <div
        className={twMerge(
          'flex items-center justify-between dark:text-dark-white',
          'bg-white dark:bg-dark-300 border-gray-divider dark:border-dark-200',
          'w-full h-[50px] rounded-[8px] border-[1px] px-xmd py-md mb-xs'
        )}
      >
        <input
          value={field.value}
          className="w-full bg-white dark:bg-dark-300"
          type="text"
          disabled
        />
        <div className="font-[600] text-lg text-gray-secondary">{inputLabel}</div>
      </div>

      <div className="flex">
        {options.map(({ label, value }) => (
          <button
            key={value}
            type="button"
            disabled={isSubmitting}
            onClick={() => setValue(value)}
            className={twMerge(
              'text-xs font-[600] text-text-blue px-md py-xs mr-sm rounded-[4px]',
              isChecked(value)
                ? 'bg-white dark:bg-dark-400 text-gray dark:text-dark-white'
                : 'bg-blue dark:bg-dark-200 text-white dark:text-dark-white'
            )}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ButtonGroup;
