import { useEffect, useState } from 'react';

import { Toggle } from '@/hooks/useToggle/types';

const useToggle: Toggle = ({ initial = false, onChange }) => {
  const [isOn, setIsOn] = useState<boolean | undefined>(undefined);

  useEffect(() => setIsOn(initial), [initial]);

  const toggleOn = () =>
    setIsOn((prevState) => {
      onChange?.(!prevState);

      return !prevState;
    });

  return [isOn, toggleOn];
};

export default useToggle;
