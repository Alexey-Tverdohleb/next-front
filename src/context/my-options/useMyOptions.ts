import { useContext } from 'react';

import myOptionsContext from '@/context/my-options/context';

export default function useMyOptions() {
  const context = useContext(myOptionsContext);

  if (context === undefined) {
    throw new Error('useMyOptions must be used within MyOptionsProvider');
  }

  return context;
}
