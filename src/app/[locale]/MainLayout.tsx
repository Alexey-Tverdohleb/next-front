import { FC } from 'react';
import { twMerge } from 'tailwind-merge';

import { IMainLayout } from '@/app/[locale]/types';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { WalletProvider } from '@/context/wallet';
import { CardanoProvider } from '@/context/cardano';

const MainLayout: FC<IMainLayout> = ({ children }) => {
  return (
    <CardanoProvider>
      <WalletProvider>
        <div className="flex min-h-screen flex-col items-stretch justify-between overflow-hidden">
          <Header />
          <div className="mx-auto w-full max-w-[1440px]">
            <main
              className={twMerge(
                'px-xmd py-md desktop:px-xxl desktop:py-xl',
                'grow overflow-x-auto',
                'mt-[60px] desktop:mt-[80px]'
              )}
            >
              {children}
            </main>
          </div>
          <Footer />
        </div>
      </WalletProvider>
    </CardanoProvider>
  );
};

export default MainLayout;
