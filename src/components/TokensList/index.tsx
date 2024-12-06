import { FC } from 'react';

import { IProps } from '@/components/TokensList/types';
import { twMerge } from 'tailwind-merge';
import TokenImage from '@/app/[locale]/minting/_components/TokenImage';
import { truncateText } from '@/helpers/common';
import VerifiedIcon from '@/assets/icons/VerifiedIcon';
import Badge from '@/components/Badge';
import { IToken } from '@/types/token';

const TokensList: FC<IProps> = ({
  tokens = [],
  handleSelect,
  categories = {},
  selectedTokenName = '',
  badgeClassName,
  className,
  selectedClassName,
  itemClassName,
}) => {
  const isVerified = (status: string): boolean => status === 'verified';

  const isSelected = (token: IToken): boolean => token.info.symbol === selectedTokenName;

  return (
    <div className={twMerge(className)}>
      {tokens?.map((token, index) => (
        <div
          onClick={() => handleSelect?.(token)}
          key={index}
          className={twMerge(
            'grid grid-cols-2 justify-start gap-x-md',
            'w-full py-md mb-md',
            'border-b-[1px] border-gray-divider dark:border-dark-200',
            'cursor-pointer',
            itemClassName,
            isSelected(token) && twMerge('bg-secondary-blue dark:bg-dark-500', selectedClassName)
          )}
        >
          <div className="flex items-center">
            <TokenImage src={token.info.image} />
            <div
              title={token.info.symbol}
              className={twMerge(
                'h-full desktop:mr-md mr-sm',
                'flex items-center shrink-0',
                'text-lg font-[600] text-primary dark:text-dark-white'
              )}
            >
              {truncateText(token.info.symbol, 8)}
            </div>

            {isVerified(token.info.status) && (
              <VerifiedIcon className="text-primary-blue shrink-0 desktop:mr-md mr-sm" />
            )}
            {token.info.categories.map((id) => (
              <Badge
                key={id}
                className={twMerge('ml-xxs ', badgeClassName)}
                label={categories?.[id]?.name}
              />
            ))}
          </div>
          <div
            title={token.info.address.name}
            className={twMerge(
              'flex items-center justify-end',
              'text-xs text-gray dark:text-dark-white'
            )}
          >
            {truncateText(token.info.address.name)}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TokensList;
