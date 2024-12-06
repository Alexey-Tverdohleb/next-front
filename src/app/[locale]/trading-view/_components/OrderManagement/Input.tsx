import { DetailedHTMLProps, InputHTMLAttributes, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

type InputProps = { label: string; rightContent: ReactNode } & DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

export default function Input({ label, rightContent, ...rest }: InputProps) {
  return (
    <div className="grid grid-cols-4 items-center gap-x-2">
      <span className="col-span-1 text-end text-xs font-medium dark:text-dark-white">{label}</span>
      <div
        className={twMerge(
          'col-span-3 flex items-center justify-between dark:text-dark-white',
          'border-gray-divider bg-white dark:border-dark-200 dark:bg-dark-300',
          'h-[50px] w-full rounded-[8px] border-[1px] px-xmd py-md'
        )}
      >
        <input className="w-full bg-white text-md font-semibold dark:bg-dark-300" {...rest} />
        <div className="text-lg font-[600] text-gray-secondary">{rightContent}</div>
      </div>
    </div>
  );
}
