import Image from 'next/image';
import React from 'react';

import { ImgWrap } from './ProfileImg.style';
import useProfileImage from '@/hooks/useProfileImage';

function ProfileImg() {
  const src = useProfileImage();

  return (
    <ImgWrap>
      <Image src={src} alt="profile" fill style={{ objectFit: 'cover' }} />
    </ImgWrap>
  );
}

export default ProfileImg;
