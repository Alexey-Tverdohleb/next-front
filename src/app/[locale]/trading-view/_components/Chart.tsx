import { VictoryAxis, VictoryCandlestick, VictoryChart, VictoryZoomContainer } from 'victory';
import { VictoryTheme } from 'victory-core/es';
import { useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { isIOS } from '@/helpers/system';
import FullScreenButton from '@/components/FullScreenButton';
import LayoutDashboardButton from '@/app/[locale]/trading-view/_components/LayoutDashboardButton';
import Dropdown from '@/app/[locale]/trading-view/_components/Dropdown';
import useToggle from '@/hooks/useToggle/useToggle';
import OptionsSelection from '@/app/[locale]/trading-view/_components/OrderManagement/OptionsSelection';

const options = [
  { label: '30m', value: '30m' },
  { label: '1h', value: '1h' },
  { label: '4h', value: '4h' },
  { label: '1d', value: '1d' },
  { label: '1w', value: '1w' },
];

export default function Chart() {
  const [isOpen, toggleOpen] = useToggle({ initial: false });
  const [selectedOption, setSelectedOption] = useState<{
    label: string;
    value: string | number;
  } | null>(null);

  return (
    <div className="w-full rounded-xl border border-gray-divider bg-white p-3 dark:border-dark-300 dark:bg-dark-400 desktop:border-none">
      <div className="flex w-full justify-between">
        <div className="flex w-fit items-center gap-x-2">
          <span className="text-xs dark:text-white">Time:</span>
          <div className="desktop:hidden">
            <Dropdown
              value={!!selectedOption ? selectedOption : { value: '', label: '' }}
              isOpen={isOpen}
              toggleOpen={toggleOpen}
            >
              {options.map((option) => (
                <div
                  key={option.value}
                  className={twMerge(
                    'rounded-[4px] p-sm',
                    'hover:bg-secondary-blue dark:hover:bg-dark-gray',
                    'dark:bg-dark-200',
                    'cursor-pointer'
                  )}
                  onClick={() => setSelectedOption(option)}
                >
                  {option.label}
                </div>
              ))}
            </Dropdown>
          </div>
          <div className="hidden desktop:block">
            <OptionsSelection
              options={options}
              selectedOption={selectedOption?.value ? selectedOption.value : null}
              onSelect={setSelectedOption}
            />
          </div>
        </div>
        <div>
          {!isIOS() && <FullScreenButton className="mr-md" />}
          <LayoutDashboardButton />
        </div>
      </div>
      <VictoryChart
        containerComponent={<VictoryZoomContainer />}
        theme={VictoryTheme.material}
        domainPadding={{ x: 25 }}
        scale={{ x: 'linear' }}
      >
        <VictoryAxis dependentAxis />
        <VictoryCandlestick
          candleColors={{ positive: '#22C55E', negative: '#EF4444' }}
          x="date"
          open="open"
          close="close"
          high="high"
          low="low"
          data={[
            { date: new Date('2023-01-01'), open: 100, close: 150, high: 160, low: 90 },

            { date: new Date('2023-01-02'), open: 120, close: 100, high: 140, low: 80 },
            { date: new Date('2023-01-03'), open: 100, close: 130, high: 150, low: 90 },
            { date: new Date('2023-01-04'), open: 120, close: 110, high: 130, low: 90 },
            { date: new Date('2023-01-05'), open: 120, close: 150, high: 160, low: 110 },
            { date: new Date('2023-01-06'), open: 150, close: 140, high: 160, low: 130 },
          ]}
        />
      </VictoryChart>
    </div>
  );
}
