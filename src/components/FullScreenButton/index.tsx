import { FC, useState, useEffect } from 'react';
import { twMerge } from 'tailwind-merge';
import { useOrientation } from 'react-use';

import { IProps } from '@/components/FullScreenButton/types';
import ExpandIcon from '@/assets/icons/ExpandIcon';
import MinimizeIcon from '@/assets/icons/MinimizeIcon';

const FullScreenButton: FC<IProps> = ({ className }) => {
  const { type } = useOrientation();
  const isExpanded = type.includes('landscape');

  const handleClick = async () => {
    const mode = isExpanded ? 'portrait-primary' : 'landscape-primary';

    try {
      if (!window.document.fullscreenElement) {
        await window.document.documentElement.requestFullscreen();
        await window.screen.orientation.lock(mode);
        window.screen.orientation.unlock();
        await window.document.exitFullscreen();
      } else {
        await window.screen.orientation.lock(mode);
        window.screen.orientation.unlock();
        await window.document.exitFullscreen();
      }
    } catch (e) {
      console.error(e);
    }
  };

  const [isMounted, setMounted] = useState<boolean>(false);

  useEffect(() => setMounted(true), []);

  if (!isMounted) return null;

  return (
    <button
      type="button"
      onClick={handleClick}
      className={twMerge(
        'text-gray-secondary dark:text-dark-gray',
        'cursor-pointer',
        'dark:bg-dark-300',
        'border-[1px] dark:border-0 border-gray-divider rounded-[8px]',
        'px-md py-sm',
        className
      )}
    >
      {isExpanded ? <MinimizeIcon /> : <ExpandIcon />}
    </button>
  );
};

export default FullScreenButton;
