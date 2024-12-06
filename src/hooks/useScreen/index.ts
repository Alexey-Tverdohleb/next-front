import { useContext } from 'react';

import screenContext from '@/hooks/useScreen/context';

const useScreen = () => {
  const context = useContext(screenContext);

  if (context === undefined) {
    throw new Error('useScreen must be used in ScreenProvider');
  }

  return context;
};

export default useScreen;
