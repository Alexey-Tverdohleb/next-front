import { useContext } from 'react';

import myTradesContext from '@/context/my-trades/context';

export default function useMyTrades() {
  const context = useContext(myTradesContext);

  if (context === undefined) {
    throw new Error('useMyTrades must be used within MyTradesProvider');
  }

  return context;
}
