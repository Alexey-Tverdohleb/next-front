export interface IProps {
  className?: string;
}

export interface IUseThemeMode {
  (): {
    isLight: boolean;
    isDark: boolean;
    theme: string | undefined;
    toggleLight: () => void;
  };
}
