import useToggle from '@/hooks/useToggle/useToggle';
import Dropdown from '@/app/[locale]/trading-view/_components/Dropdown';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import coinFirst from '@/assets/coinsTmp/coin1.svg';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import coinSnek from '@/assets/coinsTmp/coin2.svg';

export default function CryptoPairSelects() {
  const [isLeftOpen, toggleLeftOpen] = useToggle({ initial: false });
  const [isRightOpen, toggleRightOpen] = useToggle({ initial: false });

  return (
    <div className="flex w-full items-center gap-x-2 desktop:w-fit">
      <Dropdown
        value={{ value: 'ADA', label: 'ADA', icon: coinFirst }}
        isOpen={isLeftOpen}
        toggleOpen={toggleLeftOpen}
      />
      <span className="text-lg text-primary dark:text-dark-gray">/</span>
      <Dropdown
        value={{ value: 'SNEK', label: 'SNEK', icon: coinSnek }}
        isOpen={isRightOpen}
        toggleOpen={toggleRightOpen}
      />
    </div>
  );
}
