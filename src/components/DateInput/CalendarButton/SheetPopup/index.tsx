import { FC } from 'react';

import { IModal } from '@/components/DateInput/types';
import BottomSheet from '@/components/BottomSheet';
import SheetContent from '@/components/DateInput/CalendarButton/SheetPopup/SheetContent';

const SheetPopup: FC<IModal> = ({ isOpen, value, toggleOpen, onSelect }) => {
  const handleClose = () => {
    if (!isOpen) return;

    toggleOpen();
  };

  return (
    <BottomSheet isOpen={isOpen} handleClose={handleClose}>
      <h2 className="mb-xl">Select expire date</h2>
      <SheetContent onSelect={onSelect} value={value} />
    </BottomSheet>
  );
};

export default SheetPopup;
