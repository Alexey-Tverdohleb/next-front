import { FC, useState } from 'react';
import { useField } from 'formik';
import { twMerge } from 'tailwind-merge';

import { IDateInput } from '@/components/DateInput/types';
import CalendarButton from '@/components/DateInput/CalendarButton';
import initialValues from '@/forms/MintingForm/initialValues';

const DateInput: FC<IDateInput> = ({ name, label, className, checkboxLabel = 'No date' }) => {
  const [field, , { setValue }] = useField({ name });

  const [isDisabled, setIsDisabled] = useState(false);

  const onCheckbox = (isChecked: boolean) => {
    setIsDisabled(isChecked);
    if (!isChecked) return;

    setValue(initialValues.expireDate).catch(console.error);
  };

  return (
    <div className={twMerge(className)}>
      <label>
        <div className="label">{label}</div>
        <div
          className={twMerge(
            'flex items-center justify-between',
            'bg-white dark:bg-dark-300 border-gray-divider dark:border-dark-200',
            'w-full h-[50px] rounded-[8px] border-[1px] px-xmd mb-xs'
          )}
        >
          <input
            disabled
            name={field.name}
            value={field.value}
            onChange={field.onChange}
            className="bg-white dark:bg-dark-300 dark:text-dark-white w-full h-full mr-md py-md focus:outline-none"
            placeholder="--"
          />
          <CalendarButton setValue={setValue} value={field.value} isDisabled={isDisabled} />
        </div>
      </label>
      <label
        htmlFor={`${name}-checkbox-input`}
        className="label flex items-center w-fit cursor-pointer"
      >
        <input
          id={`${name}-checkbox-input`}
          onChange={(e) => onCheckbox(e.target.checked)}
          className={twMerge(
            'cursor-pointer',
            'border-[1px] rounded-[2px] border-gray-divider dark:border-dark-200 shadow-sm',
            'mr-sm w-[14px] h-[14px] appearance-none',
            isDisabled ? 'bg-primary-blue dark:bg-dark-300 check-icon' : 'bg-white'
          )}
          type="checkbox"
        />
        <span>{checkboxLabel}</span>
      </label>
    </div>
  );
};

export default DateInput;
