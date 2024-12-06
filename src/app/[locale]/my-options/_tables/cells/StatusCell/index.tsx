import { FC, useState } from 'react';

import { IProps } from '@/app/[locale]/my-options/_tables/cells/StatusCell/types';
import { TOption } from '@/types/common';

import {
  STATUS_OPTIONS,
  OPEN_STATUS,
  CANCELED_STATUS,
} from '@/app/[locale]/my-options/_tables/constants';

import useToggle from '@/hooks/useToggle/useToggle';
import Dropdown from '@/components/Dropdown';
import StatusConfirmModal from '@/app/[locale]/my-options/_components/StatusConfirmModal';
import RightAlignCell from '@/components/Table/RightAlignCell';

const StatusCell: FC<IProps> = () => {
  const [statusValue, setStatusValue] = useState<TOption | undefined>(OPEN_STATUS);

  const [isShow, toggleShow] = useToggle({ initial: false });

  // TODO: to manage cancel status action
  const handleConfirm = () => {
    setStatusValue(CANCELED_STATUS);
    toggleShow();
  };

  const isDisabled = statusValue?.value === CANCELED_STATUS.value;

  return (
    <RightAlignCell>
      <Dropdown
        isDisabled={isDisabled}
        options={STATUS_OPTIONS}
        value={statusValue}
        onSelect={toggleShow}
      />
      <StatusConfirmModal isShow={isShow} toggleShow={toggleShow} handleConfirm={handleConfirm} />
    </RightAlignCell>
  );
};

export default StatusCell;
