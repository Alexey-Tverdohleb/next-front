import { FC, useState } from 'react';
import { useTranslations } from 'next-intl';

import { ISheet } from '@/app/[locale]/markets/_components/Filters/types';
import ToggleFilter from '@/components/ToggleFilter';
import { MARKETS_FILTERS } from '@/constants/filters';
import { CLASS_OPTIONS } from '@/app/[locale]/markets/constant';
import FiltersDivider from '@/app/[locale]/my-options/_components/FiltersDivider';
import useMarkets from '@/context/markets/useMarkets';
import MobileSelect from '@/components/MobileSelect';
import Button from '@/components/Button';
import SelectBases from '@/app/[locale]/markets/_components/SelectBases';

const SheetContent: FC<ISheet> = ({ toggleOpen }) => {
  const t = useTranslations('MarketsPage.filters');

  const { filters, applyFilters } = useMarkets();

  const [filtersState, setFiltersState] = useState(filters);

  const handleToggle = (value: boolean) => {
    setFiltersState((prevState) => ({ ...prevState, [MARKETS_FILTERS.tokenVerified]: value }));
  };

  const handleClassification = (value: string) => {
    setFiltersState((prevState) => ({ ...prevState, [MARKETS_FILTERS.classification]: value }));
  };

  const handleSelectBases = (value: string) => {
    setFiltersState((prevState) => ({ ...prevState, [MARKETS_FILTERS.base]: value }));
  };

  const handleApply = () => {
    applyFilters?.(filtersState);
    toggleOpen();
  };

  return (
    <div>
      <div className="text-xl font-[600] mb-md">{t('filters')}</div>
      <ToggleFilter
        value={filtersState[MARKETS_FILTERS.tokenVerified]}
        onToggle={handleToggle}
        className="w-full justify-center"
        label={t('verifiedToggle')}
      />
      <FiltersDivider />
      <div className="text-xs font-[600] mb-sm">{t('classification')}</div>
      <MobileSelect
        options={CLASS_OPTIONS}
        value={filtersState[MARKETS_FILTERS.classification]}
        setValue={handleClassification}
      />
      <FiltersDivider />
      <div className="text-xs font-[600] mb-sm">{t('selectBases')}</div>
      <SelectBases
        handleSelect={handleSelectBases}
        value={filtersState[MARKETS_FILTERS.base]}
        className="mb-xl"
      />
      <Button label={t('applyButton')} onClick={handleApply} />
    </div>
  );
};

export default SheetContent;
