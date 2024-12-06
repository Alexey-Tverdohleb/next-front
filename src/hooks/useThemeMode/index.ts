import { useTheme } from 'next-themes';

import { THEMES } from '@/components/ToggleMode/constants';
import { IUseThemeMode } from '@/components/ToggleMode/types';

const useThemeMode: IUseThemeMode = () => {
  const { theme, setTheme } = useTheme();

  const isLight = theme === THEMES.light;

  const isDark = theme === THEMES.dark;

  const toggleLight = () => setTheme(isLight ? THEMES.dark : THEMES.light);

  return { isLight, isDark, toggleLight, theme };
};

export default useThemeMode;
