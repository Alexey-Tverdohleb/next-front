import { twMerge } from 'tailwind-merge';

type OptionsSelectionProps = {
  options: Array<{ label: string; value: string | number }>;
  selectedOption: number | string | null;
  onSelect(value: { label: string; value: string | number }): void;
};

export default function OptionsSelection({
  options,
  onSelect,
  selectedOption,
}: OptionsSelectionProps) {
  return (
    <div className="grid auto-cols-auto grid-flow-col gap-x-2">
      {options.map(({ label, value }) => (
        <button
          key={value}
          type="button"
          disabled={false}
          data-value={value}
          onClick={() => onSelect({ label, value })}
          className={twMerge(
            'rounded-[4px] px-md py-xs text-xs font-[600] text-text-blue',
            value === selectedOption
              ? 'bg-white text-gray dark:bg-dark-400 dark:text-dark-white'
              : 'bg-blue text-white dark:bg-dark-200 dark:text-dark-white'
          )}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
