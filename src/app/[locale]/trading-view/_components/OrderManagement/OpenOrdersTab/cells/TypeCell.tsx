import { useEffect } from 'react';
import { Getter, Row } from '@tanstack/table-core';
import useScreen from '@/hooks/useScreen';
import UpIcon from '@/assets/icons/UpIcon';
import DownIcon from '@/assets/icons/DownIcon';
import { OpenOrderType } from '@/app/[locale]/trading-view/_components/OrderManagement/OpenOrdersTab/columns';

type TypeCellProps = {
  getValue: Getter<string>;
  row: Row<OpenOrderType>;
};

export default function TypeCell({ getValue, row }: TypeCellProps) {
  const { isDesktop } = useScreen();

  useEffect(() => {
    if (isDesktop && row.getIsExpanded()) {
      row.toggleExpanded(false);
    }
  }, [isDesktop, row]);

  if (isDesktop) {
    return (
      <span className="text-md font-medium text-primary dark:text-dark-white">{getValue()}</span>
    );
  }

  return (
    <button
      {...{
        onClick: row.getToggleExpandedHandler(),
        className: 'cursor-pointer flex items-center w-fit ml-auto',
      }}
    >
      <span className="mr-2.5">{getValue()}</span>
      {row.getIsExpanded() ? (
        <UpIcon className="text-primary-blue" />
      ) : (
        <DownIcon className="text-gray" />
      )}
    </button>
  );
}
