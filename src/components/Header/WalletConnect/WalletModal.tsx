'use client';

import { FC } from 'react';
import Modal from '@/components/Modal';
import { getConnectorConfigs } from '@/context/wallet/helpers';
import { useCallback, useMemo } from 'react';
import { IWalletModal } from './types';
import useWallet from '@/hooks/wallet';
import Button from '@/components/Button';

const WalletModal: FC<IWalletModal> = ({ isShown, close }) => {
  const { enableWallet } = useWallet();
  const connectorConfigs = useMemo(() => getConnectorConfigs(), []);
  const onClick = useCallback(
    (connectorId: string) => {
      enableWallet('normal', connectorId);
      close();
      console.log('click');
    },
    [close, enableWallet]
  );

  return (
    <Modal isShown={isShown} onClose={close}>
      {connectorConfigs
        .filter(({ detected }) => detected)
        .map(({ title, connectorId }) => {
          return (
            <Button
              key={title}
              label={`${title} - ${connectorId}`}
              onClick={() => onClick(connectorId)}
            />
          );
        })}
      {connectorConfigs
        .filter(({ detected }) => !detected)
        .map(({ title, connectorId }) => {
          return (
            <Button
              key={title}
              label={`${title} - ${connectorId}`}
              onClick={
                () => console.log('TODO: Add link') /* TODO pjordan: Redirect to wallet url */
              }
            />
          );
        })}
    </Modal>
  );
};

export default WalletModal;
