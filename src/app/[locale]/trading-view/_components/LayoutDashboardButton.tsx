import { twMerge } from 'tailwind-merge';
import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import LayoutDashboard from '@/assets/icons/LayoutDashboard';

export default function LayoutDashboardButton({
  onClick,
  ...rest
}: Omit<
  DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
  'type' | 'className'
>) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={twMerge(
        'text-gray-secondary dark:text-dark-gray',
        'cursor-pointer',
        'dark:bg-dark-300',
        'rounded-[8px] border-[1px] border-gray-divider dark:border-0',
        'px-md py-sm'
      )}
      {...rest}
    >
      <LayoutDashboard />
    </button>
  );
}
