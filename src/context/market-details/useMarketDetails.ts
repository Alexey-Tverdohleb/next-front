import { useContext } from 'react';

import marketDetailsContext from '@/context/market-details/context';

const useMarketDetails = () => {
  const context = useContext(marketDetailsContext);

  if (context === undefined) {
    throw new Error('useMarketDetails must be used within MarketDetailsProvider');
  }

  return context;
};

export default useMarketDetails;
