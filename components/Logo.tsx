import React, { useEffect, useState } from 'react';
import Image from 'next/image';

interface iLogo {
  size: 'small' | 'large' | 'medium';
  altText: string;
}

interface iLogoSize {
  height: number;
  width: number;
}

const Logo: React.FunctionComponent<iLogo> = ({ size, altText }: iLogo): JSX.Element => {
  const [logoSize, setLogoSize] = useState<iLogoSize>({
    height: 50,
    width: 50
  });

  useEffect(() => {
    const res: iLogoSize = handleLogoSize(size);
    setLogoSize(res);
  }, [size]);

  function handleLogoSize(size: iLogo['size']): iLogoSize {
    switch (size) {
      case 'small':
        return { height: 30, width: 30 };
        break;
      case 'medium':
        return { height: 50, width: 50 };
        break;
      case 'large':
        return { height: 80, width: 80 };
        break;

      default:
        return { height: 30, width: 30 };
        break;
    }
  }

  return (
    <>
      <Image src={'/icon/icon.png'} height={logoSize.height} width={logoSize.width} alt={altText} />
    </>
  );
};

export default Logo;
