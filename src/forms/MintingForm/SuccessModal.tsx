import { FC } from 'react';

import { ISuccessModal } from '@/forms/MintingForm/types';
import Modal from '@/components/Modal';
import Card from '@/app/[locale]/minting/_components/Card';
import Button from '@/components/Button';

const SuccessModal: FC<ISuccessModal> = ({ isShown, onClose }) => {
  return (
    <Modal isShown={isShown} onClose={onClose}>
      <Card>
        <h2 className="mb-xl text-center">Successfully created.</h2>
        <Button label="Ok" onClick={onClose} />
      </Card>
    </Modal>
  );
};

export default SuccessModal;
