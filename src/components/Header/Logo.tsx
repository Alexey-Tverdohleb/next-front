import { FC } from 'react';

import Image from 'next/image';

const Logo: FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={className}>
      <Image src="/logo.png" alt="LOGO" width={40} height={40} />
    </div>
  );
};

export default Logo;
