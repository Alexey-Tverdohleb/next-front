import { useContext } from 'react';

import issuedOptionsContext from '@/context/issued-options/context';

export default function useIssuedOptions() {
  const context = useContext(issuedOptionsContext);

  if (context === undefined) {
    throw new Error('useIssuedOptions must be used within IssuedOptionsProvider');
  }

  return context;
}
