import { FC } from 'react';
import { twMerge } from 'tailwind-merge';

import { IProps } from '@/app/[locale]/minting/_components/TokenButton/types';
import ChevronRightIcon from '@/assets/icons/ChevronRightIcon';
import { truncateText } from '@/helpers/common';
import TokenImage from '@/app/[locale]/minting/_components/TokenImage';
import useMintingForm from '@/forms/MintingForm/useMintingForm';

const TokenButton: FC<IProps> = ({ className, onClick }) => {
  const { values } = useMintingForm();

  return (
    <div className={twMerge(className)}>
      <div className="label">Token</div>
      <button
        type="button"
        onClick={onClick}
        className={twMerge(
          'flex items-center justify-between',
          'bg-white dark:bg-dark-300 border-gray-divider dark:border-dark-200',
          'w-full h-[50px] rounded-[8px] border-[1px] px-xmd',
          'cursor-pointer'
        )}
      >
        <div className="w-full">
          <div className="flex items-center">
            <TokenImage src={values.token?.info.image} width={24} height={24} className="mr-sm" />
            <div className="text-md font-[600] text-primary dark:text-dark-white">
              {truncateText(values.token?.info.symbol)}
            </div>
          </div>
        </div>
        <ChevronRightIcon className="text-primary dark:text-dark-gray" />
      </button>
    </div>
  );
};

export default TokenButton;
