import { FC } from 'react';
import { useTranslations } from 'next-intl';

import { IProps } from '@/app/[locale]/minting/_subpages/FormSubPage/types';
import { strikeOptions, typeOptions } from '@/app/[locale]/minting/constants';
import OptionToggle from '@/components/OptionToggle';
import TokenButton from '@/app/[locale]/minting/_components/TokenButton';
import DateInput from '@/components/DateInput';
import ButtonGroup from '@/components/ButtonGroup';
import Input from '@/components/Input';
import Button from '@/components/Button';
import ArrowRightIcon from '@/assets/icons/ArrowRightIcon';
import ExpandBlock from '@/components/ExpandBlock';
import Card from '@/app/[locale]/minting/_components/Card';

const FormSubPage: FC<IProps> = ({ toggleSubPage }) => {
  const t = useTranslations('MintingPage.FormSubPage');

  return (
    <Card>
      <h1 className="font-bold text-xxl dark:text-dark-white mb-xl">{t('title')}</h1>
      <OptionToggle
        options={typeOptions}
        name="typeOption"
        label={t('optionType.label')}
        className="mb-xl"
      />
      <TokenButton onClick={toggleSubPage} className="mb-[24px]" />
      <DateInput
        name="expireDate"
        className="mb-xl"
        label={t('expireDate.label')}
        checkboxLabel={t('expireDate.checkboxLabel')}
      />
      <ButtonGroup
        options={strikeOptions}
        label={t('strikePrice.label')}
        className="mb-xl"
        inputLabel={t('strikePrice.inputLabel')}
        name="strikePrice"
      />
      <Input
        type="number"
        min={0}
        name="amount"
        label={t('amount.label')}
        className="mb-xl"
        inputLabel={t('amount.inputLabel')}
        placeholder="--"
        info={t('amount.info')}
      />
      <Button className="mb-xl" label={t('createOption')} type="submit" icon={<ArrowRightIcon />} />
      <ExpandBlock moreLabel={t('expandBlock.moreLabel')} lessLabel={t('expandBlock.lessLabel')}>
        <div className="text-lg font-[600] text-primary dark:text-dark-white">
          <div className="flex justify-between mb-md">
            <span>{t('expandBlock.totalFees')}</span>
            <span className="grow border-b-[1px] border-gray-divider dark:border-dark-gray border-dashed mx-sm" />
            <span>0.7</span>
          </div>
          <div className="flex justify-between mb-md">
            <span>{t('expandBlock.totalAmount')}</span>
            <span className="grow border-b-[1px] border-gray-divider dark:border-dark-gray border-dashed mx-sm" />
            <span>12.959</span>
          </div>
        </div>
      </ExpandBlock>
    </Card>
  );
};

export default FormSubPage;
