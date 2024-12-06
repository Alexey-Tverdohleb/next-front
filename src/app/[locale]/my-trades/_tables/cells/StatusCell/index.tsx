import { FC, useState } from 'react';

import { ICell } from '@/app/[locale]/my-trades/_tables/cells/StatusCell/types';
import { TOption } from '@/types/common';
import { STATUS_OPTIONS, OPEN_STATUS, CANCELED_STATUS } from '@/app/[locale]/my-trades/constants';
import Dropdown from '@/components/Dropdown';
import StatusModal from '@/app/[locale]/my-trades/_components/StatusModal';
import useToggle from '@/hooks/useToggle/useToggle';
import RightAlignCell from '@/components/Table/RightAlignCell';

const StatusCell: FC<ICell> = () => {
  const [status, setStatus] = useState<TOption | undefined>(OPEN_STATUS);

  const isDisabled = status?.value === CANCELED_STATUS.value;

  const [isShow, toggleShow] = useToggle({ initial: false });

  // TODO: handle change status
  const handleConfirm = () => {
    setStatus(CANCELED_STATUS);
    toggleShow();
  };

  return (
    <RightAlignCell>
      <Dropdown
        value={status}
        isDisabled={isDisabled}
        onSelect={toggleShow}
        options={STATUS_OPTIONS}
      />
      <StatusModal toggleShow={toggleShow} handleConfirm={handleConfirm} isShow={isShow} />
    </RightAlignCell>
  );
};

export default StatusCell;
