import { FC, useState, useMemo } from 'react';
import { twMerge } from 'tailwind-merge';

import { IContent } from '@/app/[locale]/markets/_components/BasesDropdown/types';
import { MARKETS_FILTERS } from '@/constants/filters';
import { truncateText } from '@/helpers/common';
import useMarkets from '@/context/markets/useMarkets';
import TokenImage from '@/app/[locale]/minting/_components/TokenImage';
import SearchInput from '@/components/SearchInput';

const DropdownContent: FC<IContent> = ({ toggleOpen }) => {
  const { data, applyFilters, filters } = useMarkets();
  // TODO: replace mock data options
  const mockData = data.slice(0, 8);

  const [search, setSearch] = useState<string>('');

  const handleSelect = (value: string) => {
    applyFilters?.({ ...filters, [MARKETS_FILTERS.base]: value });
    toggleOpen();
  };

  const filteredList = useMemo(() => {
    if (!search) return mockData;

    return mockData.filter((items) =>
      items.info.symbol.toLowerCase().includes(search.trim().toLowerCase())
    );
  }, [search, mockData]);

  return (
    <div className="w-[310px]">
      <SearchInput
        value={search}
        onChange={setSearch}
        placeholder="Search"
        className="mb-sm h-[45px]"
      />
      <div className="max-h-[200px] overflow-y-auto">
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

        {filteredList.map((item, index) => (
          <div
            role="button"
            onClick={() => handleSelect(item.info.symbol)}
            key={index}
            className={twMerge(
              'flex items-center',
              'p-sm w-full rounded-[4px]',
              'text-left text-md text-primary font-[500] dark:text-dark-white',
              'hover:bg-secondary-blue dark:hover:bg-dark-gray'
            )}
          >
            <TokenImage src={item.info.image} height={24} width={24} className="mr-sm" />
            <div title={item.info.symbol}>{truncateText(item.info.symbol, 6)}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DropdownContent;
