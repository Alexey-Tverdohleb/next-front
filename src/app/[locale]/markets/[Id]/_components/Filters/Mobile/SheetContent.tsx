import { FC, useCallback, useState } from 'react';
import { useTranslations } from 'next-intl';
import { Range, RangeKeyDict } from 'react-date-range';

import { ISheet } from '@/app/[locale]/markets/[Id]/_components/Filters/types';
import useMarketDetails from '@/context/market-details/useMarketDetails';
import DateRangePicker from '@/components/DateRangePicker';
import { MARKET_DETAILS_FILTERS } from '@/constants/filters';
import Button from '@/components/Button';
import RangeSlider from '@/components/RangeSlider';

const SheetContent: FC<ISheet> = () => {
  const t = useTranslations('MarketsPage.marketsDetails');

  const { filters } = useMarketDetails();

  const [ranges, setRanges] = useState<Range[]>([
    {
      key: 'selection',
      startDate: filters[MARKET_DETAILS_FILTERS.expStartDate] ?? new Date(),
      endDate: filters[MARKET_DETAILS_FILTERS.expEndDate] ?? new Date(),
    },
  ]);

  const handleSelection = useCallback(
    ({ selection }: RangeKeyDict) => setRanges([selection]),
    [setRanges]
  );

  return (
    <div>
      <div className="text-xl font-[600] mb-md">{t('filters')}</div>
      <div className="text-xs font-[600] mb-sm">{t('expireDate')}</div>
      <DateRangePicker handleSelection={handleSelection} ranges={ranges} className="mb-xl" />
      <div className="text-xs font-[600] mb-sm">{t('strikePrice')}</div>
      <RangeSlider min={0} max={100} className="mb-xl" />
      <div className="text-xs font-[600] mb-sm">{t('volume')}</div>
      <RangeSlider min={0} max={100} className="mb-xl" />
      <Button label={t('applyButton')} />
    </div>
  );
};

export default SheetContent;
