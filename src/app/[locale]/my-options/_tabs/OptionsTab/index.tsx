import { FC } from 'react';

import { IProps } from '@/app/[locale]/my-options/_tabs/OptionsTab/types';
import Card from '@/app/[locale]/minting/_components/Card';
import OptionsTable from '@/app/[locale]/my-options/_tables/OptionsTable';
import IssuedTable from '@/app/[locale]/my-options/_tables/IssuedTable';
import MyOptionsFilters from '@/app/[locale]/my-options/_tabs/OptionsTab/MyOptionsFilters';
import IssuedOptionsFilters from '@/app/[locale]/my-options/_tabs/OptionsTab/IssuedOptionsFilters';
import useMyOptions from '@/context/my-options/useMyOptions';
import useIssuedOptions from '@/context/issued-options/useIssuedOptions';

const OptionsTab: FC<IProps> = () => {
  const { filteredData: myOptionsData } = useMyOptions();
  const { filteredData: issuedOptionsData } = useIssuedOptions();

  return (
    <>
      <Card className="max-w-full desktop:mb-xl mb-xmd">
        <MyOptionsFilters />
        <OptionsTable data={myOptionsData} />
      </Card>

      <Card className="max-w-full">
        <IssuedOptionsFilters />
        <IssuedTable data={issuedOptionsData} />
      </Card>
    </>
  );
};

export default OptionsTab;
