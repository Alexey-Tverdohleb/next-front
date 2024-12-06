import { FC } from 'react';
import { twMerge } from 'tailwind-merge';
import { IProps } from './types';

const Button: FC<IProps> = ({
  label = '',
  isDisabled = false,
  icon = null,
  className,
  ...rest
}) => {
  return (
    <button
      disabled={isDisabled}
      className={twMerge(
        'text-md text-white',
        'flex h-[43px] w-full items-center justify-center rounded-[8px] px-xl',
        isDisabled ? 'bg-gray-secondary dark:bg-gray-secondary' : 'bg-primary-blue',
        className
      )}
      {...rest}
    >
      <div>{label}</div>
      {icon && <div className="ml-md">{icon}</div>}
    </button>
  );
};

export default Button;
