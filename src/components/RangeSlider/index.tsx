import { ChangeEvent, FC, useCallback, useEffect, useState, useRef } from 'react';
import { twMerge } from 'tailwind-merge';

import { clampNumbers } from '@/helpers/numeric';
import './multiRangeSlider.css';

interface MultiRangeSliderProps {
  min?: number;
  max?: number;
  onChange?: (value: { min: number; max: number }) => void;
  className?: string;
}

const RangeSlider: FC<MultiRangeSliderProps> = ({ min = 0, max = 100, onChange, className }) => {
  const [minVal, setMinVal] = useState(min);
  const [maxVal, setMaxVal] = useState(max);
  const minValRef = useRef<HTMLInputElement>(null);
  const maxValRef = useRef<HTMLInputElement>(null);
  const range = useRef<HTMLDivElement>(null);

  // Convert to percentage
  const getPercent = useCallback(
    (value: number) => Math.round(((value - min) / (max - min)) * 100),
    [min, max]
  );

  // Set width of the range to decrease from the left side
  useEffect(() => {
    if (maxValRef.current) {
      const minPercent = getPercent(minVal);
      const maxPercent = getPercent(+maxValRef.current.value); // Precede with '+' to convert the value from type string to type number

      if (range.current) {
        range.current.style.left = `${minPercent}%`;
        range.current.style.width = `${maxPercent - minPercent}%`;
      }
    }
  }, [minVal, getPercent]);

  // Set width of the range to decrease from the right side
  useEffect(() => {
    if (minValRef.current) {
      const minPercent = getPercent(+minValRef.current.value);
      const maxPercent = getPercent(maxVal);

      if (range.current) {
        range.current.style.width = `${maxPercent - minPercent}%`;
      }
    }
  }, [maxVal, getPercent]);

  // Get min and max values when their state changes
  useEffect(() => {
    onChange?.({ min: minVal, max: maxVal });
  }, [minVal, maxVal, onChange]);

  const handleMinInput = (event: ChangeEvent<HTMLInputElement>) => {
    const value = clampNumbers(+event.target.value, min, maxVal);
    setMinVal(value);
    event.target.value = value.toString();
  };

  const handleMaxInput = (event: ChangeEvent<HTMLInputElement>) => {
    const value = clampNumbers(+event.target.value, minVal, max);
    setMaxVal(value);
    event.target.value = value.toString();
  };

  return (
    <div className={twMerge('pb-sm', className)}>
      <div className="flex items-center mb-xl">
        <div className="flex flex-col grow mr-md">
          <label className="text-sm font-[500] mb-xxs" htmlFor="range-slider-min">
            From:
          </label>
          <input
            id="range-slider-min"
            max={max}
            min={min}
            type="number"
            value={minVal}
            className={twMerge(
              'outline-none rounded-[8px]',
              'border-gray-divider dark:border-dark-200 border-[1px]',
              'px-xmd py-md h-[50px]',
              'bg-white dark:bg-dark-300',
              'text-lg font-[600]'
            )}
            onChange={handleMinInput}
          />
        </div>
        <div className="flex flex-col grow">
          <label className="text-sm font-[500] mb-xxs" htmlFor="range-slider-max">
            To:
          </label>
          <input
            id="range-slider-max"
            max={max}
            min={min}
            type="number"
            value={maxVal}
            className={twMerge(
              'outline-none rounded-[8px]',
              'border-gray-divider dark:border-dark-200 border-[1px]',
              'px-xmd py-md h-[50px]',
              'bg-white dark:bg-dark-300',
              'text-lg font-[600]'
            )}
            onChange={handleMaxInput}
          />
        </div>
      </div>
      <div className="w-full h-[10px]">
        <input
          type="range"
          min={min}
          max={max}
          value={minVal}
          ref={minValRef}
          onChange={handleMinInput}
          className={twMerge('thumb', minVal > max - 100 ? 'z-[5]' : 'z-[3]')}
        />
        <input
          type="range"
          min={min}
          max={max}
          value={maxVal}
          ref={maxValRef}
          onChange={handleMaxInput}
          className="thumb z-[4]"
        />

        <div className="w-full relative">
          <div className="w-full bg-gray-bg dark:bg-dark-gray z-[1] absolute h-[8px] rounded-[3px]"></div>
          <div
            ref={range}
            className="w-full  bg-blue-500 z-[2] rounded-[3px] h-[8px] absolute"
          ></div>
        </div>
      </div>
    </div>
  );
};

export default RangeSlider;
