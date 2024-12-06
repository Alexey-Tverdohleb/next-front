import { FC } from 'react';
import { twMerge } from 'tailwind-merge';
import { IProps, OnSelectEvent } from '@/components/TabToggle/types';

const TabToggle: FC<IProps> = ({ tabs, activeTab, onChange, className }) => {
  const onClick = (event: OnSelectEvent) => {
    const itemIndex = event.currentTarget?.getAttribute('data-index');

    if (!itemIndex) return;

    onChange(Number.parseInt(itemIndex, 10), event);
  };

  return (
    <div
      className={twMerge(
        'bg-gray-bg p-xxs dark:bg-dark-400',
        'flex w-full desktop:w-fit',
        'rounded-[8px]',
        'text-sm desktop:text-lg',
        className
      )}
    >
      {tabs.map((tab) => (
        <button
          key={tab.id}
          data-index={tab.id}
          onClick={onClick}
          className={twMerge(
            'grow cursor-pointer rounded-[8px] px-xl py-sm text-center',
            tab.id === activeTab
              ? 'border-[1px] border-gray-divider bg-white font-[700] text-primary-blue dark:border-0 dark:bg-primary-blue dark:text-dark-white'
              : 'font-[500] text-primary dark:text-dark-gray'
          )}
        >
          {tab.element}
        </button>
      ))}
    </div>
  );
};

export default TabToggle;
