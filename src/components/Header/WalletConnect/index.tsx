'use client';

import WalletIcon from '@/assets/icons/WalletIcon';
import Button from '@/components/Button';
import { useTranslations } from 'next-intl';
import WalletModal from './WalletModal';
import { useToggle } from 'react-use';

const WalletConnect = () => {
  const t = useTranslations('Menu');

  const [isShown, toggleShow] = useToggle(false);

  return (
    <div className="relative">
      <Button label={t('connectWallet')} icon={<WalletIcon />} onClick={() => toggleShow(true)} />
      <WalletModal isShown={isShown} close={() => toggleShow(false)} />
    </div>
  );
};

export default WalletConnect;
