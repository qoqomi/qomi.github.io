import Image from 'next/image';
import React from 'react';

import { ImgWrap } from './Thumbnail.style';

function Thumbnail({ thumbnail, alt }: { thumbnail: string; alt: string }) {
  return (
    <ImgWrap>
      <Image src={thumbnail} alt={alt} fill style={{ objectFit: 'cover' }} />
    </ImgWrap>
  );
}

export default Thumbnail;
