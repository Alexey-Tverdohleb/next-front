import MarketsTable from '@/app/[locale]/markets/_tables/MarketsTable';
import Filters from '@/app/[locale]/markets/_components/Filters';

const MarketsPage = () => {
  return (
    <>
      <Filters />
      <MarketsTable />
    </>
  );
};

export default MarketsPage;
