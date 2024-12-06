import { useState } from 'react';
import { useFormik } from 'formik';
import { useTranslations } from 'next-intl';
import { twMerge } from 'tailwind-merge';
import WalletIcon from '@/assets/icons/WalletIcon';
import Input from '@/app/[locale]/trading-view/_components/OrderManagement/Input';
import OptionsSelection from '@/app/[locale]/trading-view/_components/OrderManagement/OptionsSelection';
import Button from '@/components/Button';
import { options } from '@/app/[locale]/trading-view/_components/OrderManagement/data';

type ContentProps = {
  title: string;
  buttonText: string;
  buttonClassName: string;
  onSubmit(values: { price: number; amount: number; total: number }): void;
};

export default function Content({ title, buttonText, buttonClassName, onSubmit }: ContentProps) {
  const t = useTranslations('OrdersManagement');
  const [selectedOption, setSelectedOption] = useState<{
    label: string;
    value: string | number;
  } | null>(null);
  const { values, handleChange } = useFormik({
    initialValues: {
      price: 0,
      amount: 0,
      total: 0,
    },
    onSubmit(values) {
      onSubmit(values);
    },
  });

  return (
    <div className="flex flex-col gap-y-2.5 rounded-lg border border-gray-divider bg-white p-3 dark:border-dark-300 dark:bg-dark-500 desktop:flex-1 desktop:px-14">
      <div className="flex flex-1 items-center justify-between">
        <p className="text-xl font-semibold text-primary dark:text-dark-white">{title}</p>
        <button className="flex items-center gap-x-1 text-sm text-blue-200 dark:text-dark-blue-200">
          <WalletIcon className="h-[16px] w-[16px]" /> {t('orderContent.connectWallet')}
        </button>
      </div>
      <Input
        name="price"
        label={t('orderContent.priceLabel')}
        value={values.price}
        rightContent="SNEK"
        type="text"
        onChange={handleChange}
      />
      <div className="flex flex-col gap-y-1">
        <Input
          name="amount"
          label={t('orderContent.amountLabel')}
          value={values.amount}
          rightContent="ADA"
          type="text"
          onChange={handleChange}
        />
        <div className="grid grid-cols-4">
          <div className="col-span-4 desktop:col-start-2 desktop:col-end-5">
            <OptionsSelection
              options={options}
              selectedOption={selectedOption?.value ? selectedOption.value : null}
              onSelect={setSelectedOption}
            />
          </div>
        </div>
      </div>
      <Input
        name="total"
        label={t('orderContent.totalLabel')}
        value={values.total}
        rightContent="SNEK"
        type="text"
        disabled
      />
      <Button
        label={buttonText}
        type="submit"
        className={twMerge('px-3 py-2 text-xs font-semibold', buttonClassName)}
      />
    </div>
  );
}
