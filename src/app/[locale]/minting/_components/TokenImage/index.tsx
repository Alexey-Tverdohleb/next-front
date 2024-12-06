import { FC, useState } from 'react';
import Image from 'next/image';
import { twMerge } from 'tailwind-merge';

import { ITokenImage } from '@/app/[locale]/minting/_components/TokenImage/types';
import { replaceTokenURI } from '@/helpers/common';
import { FALLBACK_URL } from '@/app/[locale]/minting/_components/TokenImage/constants';

const TokenImage: FC<ITokenImage> = ({
  src = FALLBACK_URL,
  width = 32,
  height = 32,
  className,
}) => {
  const [error, setError] = useState<boolean>(false);

  return (
    <div
      style={{ width, height }}
      className={twMerge('rounded-full relative overflow-hidden mr-md shrink-0', className)}
    >
      <Image
        layout="fill"
        src={error ? FALLBACK_URL : replaceTokenURI(src)}
        alt="TOKEN"
        onError={() => setError(true)}
      />
    </div>
  );
};

export default TokenImage;
