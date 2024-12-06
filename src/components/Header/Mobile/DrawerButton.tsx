import DrawerIcon from '@/assets/icons/DrawerIcon';
import useToggle from '@/hooks/useToggle/useToggle';
import DrawerMenu from '@/components/Header/Mobile/DrawerMenu';

const DrawerButton = () => {
  const [open, toggleOpen] = useToggle({ initial: false });

  return (
    <div className="relative z-50">
      <button className="cursor-pointer" onClick={toggleOpen}>
        <DrawerIcon className="text-primary dark:text-dark-white" />
      </button>

      <DrawerMenu open={open} toggleOpen={toggleOpen} />
    </div>
  );
};

export default DrawerButton;
