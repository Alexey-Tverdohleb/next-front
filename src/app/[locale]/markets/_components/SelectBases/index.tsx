import { FC, useMemo, useState } from 'react';
import { twMerge } from 'tailwind-merge';

import { IProps } from '@/app/[locale]/markets/_components/SelectBases/types';
import SearchInput from '@/components/SearchInput';
import TokenImage from '@/app/[locale]/minting/_components/TokenImage';
import { truncateText } from '@/helpers/common';
import useMarkets from '@/context/markets/useMarkets';
import CheckIcon from '@/assets/icons/CheckIcon';

const SelectBases: FC<IProps> = ({ handleSelect, value, className }) => {
  const { data } = useMarkets();
  // TODO: replace mock data options
  const mockData = data.slice(0, 8);

  const [search, setSearch] = useState<string>('');

  const filteredList = useMemo(() => {
    if (!search) return mockData;

    return mockData.filter((items) =>
      items.info.symbol.toLowerCase().includes(search.trim().toLowerCase())
    );
  }, [search, mockData]);

  return (
    <div className={twMerge('w-full', className)}>
      <SearchInput
        value={search}
        onChange={setSearch}
        placeholder="Search"
        className="mb-sm h-[45px]"
      />
      <div className="h-[130px] overflow-y-auto" onScroll={(e) => e.stopPropagation()}>
        {!filteredList.length && (
          <div
            className={twMerge(
              'flex items-center justify-center',
              'p-sm w-full rounded-[4px]',
              'text-left text-md text-primary font-[500] dark:text-dark-white',
              'hover:bg-secondary-blue dark:hover:bg-dark-gray'
            )}
          >
            No options.
          </div>
        )}

        {filteredList.map((item, index) => {
          const isSelected = item.info.symbol.toLowerCase() === value?.toLowerCase();

          const background = isSelected ? 'bg-secondary-blue dark:bg-dark-gray' : null;

          return (
            <div
              role="button"
              onClick={() => handleSelect(item.info.symbol)}
              key={index}
              className={twMerge(
                'flex items-center justify-between',
                'p-sm w-full rounded-[4px]',
                'text-left text-md text-primary font-[500] dark:text-dark-white',
                background
              )}
            >
              <div className="flex items-center">
                <TokenImage src={item.info.image} height={24} width={24} className="mr-sm" />
                <div title={item.info.symbol}>{truncateText(item.info.symbol, 6)}</div>
              </div>
              {isSelected && <CheckIcon className="text-primary-blue dark:text-dark-white" />}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SelectBases;
