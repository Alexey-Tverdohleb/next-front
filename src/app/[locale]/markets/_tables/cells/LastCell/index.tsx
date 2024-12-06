import { FC } from 'react';
import { VictoryLine } from 'victory';

import { ILastCell } from '@/app/[locale]/markets/_tables/cells/LastCell/types';
import RightAlignCell from '@/components/Table/RightAlignCell';
import { mockChartData } from '@/app/[locale]/markets/_tables/cells/LastCell/mockData';
import ChevronRightIcon from '@/assets/icons/ChevronRightIcon';

const LastCell: FC<ILastCell> = ({ withRightIcon = true }) => {
  return (
    <RightAlignCell>
      <div className="mr-md h-[64px] text-green">
        <VictoryLine
          data={mockChartData}
          style={{ data: { strokeWidth: 10, stroke: 'currentColor', strokeLinecap: 'round' } }}
        />
      </div>
      {withRightIcon && (
        <ChevronRightIcon className="shrink-0 text-gray-secondary dark:text-dark-gray" />
      )}
    </RightAlignCell>
  );
};

export default LastCell;
