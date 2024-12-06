import { useContext } from 'react';

import marketsContext from '@/context/markets/context';

const useMarkets = () => {
  const context = useContext(marketsContext);

  if (context === undefined) {
    throw new Error('useMarkets must be used within MarketsProvider');
  }

  return context;
};

export default useMarkets;
