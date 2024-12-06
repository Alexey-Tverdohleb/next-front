import { useContext } from 'react';

import optionsHistoryContext from '@/context/options-history/context';

export default function useOptionsHistory() {
  const context = useContext(optionsHistoryContext);

  if (context === undefined) {
    throw new Error('useOptionsHistory must be used within OptionsHistoryProvider');
  }

  return context;
}
